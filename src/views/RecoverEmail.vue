<template>
    
    <div class="w-full max-w-[508px] z-20 relative">
        
        <div class="flex justify-center mb-10 md:mb-16 flex-col items-center">
            <h2 class=" text-3xl md:text-[40px] text-black font-secondary font-black text-center mb-3 md:mb-5 leading-none">¡Bienvenido!</h2>
            <p class="text-center text-black/70 font-base">Inicia sesión</p>
        </div>
        <!-- Login Form -->
        <div class="bg-white border-[2px] mt-0 border-solid border-black shadow-lg w-full">
            <div class="py-10 sm:py-[60px] px-8 sm:px-12 md:px-[88px]">
                <div class="mb-7 sm:mb-10">
                    <h3 class=" text-2xl sm:text-3xl font-medium font-secondary text-black text-center mb-4 tracking-tight leading-[1.2]">
                        Introduce el correo electrónico con el que creaste tu cuenta
                    </h3>
                    <p class="text-center text-black/70 text-sm sm:text-base">Te enviaremos un mail con las indicaciones.</p>
                </div>
                <form @submit.prevent="submitForm">
                    <!-- Email Input Component -->
                    <div class="mb-6">
                    <EmailInput
                        v-model="email"
                        id="user-email"
                        labelText="Correo electrónico"
                        labelClass="text-black"
                        placeholder="Introducir correo electrónico"
                        inputClass="bg-white"
                    />
                    </div>

                    <button
                    type="submit"
                    class="w-full py-5 px-10 h-[56px] bg-black text-white font-medium text-lg leading-none duration-300 ease-out hover:bg-yellow hover:text-black"
                    >
                    Enviar correo
                    </button>
                </form>
            </div>
        </div>
    </div>
    <!-- Popup Message -->
    <RecoverEmailPopup 
        :show="showPopup" 
        :message="popupMessage" 
        @close="closePopup" 
    />
</template>

<script>
import EmailInput from "./components/EmailInput.vue";
import RecoverEmailPopup from "./components/RecoverEmailPopup.vue"; 
export default {
  name: "RecoverEmail",
  components: {
    EmailInput,
    RecoverEmailPopup
  },
  data() {
    return {
      email: '',
      showPopup: false,
      popupMessage: '',
    };
  },
  methods: {
    submitForm() {
      if (this.email) {
        this.popupMessage = `Hemos enviado las instrucciones a <strong>${this.email}</strong> para que cambies tu contraseña. Revisa la bandeja de entrada y la capeta de spam.`;
        this.showPopup = true;
        document.body.style.overflow = 'hidden'; 
      }
    },
    closePopup() {
      this.showPopup = false;
      document.body.style.overflow = '';
    }
  }
};
</script>