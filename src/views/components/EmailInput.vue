<template>
  <div>
    <label :for="id" :class="labelClass" class="block text-base font-medium tracking-tight leading-[1.4] mb-3">
        {{ labelText }}
    </label>
    <input
      :id="id"
      type="email"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="inputClass"
      class="w-full p-4 h-[56px] text-base font-normal leading-[1.4] tracking-tight placeholder:text-black/40 text-black border-[2px] border-solid border-black focus:outline-none"
      :placeholder="placeholder"
      required
    />
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
      default: 'email'
    },
    labelText: {
      type: String,
      default: 'Correo electrónico' 
    },
    labelClass: {
      type: String,
      default: '' 
    },
    inputClass: {
      type: String,
      default: '' 
    },
    placeholder: {
      type: String,
      default: 'Introducir correo electrónico' 
    }
  }
};
</script>
