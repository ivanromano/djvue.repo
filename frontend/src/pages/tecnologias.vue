<template> <div class="lg:pt-[50px]">
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible :style="{ background: '#df9638'}">
			<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
				<nav class="bg-[#df9638] transition-transform translate-y-2 ease-in-out">

		<nav>
			<a-menu-item key="-1">
				<router-link to="/tecnologias" > 🎉 Todo </router-link> 
      </a-menu-item>
		</nav>
				<a-sub-menu key="sub1">
          <template #title>
            <span>🎃 Mostrar en pagina</span>
          </template>

					<nav v-for="item in nuevoID" :key="item" class="bg-[#c96e3c] py-[1px]">
          	<a-menu-item :key="`${item.id}`"> <router-link :to="`/detalles/${item.id}`">  {{ item.title }} </router-link> </a-menu-item>
					</nav>
        
				</a-sub-menu>

	</nav>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-content style="margin: 0 16px 16px">
				<div class="py-4"> </div>
        <div :style="{ padding: '14px', background: ' #c96e3c', minHeight: '360px' }">
          <span class="font-sans p-2 text-white text-2xl"> Comparador de Codigo </span>

        </div>
      </a-layout-content>
			<Footer/>
    </a-layout>

  </a-layout>
</div> </template>

<script setup>
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from "../components/Footer.vue";
import { useDjangoStore } from "../stores/dJstore";

const DjangoStore = useDjangoStore()

const route = useRoute()
const selectedKeys1 = ref(['2'])
const selectedKeys2 = ref(['1'])
const collapsed = ref(false)
const openKeys = ref(['sub1'])
const product = ref('')
const precio = ref(0)
const stock = ref(false)

let nuevoID = DjangoStore.contenido.map((objeto, index) => {
  return { ...objeto, id: index }
});

const MostrarOferta = computed(() => {
  if (route.params.id) {
    return true
  } if (!route.params.id) {
    return false
  }
})

const Handletiend = async() => {
	try {
		console.clear();

		// await UserStore.crearTienda(product.value, precio.value, stock.value)
	} catch (error) {
		console.log(error);
	}
}

</script>
<style lang="scss" scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(213, 0, 0, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #ff0000;
}
</style>
