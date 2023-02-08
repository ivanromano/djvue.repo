<template>
  {{}}
<main class="flex flex-col justify-center items-center">
	<button class="bg-[#793409] px-[30px] rounded-md duration-300 hover:bg-[#a94f17]" @click="showDrawer">
		<p class="text-xl pt-4 text-white font-semibold " > registrate/inicia sesion </p>
	</button>
</main>

<a-drawer v-model:visible="visible" title="Inicia Sesion" width="25rem" :closable="false" :footer-style="{ textAlign: 'right' }">
  <template #extra>
    <a-button style="margin-right: 8px" @click="onClose">Cancelar</a-button>
  </template>
  <a-button type="primary" @click="showChildrenDrawer">Te quieres registrar?</a-button>
  <div class="bg-blue-200 h-screen rounded-lg">
      <form @submit.prevent="(HandleLogin)" class="flex flex-col justify-center items-center my-2">
			  <input type="email" placeholder="ingrese email" v-model.trim="emailLogin" class="h-[35px] w-[10rem] rounded-full mb-4">
			  <input type="password" placeholder="ingrese contraseña" v-model.trim="passwordLogin" class="h-[35px] w-[10rem] rounded-full mb-11">

        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Iniciar Sesion
          </span>
        </button>
        <!-- <a-button type="submit" >Crear Usuario</a-button> -->
		  </form>

    </div>

  <a-drawer v-model:visible="childrenDrawer" title="Registrarse" width="20rem" class="custom-class" :closable="false" :footer-style="{ textAlign: 'right' }"  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="closeChildrenDrawer">Cancelar</a-button>
    </template>

    <div class="bg-amber-200 h-screen rounded-lg">
      <form @submit.prevent="HandleRegister" method="post" enctype="multipart/form-data" class="flex flex-col justify-center items-center">
        <input type="text" placeholder="ingrese un nombre" v-model.trim="nombre" class="h-[2rem] w-[10rem] rounded-full my-4">
			  <input type="email" placeholder="ingrese email" v-model.trim="email" class="h-[2rem] w-[10rem] rounded-full mb-4">
			  <input type="password" placeholder="ingrese contraseña" v-model.trim="password" class="h-[2rem] w-[10rem] rounded-full mb-4">
        <input type="password" placeholder="ingrese otra vez la contraseña" v-model.trim="repassword" class="h-[2rem] w-[10rem] rounded-full mb-4">


        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Crear Usuario
          </span>
        </button>

		  </form>
    </div>
  </a-drawer>

  <template #footer>
    <!-- <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button> -->
  </template>
</a-drawer>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDjangoStore } from '../../stores/dJstore';
import useNotification from '../../composables/useNotificacion.js'

const DjangoStore = useDjangoStore()
const router = useRouter()
const emailLogin = ref('ivan@gmail.com')
const passwordLogin = ref('vic123')
const nombre = ref('')
const email = ref('')
const password = ref('')
const repassword = ref('')
const visible = ref(false)
const childrenDrawer = ref(false)


const HandleLogin = async() => {
  try {
    if (!emailLogin.value || !passwordLogin.value) return useNotification('incorrecto', 'error', 'no mande los datos vacios')

    if (!DjangoStore) return useNotification('error en la base de datos', 'error', 'error')
    
    await DjangoStore.login(emailLogin.value, passwordLogin.value)
	  console.log('esta funciondando' + emailLogin.value + passwordLogin.value);
    useNotification('Felicidades', 'success', 'inicio sesion exitosa')
    router.push('/')
  } catch (error) {
    console.log('error login', error.non_field_errors);
    if (error.non_field_errors) {
      return useNotification('Error', 'error', error.non_field_errors)
    }
    return useNotification('Error de Servidor', 'error', error[0])
  }
}
const HandleRegister = async() => {
	try {
    if (password.value === passwordLogin.value) return useNotification('Error de contraseña', 'error', 'las contraseñas no coinciden')

	  if (!email.value || !password.value || !nombre.value) return useNotification('Error de credenciales', 'error', `señor ${nombre.value}, no mande los datos vacios`)
	  
    if (!DjangoStore) return useNotification('Error de servidor', 'error', `error de servidor`)
    
  await DjangoStore.register(email.value, password.value, nombre.value, )
	  useNotification('Felicidades', 'success', `Se creo el usuario ${nombre.value}`)
    router.push('/')
	} catch (error) {
	  console.log('error register', error);
    if (error.email) return useNotification('Error de email', 'error', error.email)
    
    if (error.password) return useNotification('Error de contraseña', 'error', error.password)
    
    return useNotification('Error de servidor', 'error', error[0])
	  }
  }
const showDrawer = () => {
  visible.value = true;
  };
const onClose = () => {
  visible.value = false;
  };
const showChildrenDrawer = () => {
  childrenDrawer.value = true;
  };
  const closeChildrenDrawer = () => {
    childrenDrawer.value = false;
    };
</script>