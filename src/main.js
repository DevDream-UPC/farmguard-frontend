import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//Importar router
import router from "./router/index.js";

import PrimeVue from "primevue/config";
import 'primeflex/primeflex.css';
import Aura from '@primevue/themes/aura'

//Components PrimeVue Components
import Card from "primevue/card";
import Button from "primevue/button";
import Paginator from 'primevue/paginator';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Select from 'primevue/select';
import Toast from 'primevue/toast';
import ToastService from "primevue/toastservice";
import Toolbar from 'primevue/toolbar';
import Menu from 'primevue/menu';
import InputMask from 'primevue/inputmask';
import DatePicker from 'primevue/datepicker';
import ProgressBar from 'primevue/progressbar';
import Password from 'primevue/password';

createApp(App)
    .use(router)
    .use(ToastService)
    .use(PrimeVue,{ripple:true,
        theme: {preset:Aura
        }})
    .component(`pv-password`,Password)
    .component(`pv-progress-bar`,ProgressBar)
    .component(`pv-input-date`,DatePicker)
    .component(`pv-input-mask`,InputMask)
    .component(`pv-menu`, Menu)
    .component(`pv-toolbar`, Toolbar)
    .component(`pv-toast`,Toast)
    .component(`pv-card`,Card)
    .component(`pv-select`,Select)
    .component('pv-button', Button)
    .component('pv-paginator', Paginator)
    .component(`pv-input-tex`,InputText)
    .component(`pv-input-num`,InputNumber)
    .mount('#app')
