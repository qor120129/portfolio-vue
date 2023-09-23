<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import Headline from '../components/Headline'
import Search from '../components/Search'

export default {
  name: 'Home',
  components: {
    Headline,
    Search,
    MovieList
  },
  created() {
    this.$store.commit('movie/resetMovies')
  }
}
</script>
