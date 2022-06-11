<style>
	.menuActive {
		color: #ffc107;
	}
</style>

<template>
	<div>
		<div class="fixed-bottom" style="background: white;">
			<div class="row" style="margin: 0;height: 10vh;display: flex;align-items: center;justify-content: center;">
				<div class="col-4" :class="$route.name === 'Home' ? 'menuActive' : ''" @click="$router.push({ name: 'Home' })">Home</div>
				<div class="col-4" :class="$route.name === 'Pesanan' ? 'menuActive' : ''" @click="$router.push({ name: 'Pesanan' })">Pesanan</div>
				<div class="col-4" :class="$route.name === 'Akun' ? 'menuActive' : ''" @click="$router.push({ name: 'Akun' })">Akun</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>