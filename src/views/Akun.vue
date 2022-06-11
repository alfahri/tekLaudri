<template>
	<div>
		<div class="container">
			<div class="row pt-2">
				<div class="col-12">
					<div class="card">
						<div class="card-body" style="padding: 7px" @click="$router.push({ name: 'EditProfile' })">
							<span style="font-weight: bold;">Edit Profile</span>
						</div>
					</div>
				</div>
			</div>
			<div class="row pt-2">
				<div class="col-12">
					<div class="card">
						<div class="card-body" style="padding: 7px">
							<span style="font-weight: bold;">History</span>
						</div>
					</div>
				</div>
			</div>
			<div class="row pt-2">
				<div class="col-12">
					<div class="card">
						<div class="card-body" style="padding: 7px">
							<span style="font-weight: bold;">Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Akun"
	}
</script>