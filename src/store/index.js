import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

const state={
	isshow:false
}

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})
