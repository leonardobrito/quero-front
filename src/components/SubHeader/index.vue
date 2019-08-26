<template>
  <div class="container">
    <div>Minha conta</div>
    <div>
      Menu
      <font-awesome-icon icon="angle-down" />
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

export default {
  name: 'SubHeader',
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #18acc4;
  color: white;
  display: flex;
  justify-content: space-between;
  max-height: 50px;
  padding: 10px 20px;

  div {
    align-items: center;
    display: flex;
    font-weight: bold;
    justify-content: center;

    svg {
      margin-left: 5px;
    }
  }
}
</style>
