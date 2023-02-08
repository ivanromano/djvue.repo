<template>
      <footer class="p-[3px] lg:p-7 bg-slate-800 ">
				<main class="lg:grid lg:grid-cols-6 ">
					<div class="grid grid-cols-1">
						<span class="text-white mb-3"> Legal </span>
						<span class="text-red-400 mb-2 lg:mb-0"> Politicas de Privacidad </span>
						<span class="text-red-400 mb-2 lg:mb-0"> Aviso Legal </span>
					</div>

					<div class="grid grid-cols-1">
						<span class="text-white mt-4 mb-3 lg:mt-0"> Redes Sociales </span>
						<span class="text-red-400"> Facebook </span>
						<span class="text-red-400"> Twitter </span>
						<span class="text-red-400"> Whatsapp </span>
					</div>

					<div class="text-red-400 mt-4 lg:col-start-5 lg:col-span-2 mx-auto">
						<div class="flex ">
							<span class="text-white lg:text-lg mt-11 ">+54 911 64178818</span>
							<dingding-outlined two-tone-color="#ff37cd" :style="{fontSize: '80px'}" />
						</div>
					</div>
			</main>

			</footer>
</template>

<script setup>
import {DingdingOutlined, UserOutlined, LaptopOutlined, NotificationOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue';

</script>

<style lang="scss" scoped>

</style>