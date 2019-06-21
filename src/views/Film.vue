<template>
  <div class="film">
    <Sidebar />

    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-8">

          </div>
          <div class="col-4">
            <img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+film.poster_path" class="img-fluid" alt="Responsive image">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import axios from 'axios'

export default {
  name: 'film',
  components: {
    Sidebar
  },
  data() {
    return {
      film: ''
    }
  },
  mounted: function () {
    var self = this;

    axios.get('https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?api_key=9350682e7550ba5410fc9498023d14b3')
    .then(function (response) {

      // change the local state, "save" to your component
      self.film = response.data;
    })
    .catch(function (error) {
      this.error = error
    });
  },
}
</script>