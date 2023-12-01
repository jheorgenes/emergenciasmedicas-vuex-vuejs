<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">{{ tituloCustomizado }}</a>
      </div>
    </nav>
    <div class="container">
      <div class="row mt-5">
        <div class="col-6 p">
          <Profissionais />
        </div>
        <div class="col-6">
          <Equipamentos />
        </div>
        <div class="row mt-5 mb-5 bg-light p-2">
          <div class="col">
            <ConfiguracaoEquipe />
          </div>
        </div>
        <div class="row mt-5 mb-5">
          <div class="col">
            <Equipes />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfiguracaoEquipe from '@/components/ConfiguracaoEquipe.vue';
import Equipamentos from '@/components/Equipamentos.vue';
import Equipes from '@/components/Equipes.vue';
import Profissionais from '@/components/Profissionais.vue';

export default {
  name: "Index",
  props: { 
    msg: String
  },
  computed: {
    tituloCustomizado() {
      return `.: ${this.$store.state.titulo}`
    }
  },
  components: {
    ConfiguracaoEquipe,
    Equipamentos,
    Equipes,
    Profissionais
  }
}
</script>
