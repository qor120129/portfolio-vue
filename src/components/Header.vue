<template>
  <header>
    <Logo/>
    <div class="nav nav-pills">
      <div class="nav-item" v-for="item in navigations" :key="item">
        <router-link 
          class="nav-link" 
          active-class="active" 
          :to="item.href">
          {{ item.name }}
      </router-link>
      </div>
    </div>
  </header>
</template>
<script>
import Logo from "@/components/Logo";
export default {

  name: 'Header',
  components: {
    Logo
  },
  data () {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/Movie'
        },
        {
          name: 'About',
          href: '/About'
        }
      ]
    };
  },
}
</script>
<style lang="scss" scoped>
  header{
    height: 70PX;
    padding: 0 40PX;
    display: flex;
    align-items: center;
    .logo{
      margin-right: 40px;
    }
  }
</style>
