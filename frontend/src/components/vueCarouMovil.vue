<template>
  <div class="mt-3 mb-[10px]">
    <Carousel :wrapAround="true" :transition="400" :autoplay="autoplay" >
      <slide v-for="item in DjangoStore.contenido" :key="item" >
        <div class="relative">
          <img :src="`${item.get_thumnail}`" :title="item.title" class="">
          <div class="absolute bottom-0 w-full bg-white text-center p-2 duration-200 bg-opacity-70">
            {{ item.title }}
          </div>
        </div>
      </slide>
 
      <template #addons>
        <navigation  />
        <pagination />
        <main class="flex flex-col justify-start items-start ml-1 my-3">
	    <div class="bg-[#fd4646] rounded-md ">
		    <nav class="flex flex-col justify-center items-center p-2 rounded-lg text-white"> <a-switch v-model:checked="checked" /> modo autoplay </nav>
        </div>
    </main>
      </template>

    </Carousel>
    <!-- :maskStyle="{opacity: 8}" -->
<a-modal v-model:visible="visible" width="1000px" :maskClosable="true"  title="Victini is god" @ok="handleOk">
  <div v-for="item in imagenModal" :key="item.id">
    <nav class="">
      <img :src="`${item.img}`" alt="" class="max-h-[200px] float-left">
      <h4 class="text-center">Name: {{item.title}}</h4>
      <br>
      <h4 class="mt-[165px]">Description: {{item.descripcion}}</h4>
    </nav>
  	<div class="ml-[600px]"> <Donut :at="item.at" :de="item.de" :fer="item.fer" :luc="item.luc" > </Donut> </div>
  </div>
        <!-- <p>Some contents...{{imagenModal.id}} </p>
        <img :src="`${imagenModal.img}`" alt=""> -->
</a-modal>

</div></template>

<script setup>
import { computed, ref } from 'vue';
    import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
    import Donut from "./Donut.vue";
import { useDjangoStore } from '../stores/dJstore';

const DjangoStore = useDjangoStore()

const checked = ref(true);
const visible = ref(false);
const imagenModal = ref([])

const autoplay = computed(() => {
  if (checked.value === false) {
    return 0
  } if (checked.value === true) {
    return 900
  }
})

</script>


<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

</style>
