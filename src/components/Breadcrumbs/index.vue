<template>
  <div class="container">
    <div>
      <font-awesome-icon icon="angle-left" />Minha conta
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft);

export default {
  name: 'Breadcrumbs',
};
</script>

<style lang="scss" scoped>
.container {
  color: #007a8d;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  max-height: 50px;
  padding: 10px 20px;

  div {
    align-items: center;
    display: flex;
    font-weight: bold;
    justify-content: center;

    svg {
      margin-right: 5px;
    }
  }
}
</style>
