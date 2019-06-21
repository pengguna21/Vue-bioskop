<template>
  <div class="film">
    <Sidebar />

    <div class="content">
      <Navbar />

      <div class="container">
        <div class="row">
          <div class="col-8">
            <p class="h2 title">{{ film.title }}</p>
            <span class="badge badge-pill badge-success mr-2" v-for="genre in film.genres" :key="genre.id">{{ genre.name }}</span> | {{ film.release_date }}
            <p class="h5 mt-5 sub-title">Overview</p>
            <p class="sub-text text-secondary">{{ film.overview }}</p>
            <button class="btn btn-primary btn-order float-right mt-5 btn-lg" @click="order(film.id)">ORDER</button>
          </div>
          <div class="col-4">
            <img :src="'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+film.poster_path" class="img-fluid shadow" alt="Responsive image">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
  name: 'film',
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      film: '',
      userActive: ''
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

    this.userActive = localStorage.getItem('dataUser')
  },
  methods: {
    order(id) {
      if (this.userActive == null) {
        alert('login dulu')
      } else {
        alert('bisa order')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .img-fluid{
    border-radius: 10px;
  }

  .title{
    font-weight: 600;
  }

  .sub-title{
    font-size: 22px;
  }

  .sub-text{
    font-size: 14px;
  }

  .btn-order{
    border-radius: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
</style>