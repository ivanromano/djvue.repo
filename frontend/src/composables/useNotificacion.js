import { notify } from "@kyvg/vue3-notification";
import { onMounted } from 'vue';

const useNotification = (title, type, text) => {

    notify({
      title,
      type,
      text
    });

};
export default useNotification