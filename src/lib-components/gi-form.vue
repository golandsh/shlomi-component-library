<template>
  <form>
    <div v-for="field of fields" class="field">
      <label v-if="field.type === 'text'">{{field.caption}}</label>
      <input v-if="field.type === 'text'" v-model="field.text" @input="updateValue"
             @blur="checkValue(field)"/>
      <div v-if="errors.indexOf(field.caption) > -1">Value must be provided</div>
      <button v-if="field.type === 'button'">{{field.caption}}</button>
    </div>
  </form>
</template>

<script>
export default /*#__PURE__*/{
  name: 'GiForm',
  props: {
    fields: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      errors: []
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
    checkValue(field) {
      const valid = field.text !== '';
      const idx = this.errors.indexOf(field.caption);
      if (!valid) {
        if (idx === -1)
          this.errors.push(field.caption);
      } else {
        if (idx > -1) this.errors.splice(idx, 1);
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 20px;
  padding: 20px;
}

label {
  margin-right: 20px;
}

.field {
  margin-bottom: 20px;
}
</style>
