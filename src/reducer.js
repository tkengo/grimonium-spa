const INITIAL_STATE = {
  urls: []
};

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REDUCER_FETCH_CRAWLING_URLS': {
      let newState = {
        urls: action.urls
      };
      return Object.assign({}, state, newState);
    }
    default:
      return state;
  }
}
