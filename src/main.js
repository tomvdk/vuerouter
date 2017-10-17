import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Bar from './components/Bar.vue'
import Posts from './components/Posts.vue'
import Post from './components/Post.vue'
import SideBar from './components/SideBar.vue'

// 1. install
Vue.use(VueRouter)

const Foo = { template: `<div>This is foo</div>` }

const NotFound = { template: `<div>Not Found</div>` }

// /posts/123 => { path: '/posts/123', params: { id: 123 }}

const Inbox = { template: `<div>This is the inbox
<router-view></router-view></div>` }

const InboxMails = { template: `<div>This is the Inbox
<ul>
  <li><router-link to="/mail/111">mail 1</router-link></li>
  <li><router-link to="mail/113">mail 2</router-link></li>
  <li><router-link to="/mail/115">mail 3</router-link></li>
  </ul>
</div>` }
const InboxMail = { template: `<div>This is a mail {{$route.params.id}}</div>` }
const Setting = { template: `<div>These are the settings</div>` }

// 2. create a router instance
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/posts', component: SideBar, children: [
      { path: '', component: Posts },
      { path: 'post/:id', component: Post, props: true }
    ] },
    { path: '/setting', component: Bar },
    { path: '*', component: NotFound }
  ]
})

new Vue({
  el: '#app',
  // 3. inject into root instance
  router,
  render: h => h(App)
})