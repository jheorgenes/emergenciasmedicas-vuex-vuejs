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
import { mapMutations } from 'vuex';

import ConfiguracaoEquipe from '@/components/ConfiguracaoEquipe.vue';
import Equipamentos from '@/components/Equipamentos.vue';
import Equipes from '@/components/Equipes.vue';
import Profissionais from '@/components/Profissionais.vue';

export default {
  name: "Index",
  components: {
    ConfiguracaoEquipe,
    Equipamentos,
    Equipes,
    Profissionais
  },
  props: { 
    msg: String
  },
  computed: {
    tituloCustomizado() {
      return `.: ${this.$store.state.titulo}`
    }
  },
  methods: {
    ...mapMutations(['setEnfermeiros', 'setSocorristas', 'setMedicos', 'setCarros', 'setTelefones', 'setKitsDeReanimacao'])
  },
  created() {
    fetch('http://localhost:3001/enfermeiros')
      .then(response => response.json())
      // .then(dados => this.$store.commit('setEnfermeiros', dados));
      .then(dados => this.setEnfermeiros(dados));

    fetch('http://localhost:3001/socorristas')
      .then(response => response.json())
      .then(dados => this.setSocorristas(dados));

    fetch('http://localhost:3001/medicos')
      .then(response => response.json())
      .then(dados => this.setMedicos(dados));

    fetch('http://localhost:3001/equipamentos')
      .then(response => response.json())
      .then(dados => {
        this.setCarros(dados.carros);
        this.setTelefones(dados);
        this.setKitsDeReanimacao(dados.kitsDeReanimacao);
      });
  }
}
</script>
