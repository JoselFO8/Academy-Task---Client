import {createStore} from 'vuex'
import VuexPersistence from 'vuex-persist'
import router from '@/router'

/**
 * Storage
 */
const store = createStore({
    state: {
        authenticated: false,
        username: '',
        id: null
    },
    mutations: {
        setAuthenticated(state, value)
        {
            state.isAuthenticated = value;
        },
        setUsername(state, username)
        {
            state.username = username;
        },
        setId(state, id)
        {
            state.id = id;
        },
        logout(state)
        {
            router.push('/Login');
            state.authenticated = false;
            localStorage.removeItem('token');
            state.username = '';
            state.id = null;
        }
    },
    plugins: [
        new VuexPersistence({
            store: window.localStorage
        }).plugin
    ]
})

export default store