<template>
  <div class="container">
    <div class="header">
      <h1>Bolsas favoritas</h1>
      <p>
        Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as
        melhores ofertas disponíveis.
      </p>
    </div>

    <Semesters />
    <NewFavorite />
  </div>
</template>

<script>
import NewFavorite from '@/components/NewFavorite/index.vue';
import Semesters from '@/components/Semesters/index.vue';

export default {
  name: 'Favority',
  components: {
    NewFavorite,
    Semesters,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 20px;
  width: 100%;
}

.header {
  text-align: left;
}
</style>
