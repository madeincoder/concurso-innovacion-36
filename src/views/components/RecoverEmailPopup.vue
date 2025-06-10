<template>
  <div v-if="show" class="popup-message fixed inset-0 bg-black/50 flex items-center justify-center z-30 px-5">
    <div class="bg-white w-full sm:w-[620px] border-[2px] border-solid border-black p-8 sm:p-10 relative">
      <button @click="closePopup" class="text-black hover:scale-[1.2] duration-300 ease-in-out absolute top-5 right-5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

      </button>
      <div class="popup-content mb-8 sm:mb-10 md:mb-16">
        <h4 class="text-2xl sm:text-3xl font-medium text-black font-secondary tracking-tightleading-[1.2] mb-3 sm:mb-4">
          Instrucciones enviadas
        </h4>
        <p class=" text-base sm:text-lg font-normal text-black/70 tracking-tight" v-html="message"></p>
      </div>
      <div class="flex items-center justify-between gap-y-3 gap-x-5 flex-wrap">
          <div class="flex items-center justify-start gap-1">
            <span class="text-sm sm:text-base text-black font-medium tracking-tight">¿No has recibido el correo?</span>
            <a href="#" class="text-sm sm:text-base text-blue font-medium duration-300 ease-in-out hover:underline tracking-tight">Enviar de nuevo</a>
          </div>
          <button @click="closePopup" class="px-6 py-3 sm:py-[18px] text-base sm:text-lg font-secondary font-medium text-white bg-black hover:bg-yellow hover:text-black duration-300 ease-out leading-none">
              Vale
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecoverEmailPopup',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  methods: {
    closePopup() {
      this.$emit('close'); // Emit the close event to parent
    }
  }
};
</script>

<style>
    .popup-content p strong{
      @apply font-bold !text-black;
    }
</style>
