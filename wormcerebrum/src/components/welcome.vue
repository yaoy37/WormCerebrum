<template>
  <div>
    <span> {{msg}} </span>
    <html_top></html_top>
  </div>
</template>

<script>
import top from './public/top'
export default {
  name: 'welcome',
  // components: { top }, 等同下面的写法
  components: { html_top:top },
  data () {
    return {
      msg: '从前有群兽'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
