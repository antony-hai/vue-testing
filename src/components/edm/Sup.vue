<template>
  <sup>{{ text }}</sup>
</template>

<script>
export default {
  props: {
    text: { 
      type: String,
      default: '®'
    }
  }
}
</script>

