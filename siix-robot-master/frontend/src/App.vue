<template>
<div>
    <v-app class="text-uppercase grey--text">
      <Nav />
      <v-main class="grey lighten-4 mx-4">
        <router-view></router-view>
      </v-main>
    </v-app>
</div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: { Nav },
}
</script>