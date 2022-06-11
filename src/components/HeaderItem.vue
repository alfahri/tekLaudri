<template>
	<div>
		<div class="row">
  			<div class="col-12 text-left">
  				<span style="font-weight: bold;">{{title}}</span>
  			</div>
  		</div>
	</div>
</template>

<script>
	export default {
		name: "HeaderItem",
		props: {
			title: String
		}
	}
</script>