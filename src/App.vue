<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style>
	body, html {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
	}
	input, button {
		outline: none;
    	border: none;
    	-webkit-tap-highlight-color: transparent;
	}
	li {
		list-style-type: none;
	}
	[data-dpr = "2"] input,
	[data-dpr = "2"] button {
		font-size: 24px;
	}
	[data-dpr = "3"] input,
	[data-dpr = "3"] button {
		font-size: 36px;
	}
	#app {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		bottom: 0;
		background-image: url('./assets/bg7.jpg');
		background-size: cover;
	    /*-webkit-filter: blur(0.05rem); /* Chrome, Opera */
	    /*-moz-filter: blur(0.05rem);
	    -ms-filter: blur(0.05rem);    
	    filter: blur(0.05rem);
	    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false);*/ 
	}
	.icon {
		display: block;
		background-size: 100% 100%;
	}
</style>

