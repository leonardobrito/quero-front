<template>
  <footer class="container">
    <div class="contact">
      <font-awesome-icon icon="comment" />
      <div>
        <span>0800 123 2222</span>
        <p>Segunda a sexta de 8h às 22h</p>
      </div>
    </div>
    <div>
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
    <div>
      Feito com
      <font-awesome-icon icon="heart" />pela Quero Educação
    </div>
  </footer>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
    align-items: center;
    display: flex;
    justify-content: space-between;
    min-height: 60px;
    padding: 0 20px;

    svg {
      margin: 0 5px;
    }

    &:last-child {
      justify-content: center;
    }
  }
}

.contact {
  background-color: #007a8d;
  div {
    display: flex;
    flex-direction: column;
  }
}
</style>
