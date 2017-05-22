<template>
	<div class="travel">
        <router-link :to="{ path: '/travel/'+ travel.objectId }">
              <div class="border">
                <div class="border_one">
                  <img src="../assets/images/btn3.png">
                  <p class="name">{{travel.releaseUsername}}</p>
                </div>
                <div id="uu">
                  <div id="uu1"></div>
                </div>
                <div class="border_two">
                    <p class="title">C919将于五月五日在浦东机场起飞</p>
                    <p class="bo">网易云音乐是一款专注于发现与分享的音乐产品,依托专业音乐人、DJ</p>
                    <input type="button" value="阅读详情" class="readBtn">
                    <span class="time">2017年7月15日</span>
                </div>
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
  height: px2rem(160px);
  border: 1px solid #FBC603;
  background-color: #F5F5F5;
  .border_one{
    float: left;
    width: 20%;
    height: px2rem(160px) ;
    img{
      margin-left: 12%;
      margin-top: 3px;
      width: 80%;
      height: px2rem(110px);
    }
    .name{
      font-size:px2rem(30px) ;
      margin-top: 2px;
      color: #000000;
      text-align: center;
    }
  }
#uu{
  float: left;
  width:5%;
  height: px2rem(160px) ;
  #uu1{
    background-color: #FBC603;
    height: px2rem(130px);
    width: 1px;
    margin-top: px2rem(15px);
  }
}
  .border_two{
    text-align: center;
    float: left;
    width: 70%;
    height: px2rem(160px);
    .title{
      font-size: px2rem(30px);
      color: #000000;
      margin-top: 2%;
    }
    .bo{
      text-align: left;
      margin-top: 3%;
    }
    .readBtn{
      background-color: #FFCF17;
      border-radius: 10px;
      width: 27%;
      height: px2rem(35px);
      color: #F90606;
      margin-top: px2rem(10px);
    }
    .time{
      float: right;
      margin-right:px2rem(35px) ;
      margin-top:  px2rem(20px);
    }
  }
}
</style>
