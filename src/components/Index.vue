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
import { mapMutations, mapActions } from 'vuex';

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
    ...mapMutations([
      'setEnfermeiros', 
      'setSocorristas', 
      'setMedicos', 
      'setCarros', 
      'setTelefones', 
      'setKitsDeReanimacao'
    ]),
    // ...mapActions(['fetchEquipamentos', 'fetchProfissionais']),
    // ...mapActions({
    //   fetchEquipamentos: 'fetchEquipamentos', 
    //   fetchProfissionais: 'fetchProfissionais'
    // }),
    ...mapActions({
      fetchEquipamentos: (dispatch, payload) => {
        // implementar lógica (assíncrona ou síncrona)
        console.log('payload => ', payload);
        dispatch('fetchEquipamentos', payload);
        // outra lógica (assíncrona ou síncrona)
      }, 
      fetchProfissionais: dispatch => {
        // implementar lógica
        dispatch('fetchProfissionais');
      }
    }),
  },
  created() {
    // fetch('http://localhost:3001/equipamentos')
    //   .then(response => response.json())
    //   .then(dados => {
    //     this.$store.dispatch('adicionarEquipamentos', dados);
    //   });

    // Disparando Actions
    // this.$store.dispatch('fetchEquipamentos');
    // this.$store.dispatch('fetchProfissionais');
    // this.$store.dispatch({ 
    //   type: 'fetchEquipamentos',
    //   carros: true,
    //   telefones: true,
    //   kitsDeReanimacao: true
    // });
    // this.$store.dispatch('fetchProfissionais');

    this.fetchEquipamentos({
      carros: true,
      telefones: true,
      kitsDeReanimacao: true
    });

    this.fetchProfissionais();
  }
}
</script>
