export const Types = {
  REDUCER_FETCH_CRAWLING_URLS: 'REDUCER_FETCH_CRAWLING_URLS',
};

export const Actions = {
  reducerFetchCrawlingUrls: (urls) => {
    return {
      type: Types.REDUCER_FETCH_CRAWLING_URLS,
      urls
    };
  }
};
