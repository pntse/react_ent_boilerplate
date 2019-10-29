import { Model } from '@react-ent/core';

export class DemoModel extends Model {
  get initialState() {
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
}
