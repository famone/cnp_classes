<template>
	<div class="mainVideo">
        <iframe
          src="https://player.vimeo.com/video/478079229?loop=true&amp;byline=false&amp;controls=false&amp;fun=false&amp;muted=true&amp;portrait=false&amp;title=false&amp;autoplay=true&amp;transparent=true&amp;gesture=media"
          allowtransparency
          allow="autoplay"
          class="bg-video__player"
        ></iframe>
        <div class="col-lg-12 text-center lazer">
        	<h1>Другой уровень контента</h1>
        	<p class="white-txt big-white">
				Маленькие уроки позволяют в сжатые сроки освоить новый навык и сразу же <br>
				начать применять полученные знания на практике. Они отлично подойдут как <br>
				новичкам, так и тем, кто хочет продолжать развиваться в новом направлении...
				</p>
        </div>
      </div>
</template>


<style scoped>
	.mainVideo{
		position: relative;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		padding-bottom: 60px;
		overflow:hidden;
		z-index: 0;
	}
	.mainVideo:before {
	    display: block;
	    content: "";
	    position: absolute;
	    width: 100%;
	    height: 340px;
	    bottom: 0px;
	    background: linear-gradient(180deg, rgba(17, 17, 17, 0), #111);
	    z-index: 1;
	}
	.lazer{
		position: relative!important;
		z-index: 5!important;
	}
</style>