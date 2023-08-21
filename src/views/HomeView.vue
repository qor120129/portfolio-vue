<template>
  <Headline/>
  <Search/>
  <MovieList/>
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import Headline from '../components/Headline'
import Search from '../components/Search'

export default {
  name: 'HomeView',
  components: {
    Headline,
    Search,
    MovieList
}
}
</script>
