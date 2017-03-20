<template>
  <div id="chatroom">
    <div class = "content-box">
     <div v-for = "item in chatRecords">
        <!-- left side content -->
        <div v-if = "newUser !== item.name" class = "content-item left-side">
          <div class = "item-left-side">
            <span class = "item-avatar">B</span>
          </div>
          <div class = "item-right-side">
            <span class = "item-name">{{item.name}}{{newUser}}</span>
            <li class = "chat-content">{{item.msg}}</li>
          </div>
        </div>
        <!-- right side content -->
        <div v-else class = "content-item right-side">
          <div class = "item-left-side">
            <span class = "item-avatar">B</span>
          </div>
          <div class = "item-right-side">
            <span class = "item-name">{{item.name}}</span>
            <li class = "chat-content">{{item.msg}}</li>
          </div>
        </div>
    </div>
     </div>
      
    <div class = "bottom-box">
      <input type="text" class = "input-box"
      v-model="msg"
      @focus="scrollInView"
      >
      <button class = "icon-emoji" 
      @click="sendMessage"
      >发送</button>
    </div>
  </div>
</template>
<style scoped>
  .content-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 1.2rem;
    width: 100%;
    overflow: auto;
  }
  .content-item {
    margin-top: 0.5rem;
    overflow: hidden;
  }
  .left-side .item-left-side,
  .left-side .item-right-side {
    float: left;
    display: block;
  }
  .right-side .item-left-side,
  .right-side .item-right-side {
    float: right;
    display: block;
  }
  .item-left-side {
    width: 1.5rem;
  }
  .item-right-side {
    width: 8.5rem;
  }
  .item-avatar {
    width: 1rem;
    height: 1rem;
    display: block;
    border-radius: 50%;
    margin-left: 0.25rem;
    margin-top: 0.25rem;
    line-height: 1rem;
    text-align: center;
    background-color: #fff;
  }
  .item-name {
    display: block;
    margin-top: 0.25rem;
    color: #fff;
  }
  .chat-content {
    position: relative;
    display: inline-block;
    margin-top: 0.2rem;
    padding: 0.2rem;
    max-width: 7rem;
    border-radius: 0.1rem;
    background-color: #fff;
    color: #111;
  }
  .left-side .chat-content:before {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -0.11rem;
    left: -0.16rem;
    width: 0;
    height: 0;
    border-right: solid 0.18rem #fff;
    border-top: solid 0.11rem transparent;
    border-bottom: solid 0.11rem transparent;
  }
  .right-side .item-name {
    text-align: right;
  }
  .right-side .chat-content {
    position: absolute;
    right: 1.5rem;
  }
  .right-side .chat-content:before {
    content: '';
    position: absolute;
    top: 50%;
    margin-top: -0.11rem;
    right: -0.16rem;
    width: 0;
    height: 0;
    border-left: solid 0.18rem #fff;
    border-top: solid 0.11rem transparent;
    border-bottom: solid 0.11rem transparent;
  }
	.bottom-box {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    overflow: hidden;
    background-color: #f7f5f5;
  }
  .input-box {
    width: 7rem;
    height: 0.8rem;
    padding-left: 0.2rem;
    margin-left: 0.5rem;
    border-radius: 0.1rem;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  } 
  .icon-emoji {
    width: 1.8rem;
    height: 0.8rem;
    margin-left: 0.3rem;
    padding: 1px;
    border-radius: 0.1rem;
    background-color: #fff;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
</style>
<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    chatRecords () {
      return this.$store.state.chatRecords
    },
    newUser () {
      return this.$store.state.newUser
    }
  },
  methods: {
    ...mapActions([
      'login',
      'sendMsg',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    scrollInView (e) {
      setTimeout(() => {
        e.target.scrollIntoViewIfNeeded()
      }, 0)
    },
    sendMessage () {
      this.$store.dispatch('sendMsg', {value: this.msg})
    }
  }
}
</script>
