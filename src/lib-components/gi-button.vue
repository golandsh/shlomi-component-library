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
  size: 20px;
  border-radius: 10px;
}
</style>
