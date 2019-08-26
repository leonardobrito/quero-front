<template>
  <div class="container">
    <div>
      <font-awesome-icon icon="info-circle" />Ajuda
    </div>
    <div>
      <img src="@/assets/pixel.jpeg" alt="Quero bolsa" />
    </div>
    <div>
      <font-awesome-icon icon="user-circle" />Conta
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faInfoCircle, faUserCircle);

export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  div {
    align-items: center;
    color: #007a8d;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    justify-content: center;
    max-height: 70px;
    min-width: 20%;

    &:first-child {
      border-right: 2px solid lightgray;
    }

    &:last-child {
      border-left: 2px solid lightgray;
    }

    img {
      height: 50px;
      width: 50px;
    }

    @media screen and (min-width: 600px) {
      min-width: 0;
    }
  }
}
</style>
