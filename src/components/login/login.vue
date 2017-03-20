<template>
  <div id="login">
    <div class = "logo">chat</div>
  	<input type="text" id = "input-name" 
    placeholder="write your name and go chat ..."
    v-model="text"
    @focus="scrollInView"
    @input="changeIconState">
    <button class="icon icon-go" 
    @click="loginMiddleFunc"
    v-bind:class="{ 'icon-go-disabled': !isActive, 'icon-go-active': isActive }"
    v-bind:disabled="!isActive" ></button>
  </div>
</template>
<style scoped>
  .logo {
    position: absolute;
    top: 3rem;
    left: 4rem;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    font-size: 150%;
    color: #4b7196;
  }
  #input-name {
    position: absolute;
    left: 1rem;
    bottom: 3.5rem;
    width: 8rem;
    height: 1rem;
    border-radius: 0.1rem;
    text-align: center;
    outline: none;  
    background-color: rgba(255, 255, 255, 0.73);
    border: none;
  }
  .icon-go {
    position: absolute;
    bottom: 2rem;
    left: 4.45rem;
    width: 1.1rem;
    height: 1.1rem;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0);
  }
  .icon-go-disabled {
    background-image: url('../../assets/go.png');
  }
  .icon-go-active {
    background-image: url('../../assets/go-active.png');
  }
</style>
<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      text: '',
      isActive: false
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'login',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    scrollInView (e) {
      setTimeout(() => {
        e.target.scrollIntoViewIfNeeded()
      }, 100)
    },
    changeIconState (e) {
      this.text !== '' ? this.isActive = true : this.isActive = false
    },
    loginMiddleFunc (e) {
      this.$store.dispatch('login', {value: this.text, router: this.$router})
    }
  }
}
</script>

