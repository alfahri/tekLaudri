<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Judul />
  </div>
</template>

<script>
// @ is an alias to /src
import Judul from "@/components/Judul.vue";

export default {
  name: 'Home',
  components: {
  	Judul
  }
}
</script>
