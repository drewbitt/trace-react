const {
  TRACE_HOST_DOMAIN,
  TRACE_MEDIA_DOMAIN,
  TRACE_HOST_API_DOMAIN,
  TRACE_SEARCH_QUERY_PATH
} = require("./constants");

const axios = require("axios");

export function searchAnime(files) {
  const reader = new FileReader();

  reader.onabort = () => console.log("file reading was aborted");
  reader.onerror = () => console.log("file reading has failed");
  reader.onload = () => {
    // Rewriting whatanime-js to not use fs

    // File contents
    const based = reader.result;

    // Confirm size less than 10MB after converting to base64
    const buffer = Buffer.from(based.substring(based.indexOf(",") + 1));
    const bufferSize = Math.floor(buffer.length / 1024 ** 2 ** 2);
    if (!bufferSize < 1) {
      return Promise.reject(
        new Error("You should ensure your Base64 encoded image is < 10MB")
      );
    }

    const options = {
      method: "POST",
      data: JSON.stringify({image: based}),
      headers: { "Content-Type": "application/json" }
    };

    return axios(`${TRACE_HOST_API_DOMAIN}${TRACE_SEARCH_QUERY_PATH}`, options)
      .then(res => {
        return getSearchResultFromBinding(res.data);
      })
      .catch(err => {
        if (err.response) {
          throw err.response.data;
        } else {
          throw err.message;
        }
      });
  };

  files.forEach(file => reader.readAsDataURL(file));
}

function SearchResult(
  CacheHit = null,
  RawDocsCount = null,
  RawDocsSearchTime = null,
  ReRankSearchTime = null,
  docs = null,
  limit = null,
  limit_ttl = null,
  quota = null,
  quota_ttl = null
) {
  this.CacheHit = CacheHit;
  this.RawDocsCount = RawDocsCount;
  this.RawDocsSearchTime = RawDocsSearchTime;
  this.ReRankSearchTime = ReRankSearchTime;
  this.docs = docs;
  this.limit = limit;
  this.limit_ttl = limit_ttl;
  this.quota = quota;
  this.quota_ttl = quota_ttl;
}

function getSearchResultFromBinding(json) {
  const {
    CacheHit,
    RawDocsCount,
    RawDocsSearchTime,
    ReRankSearchTime,
    docs,
    limit,
    limit_ttl,
    quota,
    quota_ttl
  } = json;

  if (docs.length > 0) {
    for (let doc of docs) {
      const encodedURI = encodeURIComponent(doc.filename);
      let newKey = {
        imagepreview: `${TRACE_HOST_DOMAIN}/thumbnail.php?anilist_id=${doc.anilist_id}&file=${encodedURI}&t=${doc.at}&token=${doc.tokenthumb}`,
        videopreview: `${TRACE_HOST_DOMAIN}/preview.php?anilist_id=${doc.anilist_id}&file=${encodedURI}&t=${doc.at}&token=${doc.tokenthumb}`,
        naturalvideopreview: `${TRACE_MEDIA_DOMAIN}/video/${doc.anilist_id}/${encodedURI}?t=${doc.at}&token=${doc.tokenthumb}`,
        naturalvideopreviewmute: `${TRACE_MEDIA_DOMAIN}/video/${doc.anilist_id}/${encodedURI}?t=${doc.at}&token=${doc.tokenthumb}&mute`
      };
      Object.assign(doc, newKey);
    }
  }
  return new SearchResult(
    CacheHit,
    RawDocsCount,
    RawDocsSearchTime,
    ReRankSearchTime,
    docs,
    limit,
    limit_ttl,
    quota,
    quota_ttl
  );
}
