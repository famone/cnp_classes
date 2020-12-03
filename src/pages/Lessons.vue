<template>
	<div>
		<Inner :innerSec="innerSec"/>
		<Lessons />
		 <!-- <Faq /> -->
	</div>
</template>

<script>
import Inner from '../components/Inner.vue'
import Lessons from '../components/Lessons.vue'
import Faq from '../components/Faq.vue'

export default{
	components: {Inner, Lessons, Faq},
	data(){
		return{
			innerSec: {
				title: 'Большие курсы',
				descr: 'Домашние задания, обратная связь и разбор полученного результата, все это тебя ждет на наших онлайн-курсах, выбирай интересную тему!'
			}
		}
	}
}
</script>