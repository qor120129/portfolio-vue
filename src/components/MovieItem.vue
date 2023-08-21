<template>
  <div>{{movie.imdbID}}</div>
  <img :src="movie.Poster" alt="">
</template>
<script>
export default {
  name: 'MovieItem',
  props: {
    movie: {
      type: Object,
      default: {}
    }
  },
}
</script>