<template>
	<div class="travel">
        <router-link :to="{ path: '/travel/'+ travel.objectId }">
              <div class="border">

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
  margin-top: 5px;
  margin-left: 3%;
  width: 93.75%;
  height: 93px;
  border: 1px solid #FBC603;
}
</style>
