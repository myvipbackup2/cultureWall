<template>
	<div class="y-nav">
        <ul>
			<li>
				<router-link to="/user/navbar">
          <img src="../assets/images/btn1.gif">
					<p>我的信件</p>
				</router-link>
			</li>
			<li>
				<router-link to="/user/post">
          <img src="../assets/images/btn1.gif">
          <p>新建信件</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style scoped lang="scss">
@import '../assets/css/function';

.y-nav {
    background: #fff;
    padding-bottom: px2rem(20px);
	.y_nav_h {
		width: px2rem(380px);
		margin: 0 auto;
		text-align: center;
		padding-top: 5px;
		position: relative;
		padding-bottom: 3px;
		border-bottom: 1px solid #000;
	}
  img{
    width: 54.266px;
    height: 54.266px;
    margin-top: 10px;
  }
	ul {
		display: flex;
		li {
			width: 25%;
			text-align: center;
      margin-left:18%;
			.icon {
				display: block;
				width: px2rem(110px);
				height: px2rem(110px);
				line-height: px2rem(110px);
				background: #000000;
				font-size: 22px;
				margin: 0 auto;
				border-radius: 45%;
                margin-bottom: px2rem(15px);
			}
            p {
                font-size: 13px;
              margin-top: 10px;
            }
		}
	}
}

</style>
