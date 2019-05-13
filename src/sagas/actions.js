export const Types = {
  LOAD_CRAWLING_URLS: 'LOAD_CRAWLING_URLS'
};

export const Actions = {
  loadCrawlingUrls: () => {
    return {
      type: Types.LOAD_CRAWLING_URLS
    };
  }
};
