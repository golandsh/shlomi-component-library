<template>
  <button class="gi-class">
    {{text}}
    <input v-if="img" type="image" :src="img"  alt=""/>
  </button>
</template>

<script>
export default /*#__PURE__*/{
  name: 'GiButton',
  props: {
    text: {
      type: String,
      default: 'Click'
    },
    img: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
button {
  border-radius: 50px;
}
</style>
