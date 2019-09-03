<template>
  <div class="semester-container">
    <div class="header">Todos os semestres</div>
    <div>2º Semestre de 2019</div>
    <div>1º Semestre de 2019</div>
  </div>
</template>

<script>
export default {
  name: 'Semesters',
};
</script>

<style lang="scss" scoped>
.semester-container {
  border: 0.5px solid #007a8d;
  border-radius: 5px;
  color: #007a8d;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-top: 40px;
  width: 100%;

  div {
    align-items: center;
    border: 0.5px solid #007a8d;
    display: flex;
    justify-content: center;
    min-height: 50px;
    padding: 0px;
  }
}

.header {
  background-color: #007a8d;
  color: white;
}
</style>
