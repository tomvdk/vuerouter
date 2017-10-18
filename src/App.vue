<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/setting">Settings</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Vue from 'vue'

const Plugin = {
  install(Vue) {
    Vue.mixin({
      created() {
        const validations = this.$options.validate;
        if (validations) {
          Object.keys(validations).forEach(key => {
            const {assert, message} = validations[key]
            this.$watch(key, value => {
              const result = assert(value)
              if (!result) {
                console.log(message(key, value))
              }
            })
          })
        }
      }
    })
  }
}
  Vue.use(Plugin)
  export default {
  name: 'app',
  data() {
    return {
      msg: 'Hello',
      value: 1
    }
  },
  validate: {
    value: {
      assert: newValue => newValue > 1,
      message: (key, value) => `value must be greater than 1 but we have ${newValue}`
    }
  }
}

// this.$vm.value = 1

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
