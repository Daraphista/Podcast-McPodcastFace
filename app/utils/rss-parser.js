const Parser = require("rss-parser");

/**
 * Fetches and parses an RSS feed from a given URL
 * @param {string} feedUrl The URL of the RSS feed to parse
 * @param {Object} [customFields={}] Optional custom fields to extract from the feed
 * @returns {Promise<{feed: Object, items: Array}>} Parsed feed data
 */
async function fetchRssFeed(feedUrl, customFields = {}) {
  try {
    // Create a new parser instance with optional custom fields
    const parser = new Parser({
      customFields: {
        feed: ["image", ...(customFields.feed || [])],
        item: ["itunes", "enclosure", ...(customFields.item || [])],
      },
    });

    // Parse the RSS feed
    const feed = await parser.parseURL(feedUrl);

    // Validate and return the parsed feed
    if (!feed || !feed.items) {
      throw new Error("Invalid RSS feed format");
    }

    return {
      feed: {
        title: feed.title || "",
        description: feed.description || "",
        link: feed.link || "",
        image: feed.image,
      },
      items: feed.items,
    };
  } catch (error) {
    // Log the error and rethrow
    console.error("Error fetching RSS feed:", error);
    throw new Error(
      `Failed to fetch RSS feed: ${error.message || "Unknown error"}`
    );
  }
}

/**
 * Retrieves podcast episodes from an RSS feed
 * @param {string} feedUrl The URL of the podcast RSS feed
 * @returns {Promise<Object|null>} Podcast information and episodes
 */
async function getPodcastEpisodes(feedUrl) {
  try {
    const { feed, items } = await fetchRssFeed(feedUrl);

    // Transform items to extract key podcast episode information
    const episodes = items.map((item) => ({
      title: item.title,
      description: item.description,
      publishDate: item.pubDate,
      audioUrl: item.enclosure?.url,
      duration: item.itunes?.duration,
    }));

    return {
      podcastInfo: feed,
      episodes,
    };
  } catch (error) {
    console.error("Error getting podcast episodes:", error);
    return null;
  }
}

module.exports = {
  fetchRssFeed,
  getPodcastEpisodes,
};
