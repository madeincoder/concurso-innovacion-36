<template>
    
    <div class="w-full max-w-[508px] z-20 relative">
        
        <div class="flex justify-center mb-10 md:mb-16 flex-col items-center">
            <h2 class=" text-3xl md:text-[40px] text-black font-secondary font-black text-center mb-3 md:mb-5 leading-none">¡Bienvenido!</h2>
            <p class="text-center text-black/70 font-base">Inicia sesión</p>
        </div>
        <!-- Success Message -->
        <div v-if="formSubmitted">
            <SucessPopup />
        </div>
        <!-- Login Form -->
        <div v-if="!formSubmitted" class="bg-white border-[2px] mt-0 border-solid border-black shadow-lg w-full">
            <div v-if="formError" class="error-msg py-2.5 px-5 bg-[#E40046]">
                <span class="block text-center text-sm font-medium tracking-tight leading-[1.5] text-white">
                    {{ errorMessage }}
                </span>
            </div>
            
            <div class="py-10 sm:py-[60px] px-8 sm:px-12 md:px-[88px]">
                <div class="mb-7 sm:mb-10">
                    <h3 class=" text-2xl sm:text-3xl font-medium font-secondary text-black text-center mb-4 tracking-tight leading-[1.2]">
                        Escribe tu nueva contraseña
                    </h3>
                </div>
                <form @submit.prevent="submitForm">
                    <!-- New Password Input -->
                    <div class="mb-7">
                         <PasswordInput
                            v-model="password"
                            id="user-password"
                            labelText="Contraseña"
                            labelClass="text-black"
                            placeholder="••••••••••"
                            inputClass="w-full"
                        />
                    </div>
                    <!-- Confirm Password Input -->
                    <div class="mb-7">
                         <PasswordInput
                            v-model="confirmPassword"
                            id="user-confirm-password"
                            labelText="Confirmar Contraseña"
                            labelClass="text-black"
                            placeholder="••••••••••"
                            inputClass="w-full"
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
</template>

<script>
import PasswordInput from "./components/PasswordInput.vue";
import SucessPopup from "./components/SucessPopup.vue";
export default {
  name: "RecoveryPassword",
  components: {
    PasswordInput,
    SucessPopup
  },
  data() {
    return {
      password: '',
      confirmPassword: '',  
      formSubmitted: false,   
      formError: false,     
      errorMessage: '',  
      email: 'example@gmail.com',   
    };
  },
  methods: {
    // Form submission logic
    submitForm() {
      this.formError = false;
      this.errorMessage = '';
      // Validate if the passwords match
      if (this.password !== this.confirmPassword) {
        this.formError = true;
        this.errorMessage = 'Las contraseñas no coinciden. Por favor, intenta de nuevo.';
        return;
      }
      this.formSubmitted = true;
    }
  }
};
</script>