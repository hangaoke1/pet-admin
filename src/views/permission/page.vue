<template>
  <div class="app-container">
    Your roles: {{ roles }}
  </div>
</template>

<script>

export default {
  name: 'PagePermission',
  computed: {
    roles() {
      return this.$store.getters.roles
    }
  }
}
</script>
