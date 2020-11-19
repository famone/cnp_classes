<template>

	<div class="filter">
		<div class="filter-btn" 
		v-for="(fItem, index) in filters"
		:class="{actFilt: fItem.active}"
		:key="index"
		@click="changeFilter(index, $emit)"
		>{{fItem.title}}</div>
	</div>

</template>


<script>
	export default{
		data(){
			return{
				filters: [
					{title: 'Все категории',active: true},
					{title: 'Фуд-видео',active: false},
				]
			}
		},
		methods: {
			changeFilter(index){
				this.filters.forEach(item =>{
					item.active = false
				})

				this.filters[index].active = true

				this.$emit('getFilter', this.filters[index].title)
			}		
		}
	}
</script>

