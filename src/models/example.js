import { routerRedux } from 'dva/router';
export default {

  namespace: 'example',

  state: {
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    * goto({ payload: url }, { put }) {
      console.log(url)
      yield put(routerRedux.push(url));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
