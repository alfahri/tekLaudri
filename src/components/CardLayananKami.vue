<template>
	<div>
		<div class="card">
			<div class="card-body" style="padding: 0">
				<img src="@/assets/041-scale-1.png" width="50" height="50" style="margin: 5px 0" v-if="title.toLowerCase() === 'kiloan'">
				<img src="@/assets/009-clean-clothes-1.png" width="50" height="50" style="margin: 5px 0" v-if="title.toLowerCase() === 'satuan'">
				<img src="@/assets/009-clean-clothes-1.png" width="50" height="50" style="margin: 5px 0" v-if="title.toLowerCase() === 'vip'">
				<img src="@/assets/011-laundry-1.png" width="50" height="50" style="margin: 5px 0" v-if="title.toLowerCase() === 'karpet'">
				<img src="@/assets/021-iron-1.png" width="50" height="50" style="margin: 5px 0" v-if="title.toLowerCase() === 'setrika saja'">
				<img src="@/assets/009-clean-clothes-1.png" width="50" height="50" style="margin: 5px 0" v-if="title.toLowerCase() === 'ekspress'">
			</div>
		</div>
		<span style="font-size: 10px">{{title}}</span>
	</div>
</template>

<script>
	export default {
		name: "CardLayananKami",
		props: {
			srcGambar: String,
			title: String
		}
	}
</script>