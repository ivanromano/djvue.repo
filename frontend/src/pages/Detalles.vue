<template>
<div v-if="pokemon">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#F0D8CB] dark:text-white">  {{DjangoStore.contenido[`${route.params.id}`].title}}</h5>
    <main class="">
        <img class="rounded-lg max-h-[20rem]" :src="`${DjangoStore.contenido[`${route.params.id}`].get_thumnail} `" alt="" />
        <p class="mb-3 font-normal text-[#F0D8CB] dark:text-gray-400">Mismo resultado, distinto codigo</p>
        <div class="p-2 bg-gray-500 rounded-lg">
            <p class="mb-3 font-normal text-[#F0D8CB] dark:text-gray-400" >  {{DjangoStore.contenido[`${route.params.id}`].content}}</p>
        </div>
        
        <p class="mb-3 font-normal text-[#F0D8CB] dark:text-gray-400" > slogan: {{DjangoStore.contenido[`${route.params.id}`].excerpt }}</p>
                    
    </main>
</div>
<div v-else>
    <div>
        no exiset
    </div>
</div>


</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useDjangoStore } from "../stores/dJstore";

const DjangoStore = useDjangoStore()
const pokemon = ref(false)
const numero2 = 2
const route = useRoute()

// const Actualizador = async() => {


    

    
    
// }

// watch(route, () => {
// 		Actualizador()
// 	})

// onMounted(() => {
// 	Actualizador()
// })

const truepoke = () => {
    pokemon.value = true
}
truepoke()
</script>

<style lang="scss" scoped>

</style>