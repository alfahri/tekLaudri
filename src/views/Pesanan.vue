<template>
	<div>
		<div class="container">
			<div class="row pt-3">
				<div class="col-12">
					<select class="form-control">
						<option value="Kiloan">Kiloan</option>
						<option value="Satuan">Satuan</option>
						<option value="VIP">VIP</option>
						<option value="Karpet">Karpet</option>
						<option value="SetrikaSaja">Setrika Saja</option>
						<option value="Ekspress">Ekspress</option>
					</select>
				</div>
			</div>
			<div class="row pt-3">
				<div class="col-12">
					<div class="card">
						<div class="card-body" style="padding: 3% 0">
							<div class="row" style="margin: 0">
								<div class="col-4">
									<div class="btn btn-outline-warning" @click="jumlah++">+</div>
								</div>
								<div class="col-4" style="display: flex;align-items: center;justify-content: center;">
									<span>{{jumlah}}</span>
								</div>
								<div class="col-4">
									<div class="btn btn-outline-warning" @click="jumlah > 1 ? jumlah-- : 1">-</div>
								</div>
							</div>
							<div class="row" style="padding: 20px 10px">
								<div class="col-12 text-left">
									<span style="font-weight: bold">Pengambilan</span>
								</div>
								<div class="col-6 text-left">
									<span>{{ this.moment().add(1, "day").format("YYYY-MM-DD") }}</span>
								</div>
								<div class="col-6 text-right">
									<span>{{ this.moment().add(1, "day").format("HH:mm") }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Pesanan",
		data() {
			return {
				jumlah: 1
			}
		},
		methods: {
		}
	}
</script>