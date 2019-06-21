<template>
  <div class="sidebar d-none d-md-flex">
    <div class="list-group">
      <router-link to="/" class="list-group-item list-group-item-action brand">Movie</router-link>
      <a class="list-group-item list-group-item-action active">Popular in</a>
      <a class="list-group-item list-group-item-action">Latest</a>
      <a class="list-group-item list-group-item-action">Now Playing</a>
      <a class="list-group-item list-group-item-action">Top Rated</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style lang="scss" scoped>
  .sidebar{
    width: 200px;
    height: 100vh;
    position: fixed;
    background-color: #2701f5;
    float: left;
    padding: 20px;
  }

  .list-group{
    border: none;

    a{
      background: transparent;
      border: none;
      color: white;
      font-weight: 600;
  
      &:hover{
        color: gray;
        cursor: pointer;
      }
    }
  }

  .active{
    color: yellow !important;
  }

  .brand{
    font-size: 26px;
    margin-bottom: 30px;

    &:hover{
      color: hsl(0, 0, 95) !important;
    }
  }
</style>1