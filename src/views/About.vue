<template>
  <div class="about">
    <div class="photo">
      <Loader v-if="imageLoading" absolute/>
      <img :src="about.image" :alt="about.name">
    </div>
    <div class="naem">
      {{ about.name }}
    </div>
    <div>
      <a :href="about.notion" target='_blank'>Notion Link</a>
    </div>
    <div>
      {{ about.email }}
    </div>
    <div>
      {{ about.phone }}
    </div>
  </div>
</template>
<script>
import Logo from '@/components/Logo';
import Loader from '@/components/Loader';

export default {
  name: 'About',
  components: {
    Logo,
    Loader
  },
  computed: {
    about() {
      return this.$store.state.about;
    },
  },
  mounted () {
    this.init()
  },
  data() {
    return {
      imageLoading: true
    };
  },
  methods: {
    async init() {
      await this.$loadImage(this.about.image)
      return this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main";

.about {
  text-align: center;

  .photo {
    position: relative;
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    padding: 30px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    img {
      width: 80%;
    }
  }
  .naem{
    font-size: 40px;
    font-family: "Oswald", "sans-serif" ;
  }
}
</style>