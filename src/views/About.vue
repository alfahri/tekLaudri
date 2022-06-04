<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Judul />
  </div>
</template>

<script>
	import Judul from "@/components/Judul.vue"

	export default {
		name: "About",
		components: {
			Judul
		}
	}
</script>
