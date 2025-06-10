<template>
  <div class="relative">
    <label :for="id" :class="labelClass" class="block text-base font-medium tracking-tight leading-[1.4] mb-3">
        {{ labelText }}
    </label>
    <div class="relative">
      <input
        :id="id"
        :type="isPasswordVisible ? 'text' : 'password'"
        :value="modelValue"
        @input="updatePassword" 
        :class="inputClass"
        class="w-full p-4 !pr-10 h-[56px] text-base font-normal leading-[1.4] tracking-tight placeholder:text-black/40 text-black border-[2px] border-solid border-black focus:outline-none"
        :placeholder="placeholder"
        required
      />
      <button
        type="button"
        @click="togglePasswordVisibility"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-black"
      >
        <svg v-if="!isPasswordVisible" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00364 4.19593C8.16547 4.35116 8.40523 4.3871 8.61574 4.30982C9.05948 4.14692 9.52753 4.06164 10.0004 4.05843C11.1461 4.05843 12.2449 4.52696 13.0551 5.36095C13.8652 6.19493 14.3204 7.32606 14.3204 8.50549C14.3195 8.90991 14.263 9.31155 14.1532 9.69859C14.0941 9.90667 14.1434 10.1342 14.2998 10.2836L16.3424 12.2356C16.5532 12.437 16.8865 12.4358 17.0869 12.2241C17.9011 11.3638 18.6026 10.3985 19.1741 9.35272C19.464 8.82217 19.4691 8.18632 19.1768 7.65708C18.1565 5.80978 15.2502 1.58784 10.0004 1.58784C8.93989 1.58286 7.88846 1.76575 6.89166 2.12655C6.5339 2.25604 6.45676 2.71212 6.73133 2.9755L8.00364 4.19593ZM15.6356 13.4961L12.8804 10.8377L11.9204 9.93843L8.50279 6.58832L7.12039 5.23443L4.92199 3.11961L2.70814 0.975193C2.4939 0.767676 2.15207 0.772877 1.94425 0.986814L1.73757 1.19957C1.52934 1.41392 1.53453 1.75657 1.74917 1.96451L3.38603 3.5504C3.61333 3.77062 3.60296 4.13746 3.37374 4.35568C2.36589 5.31513 1.50851 6.42859 0.831427 7.65623C0.538326 8.18766 0.532194 8.826 0.825775 9.35717C1.84774 11.2062 4.75364 15.4231 10.0004 15.4231C11.422 15.4303 12.8244 15.1013 14.1001 14.4638C14.3132 14.3574 14.5718 14.39 14.7429 14.5557L17.2927 17.0242C17.5069 17.2316 17.8486 17.2264 18.0564 17.0125L18.2635 16.7994C18.4716 16.5851 18.4665 16.2427 18.2521 16.0347L15.6356 13.4961ZM10.0004 12.9526C8.85466 12.9526 7.75585 12.484 6.94569 11.65C6.13553 10.8161 5.68039 9.68493 5.68039 8.50549C5.68406 7.97741 5.78006 7.4563 5.96193 6.96655C6.08529 6.63439 6.50525 6.57248 6.75972 6.81903L7.48214 7.51895C7.63081 7.66299 7.67911 7.87853 7.64164 8.08211C7.61598 8.22152 7.60215 8.36318 7.60039 8.50549C7.59942 8.90771 7.69424 9.30404 7.87655 9.65979C8.05887 10.0155 8.32311 10.3199 8.64616 10.5461C8.96921 10.7724 9.34121 10.9136 9.7296 10.9576C10.0007 10.9883 10.2741 10.9709 10.538 10.907C10.7467 10.8565 10.9736 10.8948 11.1278 11.0442L11.8737 11.7672C12.1204 12.0062 12.084 12.4139 11.7727 12.559C11.2182 12.8176 10.6142 12.9528 10.0004 12.9526Z" fill="black"/>
        </svg>
        <svg v-else width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6 13.1985C15.5405 13.292 18.1604 8.96704 18.9379 7.33061C19.1246 6.93771 19.1283 6.48964 18.9488 6.0934C18.1954 4.43002 15.6232 0 9.6 0C3.58955 0 1.01557 4.41125 0.255974 6.08278C0.0728611 6.48573 0.0789499 6.94004 0.275029 7.33685C1.06836 8.9423 3.69197 13.1055 9.6 13.1985ZM9.6 10.6625C11.9791 10.6625 13.9077 8.85625 13.9077 6.62807C13.9077 4.39989 11.9791 2.59359 9.6 2.59359C7.22091 2.59359 5.29231 4.39989 5.29231 6.62807C5.29231 8.85625 7.22091 10.6625 9.6 10.6625Z" fill="black"/>
            <path d="M12 6.62807C12 7.86949 10.9255 8.87585 9.6 8.87585C8.27452 8.87585 7.2 7.86949 7.2 6.62807C7.2 5.38666 8.27452 4.38029 9.6 4.38029C10.9255 4.38029 12 5.38666 12 6.62807Z" fill="black"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: 'password' 
    },
    labelText: {
      type: String,
      default: 'Contraseña' 
    },
    labelClass: {
      type: String,
      default: 'text-black' 
    },
    inputClass: {
      type: String,
      default: '' 
    },
    placeholder: {
      type: String,
      default: '••••••••••' 
    }
  },
  data() {
    return {
      isPasswordVisible: false
    };
  },
  methods: {
    updatePassword(event) {
      this.$emit('update:modelValue', event.target.value); // Emit the input value, not the event object
    },
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  }
};
</script>
