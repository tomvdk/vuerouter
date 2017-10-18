<template>
  <div>
      Posts
    <ul v-if="!isLoading">
        
        <li v-for="post in posts" :key="post.id">
            <p>
                <h2>
                    <router-link :to="'/posts/post/' + post.id">{{post.title}}
                    </router-link>
                </h2>
            <span v-color="color">{{post.body}}</span></p>
        </li>
        <router-view></router-view>
       
    </ul><div v-else>
            Loading....
        </div>
 </div>
</template>

<script>


import Vue from 'vue'

  Vue.directive('color', 
    { 
        bind(el, binding, vnode)
        { 
            console.log(vnode)
            el.style.color = binding.value
        },
    inserted(){ },
    update() { },
    componentUpdated() { },
    unbind() {}
    })




import axios from 'axios'

  export default {
     name: 'posts',
  data () {
    return {
        posts: [],
        isLoading: true,
        color: 'red'
    }
  },
  beforeRouteEnter(to, from, next){
          //make call to fetch posts
            axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => next(vm => {
            setTimeout(function() {
            vm.posts = data.data;
            vm.isLoading = false;
        }, 1000);}
        ))
        .catch(function (error) {
            console.log(error);
        });
      
     
  }
  }
</script>

<style scoped>

</style>