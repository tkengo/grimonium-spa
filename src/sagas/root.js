import { all, put, call, takeEvery } from 'redux-saga/effects';
import { Types } from './actions';
import { Actions as A } from '../components/crawling_urls/actions';
import { crawlingUrls } from '../api';

function* loadCrawlingUrlsSaga(action) {
  let urls = yield call(crawlingUrls);
  console.log(urls);
  yield put(A.reducerFetchCrawlingUrls(urls));
}

export default function* rootSaga() {
  yield all([
    takeEvery(Types.LOAD_CRAWLING_URLS, loadCrawlingUrlsSaga)
  ]);
}
