<template>
	<div>
		<div class="container">
			<form>
				<div class="row" style="overflow: auto;align-items: center;justify-content: center;">
					<div class="col-12 text-left">
						<label>First Name</label>
						<input type="email" name="email" class="form-control" v-model="data.firstName" placeholder="First Name">
					</div>
					<div class="col-12 text-left pt-1">
						<label>Last Name</label>
						<input type="email" name="email" class="form-control" v-model="data.lastName" placeholder="Last Name">
					</div>
					<div class="col-12 text-left pt-1">
						<label>Email</label>
						<input type="email" name="email" class="form-control" v-model="data.email" placeholder="Email">
					</div>
					<div class="col-12 text-left pt-1">
						<label>Password</label>
						<input type="email" name="email" class="form-control" v-model="data.password" placeholder="Password">
					</div>
					<div class="col-12 text-left pt-2">
						<button class="btn btn-warning" style="width: 100%;font-weight: bold;">Edit</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "EditProfile",
		data() {
			return {
				data: {
					firstName: "",
					lastName: "",
					email: "",
					password: ""
				}
			}
		}
	}
</script>