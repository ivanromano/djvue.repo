import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";


export const useDjangoStore = defineStore("django", () => {
	const token = ref(null)
	const contenido = ref(null)
	
	const register = async (email, password, name) => {
		    try {
		      console.log("hiciste click");
		      const res = await axios.post("http://127.0.0.1:8000/users/create", {
		        email: email,
		        password: password,
		        name: name,
		      });
		      console.log(res.data);
		      localStorage.setItem('user', 'vas a necesitar mas que eso para hackearme :)')
		    } catch (error) {
		      if (error.response) {
		        throw error.response.data
		      } else if (error.request) {
		        console.log(error.request);
		      } else {
		        // Algo paso al preparar la petición que lanzo un Error
		        console.log('Error', error.response.data);
		      }
		    }
		  }
			
	const login = async (email, password) => {
		try {
			const res = await axios.post("http://127.0.0.1:8000/users/token", {
		    email: email,
		    password: password,
		  });
			token.value = res.data
			console.log('waka' + token.value);
		} catch (error) {
			if (error.response) {
				throw error.response.data
			} else if (error.request) {
				console.log(error.request);
			} else {
				// Algo paso al preparar la petición que lanzo un Error
				console.log('Error', error.response.data);
			}
		}
	}
	
	const blog = async () => {
		try {
			const res = await axios.get("http://127.0.0.1:8000/blog/posts");
			contenido.value = res.data
			console.log('waka' + contenido.value.map(item => item.title));
		} catch (error) {

		}
	}

	blog()
	return {register, login, blog, contenido, token}
})
