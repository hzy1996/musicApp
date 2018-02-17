<template>
  <div class="app navBox">
		<div class="row menu">
			<sicon name="menu" scale="2"></sicon>
		</div>
		<div class="row nav" :style="style">
			<div class="row box"></div>
			<div class="row box"></div>
			<div class="row box"></div>
		</div>
		<div class="row search"></div>
  </div>
</template>
<script>
export default {
  data(){
		return{
			style:{}
		}
	},
	created(){
		let ww = window.document.body.offsetWidth
		this.style = {width:ww-160+'px'}
	}
}
</script>
<style scoped>
	.navBox{
		background: #f00
	}
	.menu, .search{
		height: 100%;
		width: 80px;
		/* background: #fff; */
	}
	.nav{
		height: 100%;
	}
	.box{
		width: 80px;
		height: 100%;
		background: #369
	}
</style>


