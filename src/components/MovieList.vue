<template>
  <div class="container">
    <div class="inner">
      <div class="message">
        {{ message }}
      </div>
      <div class="movies">
        <MovieItem 
        v-for="item in movies"
        :key="item.imdbID" 
        :movie='item'
        />
      </div>
    </div>
  </div>
</template>
<script>
import MovieItem from './MovieItem.vue'
export default {
  name: '',
  components: {
    MovieItem
  },
  computed: {
    movies(){
      return this.$store.state.movie.movies
    },
    message(){
      return this.$store.state.movie.message
    }
  },
  data() {
    return {
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.container{
  .movies{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>