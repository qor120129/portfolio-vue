<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div class="nav-item" v-for="item in navigations" :key="item">
        <RouterLink :to="item.href" active-class="active" :class="{ active: isMatch(item.path) }" class="nav-link">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
    <div @click="toAbout" class="user">
      <img :src="about.image" :alt="about.name">
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
  computed: {
    about() {
      return this.$store.state.about
    }
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        },
        {
          name: 'Movie',
          href: '/movie/tt6139732',
          path: /^\/movie/
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    };
  },
  methods: {
    isMatch(path) {
      if (!path) return false
      return path.test(this.$route.fullPath)
    },
    toAbout() {
      this.$router.push('/about')
    }
  }
}
</script>
<style lang="scss" scoped>

header {
  height: 70PX;
  padding: 0 40PX;
  display: flex;
  align-items: center;
  position: relative;

  .logo {
    margin-right: 40px;
  }

  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: $gray-200 ;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 40px;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;

    &:hover {
      background-color: darken($color: $gray-200, $amount: 10);
    }

    img {
      width: 80%;
    }
  }

}
@include media-breakpoint-down(sm) {
  header {
    padding: 0 12px ;
    .user{
      right: 12px;
    }
  }
  .nav {
    display: none;
  }
}
</style>
