<template>
  <button class="gi-class">{{text}}</button>
</template>

<script>
export default /*#__PURE__*/{
  name: 'GiButton',
  props: {
    text: {
      type: String,
      default: 'Click'
    }
  }
};
</script>

<style scoped>
button {
  border-radius: 50px;
}
</style>
