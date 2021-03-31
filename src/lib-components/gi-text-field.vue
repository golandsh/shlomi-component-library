<template>
  <div>
    <label v-if="label">{{label}}</label>
    <input :value="value" @input="updateValue" @blur="checkValue" v-bind="$attrs" />
    <slot></slot>
    <div class="error" v-if="!valid">Value must be provided</div>
  </div>
</template>

<script>
export default /*#__PURE__*/{
  name: 'GiTextField',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  data() {
    return {
      valid: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
    checkValue(event) {
      this.valid = event.target.value !== '';
      if (!this.valid) {
        event.preventDefault();
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}

label {
  margin-block-end: 20px;
}

input {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  outline: none;
  width: 100%;
}

input:focus {
  border-bottom-color: black;
}
</style>
