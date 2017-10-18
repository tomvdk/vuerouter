

https://codepen.io/anon/pen/BwqqaJ?editors=1111


**Questions**
Typescript

* Definitely look into it, just released new version vue and documentation up2date

Material to show to mgmt

* in progress / done
* backing by big company vs vue.js / vuejs community build for its users
* 





**DAY 1**
starts with v-  or : → javascript land
attributes without v- → html land

v-pre ignores everything inside the element, does not compile anything inside

bind attributes
v-bind:id  of :id short

bind multiple classes at the same time
:class=”{ active: isActive, otherClass: !isActive }”


**DAY 2**
json
https://jsonplaceholder.typicode.com/


**DAY 3**
Jest testing fwk → React
Does not work well with webpack
Does not work well with .vue component files

Evan suggests mocha-webpack
Bundling testfiles with webpack and then run with mocha
in memory tests / fast

Tip: ./node_modules/ → add as path to command prompt so you can run everything exposed in /bin folders
 
Where unit tests
can feature driven in same folder as feature
or separate test directory

vue-test-utils
wrapper around vue instance by calling mount(<component>)
pass props with mount(<component>, { propsData: { <property>: 1 } }

you get methods like text() / html() to assert
call vm on wrapper to access raw Vue instance

**how to test routing**
routing is an application level concept
end2end test = integration test

recommendation: test routing behavior then do with end2end test
Also, not every component should be unit tested
which types of components to test?

* reusable components


Mocks

add to mount options
mocks: {
  
}

quarantine tests with vuex
import { shallow, { createLocalVue } from 'vue-test-utils'

const LocalVue = createLocalVue()
LocalVue.use(Vuex)

then in options of shallow method pass localVue: LocalVue

shallow just current component
mount the component with all child components


End2End testing:
Selenium / Nightwatch (= highlevel wrapper around selenium)
Selenium = a way to orchestrate and talk to browser
Nightwatch = for assertions (=testrunner)
difficult to setup / different per browser

**Directives**
when you need to get your hands dirty :-)
when you need to touch the DOM and cannot use v-if / v-show etc. for some reason

fictief voorbeld
Vue.directive('color', {
},
inserted(){
},
update() {
},
componentUpdated() {
},
unbind() {
})


**Plugins**
const Plugin = {
  install (Vue) {
  Vue.component('foo-bar, {}),
  Vue.directive('my-directive, {})
}
}

Vue.prototype.$http = axios

Global mixin: carefull with this
Vue.mixin({})


this.$options ← on every Vue instance


**Validation plugin:**
https://github.com/baianat/vee-validate


**Render functions**

Virtual DOM
plain object / json

Actual DOM
native object provided by the browser probably created in C++

comparing real DOM to virtual DOM is less expensive than recreating the real DOM

Virtual DOM is efficient enough to create a copy of the actual DOM. Everything is calculated in javascript land
Vitual DOM allows us to manipulate the tree in pure JS until we let the FWK to do the actual updates
