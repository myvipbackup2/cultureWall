<template>
	<div class="travel">
        <router-link :to="{ path: '/travel/'+ travel.objectId }">
              <div class="border">
                <img src="../assets/images/btn3.png">
              </div>
        </router-link>
	</div>
</template>

<script>
export default {
    props: {
        travel: Object
    },
	data() {
		return {

		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';
.border{
  box-shadow:2px 2px 5px #888888;
  margin-top: 5px;
  margin-left: 3%;
  width: 93.75%;
  height: px2rem(128px);
  border: 1px solid #FBC603;
  background-color: #F5F5F5;
  img{
    margin-top: 3px;
    margin-left: 3%;
    width: 12.5%;
    height:  px2rem(100px);
  }
}
</style>
