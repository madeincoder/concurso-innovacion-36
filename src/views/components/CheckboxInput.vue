<template>
  <div class="flex items-center relative checkbox-container cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"  
      @change="$emit('update:modelValue', $event.target.checked)"  
      :id="id"
      class="h-4 w-4 opacity-0 cursor-pointer"
    />
    <span class="h-4 w-4 border-[2px] border-black flex items-center justify-center absolute top-0 left-0 checkbox-check pointer-events-none mt-[2px]">
      <svg v-if="modelValue" class="w-3 h-3 text-black duration-300 ease-in-out" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.25 4.925L3.725 7.4L9.5 1.625" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round"/>
      </svg>
    </span>
    <label :for="id" :class="labelClass" class="ml-2 text-sm text-black tracking-tight leading-[1.4] cursor-pointer">
        {{ labelText }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      default: 'Recordar sesión'
    },
    labelClass: {
      type: String,
      default: 'text-black'
    }
  }
};
</script>
