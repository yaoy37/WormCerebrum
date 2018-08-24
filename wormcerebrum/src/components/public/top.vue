<template>
  <div>
    <div> welcome the top page  with description about object </div>
    <span> {{ msg }} </span>
  </div>
</template>

<script>
export default {
  name: 'top',
  data () {
      return {
        msg: 'welcome the top page  with description about object'
      }
  }
}
</script>
