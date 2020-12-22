export const state = () => ({
  jobs: [],
  job: {}
})

export const mutations = {
  SET_JOBS (state, jobs) {
    state.jobs = jobs
  },
  SET_JOB (state, job) {
    state.job = job
  }
}

export const actions = {
  async fetchJobs ({ commit }) {
    const response = await this.$axios.$get('/jobList')
    commit('SET_JOBS', response.items)
  },
  async fetchJob ({ commit }, id) {
    const response = await this.$axios.$get('/job/' + id)
    commit('SET_JOB', response)
  }
}

export const getters = {
  getJobs (state) {
    return state.jobs
  },
  getJob (state) {
    return state.job
  }
}
