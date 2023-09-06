<template>
  <footer>
    <Logo />
    <a href="">{{ new Date().getFullYear() }} fastcampus - HEROPY</a>
  </footer>
</template>
<script>
import Logo from '../components/Logo';
export default {
  name: '',
  components: {},
  components: {
    Logo
  }
}
</script>
<style>
footer{
  padding: 70px 0;
  text-align:center;
  opacity: .3;
}
.logo{
  display: block;
  margin-bottom: 4px;
}
</style>