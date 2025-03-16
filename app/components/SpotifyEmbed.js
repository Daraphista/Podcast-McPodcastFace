"use client";

import { useEffect } from "react";

export default function SpotifyEmbed({ episodeUri }) {
  useEffect(() => {
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById("embed-iframe");
      const options = {
        uri: episodeUri,
        height: "152",
      };
      const callback = (EmbedController) => {};
      IFrameAPI.createController(element, options, callback);
    };
  }, [episodeUri]);

  return (
    <>
      <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
      <div id="embed-iframe" />
    </>
  );
}
