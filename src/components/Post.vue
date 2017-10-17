<template>
    <div>
      This is post with id: {{ post.id }}
        <p>
          <b>{{post.title}}</b><br/>
          {{post.body}}
        </p>
        <ul>
            <li v-for="c in comments" :key="c.id">

                <i>{{c.body}}</i>
                by {{c.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'post',
        props: ['id'],
        data() {
            return {
                post: {},
                comments: {}
            }
        },
         beforeRouteEnter(to, from, next){
             console.log('dsioffsdjoifdsj')
            //make call to fetch posts
            next(vm => {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + vm.id)
                    .then(data => {
                        console.log('in post');
                        vm.post = data.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })

                    axios.get('https://jsonplaceholder.typicode.com/posts/' + vm.id + '/comments')
                    .then(data => {
                        vm.comments = data.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                }
            );
        }
    }
</script>

<style scoped>

</style>