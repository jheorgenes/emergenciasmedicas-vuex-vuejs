<template>
  <div>
    <div v-if="tipo == 'socorristas'">
      {{ turno }}
      <select class="form-control form-control sm" v-model="turno">
        <option value="">Todos</option>
        <option value="manhã">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>
    </div>
    <item v-for="(item, index) in itens" :key="index" :dados="item" :tipo="tipo" />
    <div v-if="tipo == 'socorristas'">Total: {{ totalSocorristasPorTurno(turno) }}</div>
  </div>
</template>

<script>
import Item from '@/components/Item.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'ListaItens',
  components: {
    Item
  },
  data: () => ({
    turno: ''
  }),
  props: {
    tipo: String
  },
  computed: {
    /* Extraindo propriedades globais */
    ...mapState({
      enfermeiros: state => state.enfermeiros,
      // socorristas: state => state.socorristas,
      medicos: state => state.medicos,
      carros: state => state.equipamentos.carros,
      telefones: state => state.equipamentos.telefones,
      kitsDeReanimacao: state => state.equipamentos.kitsDeReanimacao
    }),
    /* Extraindo métodos getters globais */
    // ...mapGetters(['socorristasPorTurno','totalSocorristasPorTurno']), /* Garantindo o acesso a esse método específico  */
    // ...mapGetters({ // Apelidando métodos computados em outras variáveis.
    //   x: 'socorristasPorTurno',
    //   y: 'totalSocorristasPorTurno'
    // }),
    ...mapGetters({
      socorristasPorTurno: 'socorristasPorTurno',
      totalSocorristasPorTurno: 'totalSocorristasPorTurno'
    }),
    itens() {
      switch(this.tipo) {
        case 'enfermeiros': return this.enfermeiros;
        // case 'socorristas': return this.socorristas;
        case 'socorristas': return this.socorristasPorTurno(this.turno);
        case 'medicos': return this.medicos;
        case 'carros': return this.carros;
        case 'telefones': return this.telefones;
        case 'kits-de-reanimacao': return this.kitsDeReanimacao;
      }
      return [];
    }
  }
}
</script>
