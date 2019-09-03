<template>
  <footer class="container">
    <div class="contact">
      <div>
        <font-awesome-icon icon="comment" />
      </div>
      <div>
        <span>0800 123 2222</span>
        <p>Segunda a sexta de 8h às 22h</p>
      </div>
    </div>
    <div class="helpers">
      <div>
        <font-awesome-icon icon="comments" />Chat
      </div>
      <div>
        <font-awesome-icon icon="envelope" />E-email
      </div>
      <div>
        <font-awesome-icon icon="info-circle" />Ajuda
      </div>
    </div>
    <div class="message">
      Feito com
      <font-awesome-icon icon="heart" />pela Quero Educação
    </div>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faComment,
  faComments,
  faEnvelope,
  faInfoCircle,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

library.add(faComment, faComments, faEnvelope, faInfoCircle, faHeart);

export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #18acc4;
  color: white;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: center;
  margin-bottom: 0;

  div {
    min-height: 60px;
  }
}

.contact {
  align-items: center;
  background-color: #007a8d;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  div {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child {
      align-items: flex-end;
      margin-left: 30px;
    }
  }
}

.helpers {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  div {
    align-items: center;
    background-color: #007a8d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 4px 2px;
    padding: 10px 20px;
    text-align: left;
    width: 100%;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.message {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  svg {
    margin: 0 5px;
  }
}
</style>
