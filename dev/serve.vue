<script>
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ShlomiComponentLibrarySample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  ShlomiComponentLibrarySample,
  // }
});
</script>

<template>
  <div id="app">
    <shlomi-component-library-sample />
  </div>
</template>
