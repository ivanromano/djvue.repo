<template>
<a-form :model="formState" name="basic" :label-col="{ span: 11 }" :wrapper-col="{ span: 20 }" autocomplete="on" @finish="onFinish" @finishFailed="onFinishFailed">
<nav class="flex flex-nowrap">
    <a-form-item label="¿Como se llama?" name="username" :rules="[{ required: true, message: 'no lo mandes vacio!', whitespace: true, type: 'string', }]">
        <a-input v-model:value="formState.username" />
    </a-form-item>

    <button type="submit" class="min-w-auto ml-[37px] w-25 h-10 bg-[#F0772B] p-1 rounded-b-xl hover:bg-[#cb5e1a] text-white font-semibold transition-transform hover:translate-y-2 ease-in-out">intentalo</button>
</nav>
</a-form>

</template>

<script setup>
import { reactive, ref } from 'vue';
import useNotification from '../../composables/useNotificacion';

const props = defineProps({
    method:Function,
    model:String
})

const formState = reactive({
        username: '',
        remember: true,
      });


const onFinish = (values) => {
    const MINUSCULAS = formState.username.toLowerCase()

    if (MINUSCULAS == props.model) {
        props.method()
    } else {
        useNotification(`Respuesta incorrecta`, `error`, `la respuesta era ${props.model}`)
    }
}

const onFinishFailed = (errorInfo ) => {
    console.log('Failed:', errorInfo);
}
</script>
