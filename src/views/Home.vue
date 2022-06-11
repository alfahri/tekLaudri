<style>
	#backgroundUtama {
		background-image: url('/img/waves.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
</style>

<template>
  <div>
  	<div class="container">
  		<div class="row" style="height: 28vh;" id="backgroundUtama">
  			<div class="col-12">
  				<div class="card">
  					<div class="card-body">
  						<div class="row">
  							<div class="col-4" style="padding: 0;display: flex;align-items: center;justify-content: center;">
  								<span>Saldo</span>
  							</div>
  							<div class="col-4" style="padding: 0;display: flex;align-items: center;justify-content: center;">
  								<span>100.000</span>
  							</div>
  							<div class="col-4" style="padding: 0">
  								<div class="btn btn-warning" style="display: inline-block;padding: 0 5px;height: 7vh">
  									<img src="@/assets/bill-1.png" width="40" height="40">
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  		<div style="margin-top: -20%">
  			<HeaderItem title="Layanan Kami" />
	  		<div class="row">
	  			<div class="col-4">
	  				<CardLayananKami title="Kiloan" />
	  			</div>
	  			<div class="col-4">
	  				<CardLayananKami title="Satuan" />
	  			</div>
	  			<div class="col-4">
	  				<CardLayananKami title="VIP" />
	  			</div>
	  			<div class="col-4">
	  				<CardLayananKami title="Karpet" />
	  			</div>
	  			<div class="col-4">
	  				<CardLayananKami title="Setrika Saja" />
	  			</div>
	  			<div class="col-4">
	  				<CardLayananKami title="Ekspress" />
	  			</div>
	  		</div>
	  		<HeaderItem title="Pesanan Aktif" />
	  		<div class="row">
	  			<div class="col-12">
	  				<div class="card">
	  					<div class="card-body" style="padding: 5px 0">
	  						<div class="row" style="margin: 0">
	  							<div class="col-2" style="padding: 0 10px">
	  								<img src="@/assets/001-washing machine 1.png" width="50" height="50">
	  							</div>
	  							<div class="col-10" style="padding: 0">
	  								<span style="display: block;">Pesanan No. 0002142</span>
	  								<span style="display: block; font-size: 10px">Sudah Selesai</span>
	  							</div>
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
	import CardLayananKami from "@/components/CardLayananKami.vue"
	import HeaderItem from "@/components/HeaderItem.vue"
	import waves from "@/assets/waves.png"

	export default {
		name: 'Home',
		components: {
			CardLayananKami,
			HeaderItem
		}
	}
</script>
