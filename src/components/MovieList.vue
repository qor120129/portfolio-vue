<template>
  <div class="container">
    <div :class="{ 'no-result': !movie.movies.length }" class="inner">
      <Loader v-if="movie.loading" />
      <div v-if="movie.message" class="message">
        <div>{{ movie.message }}</div>
      </div>
      <div v-else="message" class="movies">
        <MovieItem v-for="item in movie.movies" :key="item.imdbID" :movie='item' />
      </div>
    </div>
  </div>
</template>
<script>
import MovieItem from './MovieItem'
import Loader from './Loader'
export default {
  name: '',
  components: {
    MovieItem,
    Loader
  },
  computed: {
    movie() {
      return this.$store.state.movie
    },
  },
}
</script>
<style lang="scss" scoped>

.container {
  margin-top: 30px;

  .inner {
    background-color: $gray-200;
    padding: 10px 0;
    border-radius: 4px;
    text-align: center;

    &.no-result {
      padding: 70px 0
    }
  }

  ;

  .message {
    color: $gray-400;
    font-size: 20px;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>