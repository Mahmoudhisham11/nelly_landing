"use client";

import { useState, useEffect } from "react";

const GITHUB_REPO = "Mahmoudhisham11/nelly_Pos";
const FALLBACK_URL = `https://github.com/${GITHUB_REPO}/releases/latest`;

let cachedData = null;
let fetchPromise = null;

export function useReleaseInfo() {
  const [data, setData] = useState(
    cachedData || {
      downloadUrl: FALLBACK_URL,
      version: "v1.0.1",
      sizeMb: "82.0 MB",
      date: "",
      loading: !cachedData,
      isFallback: false,
    }
  );

  useEffect(() => {
    if (cachedData) {
      setData(cachedData);
      return;
    }

    if (!fetchPromise) {
      fetchPromise = fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
        .then((res) => {
          if (!res.ok) throw new Error("Network response was not ok");
          return res.json();
        })
        .then((release) => {
          const exeAsset = release.assets?.find((a) =>
            a.name?.toLowerCase().endsWith(".exe")
          );

          const sizeInBytes = exeAsset?.size || 0;
          const sizeMb = sizeInBytes
            ? `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`
            : "82 MB";

          let formattedDate = "";
          if (exeAsset?.created_at || release.published_at) {
            try {
              const d = new Date(exeAsset?.created_at || release.published_at);
              formattedDate = d.toLocaleDateString("ar-EG", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
            } catch {
              formattedDate = "";
            }
          }

          const result = {
            downloadUrl: exeAsset?.browser_download_url || FALLBACK_URL,
            version: release.tag_name || "v1.0.1",
            sizeMb,
            date: formattedDate,
            loading: false,
            isFallback: !exeAsset,
          };

          cachedData = result;
          return result;
        })
        .catch(() => {
          const fallbackResult = {
            downloadUrl: FALLBACK_URL,
            version: "v1.0.1",
            sizeMb: "82 MB",
            date: "",
            loading: false,
            isFallback: true,
          };
          cachedData = fallbackResult;
          return fallbackResult;
        });
    }

    fetchPromise.then((res) => {
      setData(res);
    });
  }, []);

  return data;
}
