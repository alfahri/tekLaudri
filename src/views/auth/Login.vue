<template>
	<div style="height: 100vh;background: grey">
		<div class="container" style="padding-top: 12%;">
			<form>
				<div class="card">
					<div class="card-body">
						<div class="row">
							<div class="col-12">
								<img src="@/assets/logo.png" width="150" height="150">
							</div>
							<div class="col-12">
								<h1>TekLaundry</h1>
							</div>
							<div class="col-12">
								<label>username</label>
								<input type="text" name="username" class="form-control" v-model="data.username">
							</div>
							<div class="col-12 mt-3">
								<label>password</label>
								<input type="password" name="password" class="form-control" v-model="data.password">
							</div>
							<div class="col-12 text-right mt-3">
								<div class="btn btn-success" @click="login()">Login</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				data: {
					username: "",
					password: ""
				}
			}
		},
		methods: {
			login() {
				this.axios.post(`${this.$baseUrl}/auth/signin`, {
					email: this.data.username,
					password: this.data.password
				}).then((res) => {
					if (res.data.status === true) {
						alert("Berhasil login");
					} else {
						alert(res.data.message)
					}
				}).catch((err) => {
					alert("Server error!")
				})
			}
		}
	}
</script>