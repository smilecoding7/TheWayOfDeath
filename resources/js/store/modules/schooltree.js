import * as types from '../mutation-types'
import Cookies from 'js-cookie'
// state
export const state = {
    schoolTree:  Cookies.get('schoolTree') ? JSON.parse(Cookies.get('schoolTree')) : null,
    chooseableSchoolTree: null,
}

// getters
export const getters = {
    schoolTree: state => state.schoolTree,
    chooseableSchoolTree: state => state.chooseableSchoolTree,
}

// mutations
export const mutations = {
    [types.STORE_SCHOOL_TREE] (state,  schoolTree ) {
        state.schoolTree = schoolTree
        Cookies.set('schoolTree', schoolTree, { expires:  365 })
    },
    [types.STORE_CHOOSEABLE_SCHOOL_TREE] (state,  chooseableSchoolTree ) {
        state.chooseableSchoolTree = chooseableSchoolTree
    },
}

// actions
export const actions = {
    storeSchoolTree ({ commit }, payload) {
        commit(types.STORE_SCHOOL_TREE, payload)
    },
    storeChooseableSchoolTree ({ commit }, payload) {
        commit(types.STORE_CHOOSEABLE_SCHOOL_TREE, payload)
    },
}