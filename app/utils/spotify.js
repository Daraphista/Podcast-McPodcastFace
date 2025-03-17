// app/lib/spotify.js
import SpotifyWebApi from "spotify-web-api-node";

const scopes = ["podcast-read"];

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

export async function getSpotifyAccessToken() {
  try {
    // Use client credentials flow for server-side requests
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body["access_token"]);
    return data.body["access_token"];
  } catch (error) {
    console.error("Error getting Spotify access token:", error);
    throw error;
  }
}

export async function findSpotifyEpisodeUri(episodeTitle) {
  try {
    // Ensure we have a valid access token
    await getSpotifyAccessToken();

    // Search for the episode
    const searchResults = await spotifyApi.searchEpisodes(episodeTitle, {
      limit: 1,
    });

    if (searchResults.body.episodes.items.length > 0) {
      const episode = searchResults.body.episodes.items[0];
      return `spotify:episode:${episode.id}`;
    }

    return null;
  } catch (error) {
    console.error("Error finding Spotify episode:", error);
    return null;
  }
}
