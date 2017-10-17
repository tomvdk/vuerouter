<template>
  <div>
This is Bar
<button @click="isSaved = true">Save</button>
{{isSaved ? 'saved' : 'not saved' }}
  </div>
</template>

<script>
  export default {
     name: 'bar',
  data () {
    return {
      isSaved: false
    }
  },
  beforeRouteLeave(to, from, next){
    if(this.isSaved || confirm('Are you sure?')){
      next()
    }
    else{
      next(false)
    }
  }
  }
</script>

<style scoped>

</style>