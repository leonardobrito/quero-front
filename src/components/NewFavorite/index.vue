<template>
  <div class="new-favorite-container">
    <div>
      <font-awesome-icon icon="plus-circle" />
    </div>
    <div>
      <h2>Adicionar bolsa</h2>
      <p>Clique aqui para adicionar bolsas de cursos do seu interesse</p>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusCircle);
export default {
  name: 'NewFavorite',
};
</script>

<style lang="scss" scoped>
.new-favorite-container {
  align-items: center;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 32px;
  padding: 32px;
  -webkit-box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg {
      color: #007a8d;
      height: 50px;
      width: 50px;
    }
  }
}
</style>
