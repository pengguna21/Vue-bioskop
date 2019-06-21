<template>
  <div class="home">
    <Sidebar />

    <div class="content">
      <Navbar />
      <div class="container">
        <div class="card-group">
          <div class="row">
            <div class="col-sm-6 col-md-4 col-xl-3" v-for="item in films" :key="item.id">
              <router-link :to="{name: 'film', params: { id: item.id }}" class="route">
              <div class="card mb-3">
                <img :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+item.poster_path" class="card-img-top shadow" :alt="item.title">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text"><small class="text-muted">{{ item.release_date }}</small></p>
                </div>
              </div>
              </router-link>
            </div>
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
  name: 'home',
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      films: [],
      error: ''
    }
  },
  mounted() {
    var self = this;

    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9350682e7550ba5410fc9498023d14b3&page=1')
    .then(function (response) {

      // change the local state, "save" to your component
      self.films = response.data.results;
    })
    .catch(function (error) {
      this.error = error
    });
  }
}
</script>

<style lang="scss" scoped>
  .card{
    border: none;
    cursor: pointer;
  }

  .card-img-top{
    border-radius: 20px;
    height: 250px;
    object-fit: cover;
    object-position: center;

    &:hover{
      box-shadow: none !important;
    }
  }

  .card-title{
    font-weight: 700;
  }

  .route{
    color: black;

    &:hover{
      text-decoration: none;
    }
  }

  @media(max-width: 768px) {
    .content{
      margin-left: 0;
    }
  }
</style>
