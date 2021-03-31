<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ServeDev',
  data() {
    return {
      text1: '',
      text2: '',
      fields: [{type: 'text', caption: 'Text1', text: this.text1},
        {type: 'text', caption: 'Text2', text: this.text2},
        {type: 'button', caption: 'Save'}]
    }
  }
});
</script>

<template>
  <div id="app">
    <gi-text-field label="Text1">
      <p>Here is some cool text</p>
    </gi-text-field>
    <gi-button />
    <gi-form :fields="fields"/>
  </div>
</template>
