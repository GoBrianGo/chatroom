import Vue from 'vue'
import Vuex from 'vuex'
import wilddog from 'wilddog'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.

// router object
let $router = ''

// wilddog seting
const config = {
  authDomain: 'brian.wilddog.com',
  syncURL: 'https://brian.wilddogio.com'
}

wilddog.initializeApp(config)
let ref = wilddog.sync().ref('/user')
let msgRef = wilddog.sync().ref('/msg')

ref.on('value', (snapshot) => {}, (errorObject) => {
  console.log('The read failed: ' + errorObject.code)
})

ref.on('child_added', (data) => {
  if (state.newUser !== '') {
    $router.push('chatroom')
  }
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.code)
})

ref.on('value', (snapshot) => {}, (errorObject) => {
  console.log('The read failed: ' + errorObject.code)
})

msgRef.on('child_added', (data) => {
  if (state.newUser !== '') {
    store.commit('pushMsg', data.val())
    console.log(state.newUser === data.val().name)
  }
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.code)
})
const state = {
  newUser: '',
  currentUsers: [],
  chatRecords: []
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  login (state, obj) {
    $router = obj.router
    state.newUser = obj.value
  },
  pushMsg (state, obj) {
    state.chatRecords.push(obj)
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  login ({ commit }, obj) {
    commit('login', obj)
    ref.push({
      'name': obj.value
    })
  },
  sendMsg ({ commit }, obj) {
    msgRef.push({
      'name': state.newUser,
      'msg': obj.value
    })
  },
  incrementIfOdd ({ commit, state }) {},
  incrementAsync ({ commit }) {}
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
