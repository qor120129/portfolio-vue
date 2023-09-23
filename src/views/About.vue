<template>
  <div class="about">
    <div class="photo">
      <Loader v-if="imageLoading" absolute />
      <img :src="image" :alt="name">
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>
      <a :href="notion" target='_blank'>Notion Link</a>
    </div>
    <div>
      {{ email }}
    </div>
    <div>
      {{ phone }}
    </div>
  </div>
</template>
<script>
import Logo from '@/components/Logo';
import Loader from '@/components/Loader';
import { mapState } from 'vuex';

export default {
  name: 'About',
  components: {
    Logo,
    Loader
  },
  computed: {
    ...mapState('about', [
      'image',
      'notion',
      'name',
      'email',
      'phone',
    ]),
    // about() {
    //   return this.$store.state.about;
    // },
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      imageLoading: true
    };
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      return this.imageLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
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

  .name {
    font-size: 40px;
    font-family: "Oswald", "sans-serif";
  }
}
</style>