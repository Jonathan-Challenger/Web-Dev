// import axios from 'axios';
// import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: ''
};

const getters = {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user
};

const actions = {

};

const mutations = {

};

export default {
    state,
    actions,
    getters,
    mutations
}