import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = {
  testingProps: [
    'This is the testing prop #1',
    'This is the testing prop #2',
    'This is the testing prop #3'
  ]
}

export const store = new Vuex.Store({
  state: initialState,
  getters: {
    testingProps(state){   
      return state.testingProps
    }
  },
  mutations:{
    removeProps(state) {
      return state.testingProps.pop()
    },
    addProps(state){
      let stateProps = state.testingProps;
      return stateProps.push(`This is the testing prop #${stateProps.length + 1}`)
    }    
  }
  ,
  actions: {
    asyncMutation: context => {
      context.commit('removeProps');
    },
    addToTestingProps: context => {
      context.commit('addProps')
    }
  }
});