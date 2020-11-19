<template>
	<div class="bgfon":style="{ 'background-image': 'url(' + teaserCont.img + ')' }">
        <iframe
          :src=" 'https://player.vimeo.com/video/' + teaserCont.teaser + '?loop=true&amp;byline=false&amp;controls=false&amp;fun=false&amp;muted=true&amp;portrait=false&amp;title=false&amp;autoplay=true&amp;transparent=true&amp;gesture=media' "
          allowtransparency
          allow="autoplay"
          class="bg-video__player"
        ></iframe>
      </div>
</template>

<script>
	export default{
		props: {
			teaserCont: {
				required: true,
				type: Object
			}
		}
	}
</script>