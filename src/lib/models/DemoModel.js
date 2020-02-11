import { Model } from '@rlean/core';

class DemoModel extends Model {
  /**
   * The following code is generated for you but may be included
   * to extend or override behavior.
   * 
   * get initialState() {
      return {
        demoModel: null
      };
    }
    get types() {
      return {
        SET_DEMO_MODEL: 'SET_DEMO_MODEL'
      };
    }
    reducer(state, action) {
      switch (action.type) {
        case this.types.SET_DEMO_MODEL:
          return {
            ...state,
            ...action.demoModel
          };
        default:
          return state;
      }
    }
    async updateState(demoModel, type) {
      return {
        type: this.types.SET_DEMO_MODEL,
        demoModel
      };
    }
   */
}

export default new DemoModel();
