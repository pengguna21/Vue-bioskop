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
            <button 
              class="btn btn-primary btn-order float-right mt-5 btn-lg"
              @click="showOrder()"
              data-toggle="modal" 
              :data-target="userActive == null ? '' : '#modalOrder'">ORDER</button>

            <!-- Modal -->
            <div class="modal fade" id="modalOrder" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Order</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="form-group row">
                      <label for="inputQty" class="col-sm-2 col-form-label">Qty</label>
                      <div class="col-sm-10">
                        <input type="number" class="form-control" id="inputQty" placeholder="Qty" v-model="inputQty">
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="orderNow(film.id)">Order</button>
                  </div>
                </div>
              </div>
            </div>
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
      userActive: [],
      inputQty: '',
      order: []
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

    this.userActive = JSON.parse(localStorage.getItem("dataUser"))
    this.order = JSON.parse(localStorage.getItem("order"))
  },
  methods: {
    showOrder() {
      if (this.userActive == null) {
        alert('login dulu')
      } else {
        return false;
      }
    },
    orderNow(id) {
      const dataOrder = {
        film_id: id,
        qty: this.inputQty,
        user: this.userActive
      }
      this.order.push(dataOrder)
      const asdf = JSON.stringify(this.order)
      localStorage.setItem('order', asdf)
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