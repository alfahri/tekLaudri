<template>
	<div>
		<form>
			<div class="container">
				<div class="row" style="height: 27vh;">
					<div class="col-12" style="position: relative;" :style="{'background': this.colorTheme.background}">
						<h3 style="position: absolute;bottom: 3%;color: black;font-weight: bold;">Sign Up</h3>
					</div>
				</div>
				<div class="row" style="height: 73vh;overflow: auto;align-items: center;justify-content: center;">
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
						<button class="btn btn-warning" style="width: 100%;font-weight: bold;">Sign-Up</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: "Register",
		data() {
			return {
				data: {
					email: ""
				}
			}
		}
	}
</script>