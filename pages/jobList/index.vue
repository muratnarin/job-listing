<template>
  <div v-if="!$fetchState.pending" class="container align-items-start">
    <b-row class="h-100 w-100">
      <b-col md="4">
        <b-form-group label="Ara">
          <b-input v-model="searchText" placeholder="Anahtar Kelime" class="mb-3" @input="filterList" />
        </b-form-group>

        <b-form-group label="Şehir Seç">
          <b-select v-model="selectedCity" :options="cities" class="mb-3" @input="filterList">
            <template #first>
              <b-form-select-option :value="null">
                -- Tüm Şehirler --
              </b-form-select-option>
            </template>
          </b-select>
        </b-form-group>

        <b-button class="danger" @click="reset">
          Temizle
        </b-button>
      </b-col>
      <b-col>
        <b-row v-if="jobs" cols="2">
          <b-col v-for="job in filteredList" :key="job.jobId" class="mb-5">
            <b-card class="cursor-pointer" @click="$router.push('/jobDetail/'+job.jobId)">
              <div class="flex">
                <div class="mb-2">
                  <b-img fluid :src="job.imageUrl" />
                </div>
                <div class="d-flex mb-2 align-items-center">
                  <h6 class="mb-0 mr-2">
                    Şirket Adı:
                  </h6>
                  <div>{{ job.companyName }}</div>
                </div>
                <div class="d-flex mb-2 align-items-center">
                  <h6 class="mb-0 mr-2">
                    Pozisyon:
                  </h6>
                  <div>{{ job.positionName }}</div>
                </div>
                <div class="d-flex mb-2 align-items-center">
                  <h6 class="mb-0 mr-2">
                    İlan Tarihi:
                  </h6>
                  <div>{{ job.durationDayText }}</div>
                </div>
                <div class="d-flex mb-2 align-items-center">
                  <h6 class="mb-0 mr-2">
                    Uzaklık:
                  </h6>
                  <div>{{ job.distance }}</div>
                </div>

                <div class="d-flex mb-2 align-items-center">
                  <h6 class="mb-0 mr-2">
                    Şehir:
                  </h6>
                  <div>{{ job.cityName }}</div>
                </div>
                <div class="d-flex mb-2 align-items-center">
                  <h6 class="mb-0 mr-2">
                    Lokasyon:
                  </h6>
                  <div>{{ job.townName }}</div>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  async fetch () {
    await this.fetchJobs()
    this.filteredList = this.jobs
  },
  data: () => ({
    response: {},
    searchText: null,
    filteredList: [],
    selectedCity: null
  }),
  computed: {
    ...mapGetters({
      jobs: 'getJobs'
    }),
    cities () {
      return Array.from(new Set(this.jobs.map(v => v.cityName)))
    }
  },

  methods: {
    ...mapActions({
      fetchJobs: 'fetchJobs'
    }),
    ...mapMutations({
      setJobs: 'SET_JOBS'
    }),
    filterList () {
      if (this.selectedCity) {
        const jobList = this.jobs.filter(v => v.cityName === this.selectedCity)
        if (this.searchText) {
          this.filteredList = jobList.filter(v => Object.values(v).some(i => typeof (i) === 'string' && i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '').includes(this.searchText.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036F]/g, ''))))
        } else { this.filteredList = jobList }
      } else if (this.searchText) {
        this.filteredList = this.jobs.filter(v => Object.values(v).some(i => typeof (i) === 'string' && i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036F]/g, '').includes(this.searchText.toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036F]/g, ''))))
      } else { this.filteredList = this.jobs }
    },
    reset () {
      this.searchText = null
      this.selectedCity = null
      this.filterList()
    }
  }
}
</script>

<style>
</style>
