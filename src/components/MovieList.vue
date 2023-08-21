<template>
  <div class="container">
    <div class="inner">
      <MovieItem 
        v-for="item in movies"
        :key="item.imdbID" 
        :movie='item'
      />
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