<template>
  <button :class="outlined ? 'outline' : 'gi-class'">{{text}}</button>
</template>

<script>
export default /*#__PURE__*/{
  name: 'GiButton',
  props: {
    text: {
      type: String,
      default: 'Click'
    },
    outlined: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.gi-class {
  border-radius: 50px;
  color: white;
}

.outline {
  border-radius: 50px;
  background-color: white;
  border-color: blue;
  color: blue;
}
</style>
