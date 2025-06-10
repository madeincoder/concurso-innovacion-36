<template>
  <div class="w-full max-w-[508px] space-y-16 z-20 relative">
    <div class="flex justify-center mb-10 md:mb-16 flex-col items-center">
      <h2
        class="text-3xl md:text-[40px] text-black font-secondary font-black text-center mb-3 md:mb-5 leading-none"
      >
        ¡Bienvenido!
      </h2>
      <p class="text-center text-black/70 font-base">Inicia sesión</p>
    </div>
    <!-- Login Form -->
    <div
      v-if="!isLoading"
      class="bg-white border-[2px] mt-0 border-solid border-black shadow-lg w-full"
    >
      <!-- <div class="error-msg py-2.5 px-5 bg-[#E40046]">
              <span class="block text-center text-sm font-medium tracking-tight leading-[1.5] text-white">Correo electrónico incorrecto o no existente</span>
            </div> -->
      <div class="py-10 sm:py-[60px] px-8 sm:px-12 md:px-[88px]">
        <form @submit.prevent="submitForm">
          <!-- Email Input Component -->
          <div class="mb-7">
            <EmailInput
              v-model="email"
              id="user-email"
              labelText="Correo electrónico"
              labelClass="text-black"
              placeholder="Introducir correo electrónico"
              inputClass="bg-white"
            />
          </div>

          <!-- Password Input Component -->
          <div class="mb-4">
            <PasswordInput
              v-model="password"
              id="user-password"
              labelText="Contraseña"
              labelClass="text-black"
              placeholder="••••••••••"
              inputClass="w-full"
            />
          </div>

          <div class="flex justify-between items-center flex-wrap gap-1 mb-6">
            <!-- Remember Me Checkbox Component -->
            <CheckboxInput
              v-model="rememberMe"
              id="rememberMe2"
              labelText="Recordar sesión"
              labelClass="text-black"
            />
            <a
              href="/recovery-email"
              class="text-sm text-blue font-medium tracking-tight duration-300 ease-in-out hover:underline"
              >¿Contraseña olvidada?</a
            >
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-5 px-10 h-[56px] bg-black text-white font-medium text-lg leading-none duration-300 ease-out hover:bg-yellow hover:text-black"
          >
            Iniciar sesión
          </button>
        </form>
        <div class="mt-9 text-center flex items-center justify-center gap-1">
          <span class="text-sm text-black/70 font-medium"
            >¿No eres miembro?
          </span>
          <a
            href="#"
            class="text-sm text-blue font-medium duration-300 ease-in-out hover:underline"
            >Crear cuenta</a
          >
        </div>
      </div>
    </div>
    <div
      v-if="isLoading"
      class="bg-white border-[2px] border-solid border-black py-[100px] px-[120px] shadow-lg w-full"
    >
      <ProgressCircle />
    </div>
  </div>
</template>

<script>
//  import ProgressCircle from "@/views/components/MarqueeComponent.vue";
import ProgressCircle from "./components/ProgressCircle.vue";
import EmailInput from "./components/EmailInput.vue";
import PasswordInput from "./components/PasswordInput.vue";
import CheckboxInput from "./components/CheckboxInput.vue";
export default {
  name: "LoginPage",
  components: {
    ProgressCircle,
    EmailInput,
    PasswordInput,
    CheckboxInput,
  },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      isLoading: false,
    };
  },
  methods: {
    submitForm() {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        console.log(
          "Form submitted:",
          this.email,
          this.password,
          this.rememberMe
        );
      }, 5000);
    },
  },
};
</script>
