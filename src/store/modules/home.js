import api from '@/services/api';

const home = {
  state: {
    scholarships: [],
  },
  getters: {},
  mutations: {
    FETCH_SCHOLARSHIPS: (state, payload) => {
      state.scholarships = payload.scholarships;
    },
  },
  actions: {
    async fetchScholarships({ commit }) {
      try {
        const { data } = await api.get('/redealumni/scholarships');
        commit('FETCH_SCHOLARSHIPS', {
          scholarships: data,
        });
      } catch (error) {
        console.warn(error);
      }
    },
  },
};

export default home;
