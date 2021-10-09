<template>
  <div class="container">
    <Messages />
    <FormMessage />
  </div>
</template>

<script>
import Messages from './components/Messages.vue'
import FormMessage from './components/FormMessage.vue'

export default {
  name: 'App',
  components: {
    Messages,
    FormMessage
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.container {
  padding: 50px 15px;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
