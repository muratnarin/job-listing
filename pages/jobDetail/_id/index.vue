<template>
  <div v-if="!$fetchState.pending" class="container align-items-start">
    <b-row class="h-100 w-100">
      <b-col>
        <b-row>
          <b-col class="mb-5">
            <b-card>
              <div class="d-flex">
                <div class="mr-2">
                  <b-img fluid :src="job.imageUrl" />
                </div>
                <div>
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
                      Ülke:
                    </h6>
                    <div>{{ job.countryName }}</div>
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
                  <div class="d-flex mb-2 align-items-center">
                    <h6 class="mb-0 mr-2">
                      Adres:
                    </h6>
                    <div>{{ job.address }}</div>
                  </div>
                  <div class="d-flex mb-2 align-items-center">
                    <h6 class="mb-0 mr-2">
                      Açıklama:
                    </h6>
                    <div>{{ job.description }}</div>
                  </div>
                  <div class="d-flex mb-2 align-items-center">
                    <h6 class="mb-0 mr-2">
                      İletişim Numarası:
                    </h6>
                    <div>{{ job.contactPhone.countryCallingCode }} {{ job.contactPhone.areaCode }} {{ job.contactPhone.number }}</div>
                  </div>
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
    await this.fetchJob(this.$route.params.id)
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      job: 'getJob'
    })
  },
  methods: {
    ...mapActions({
      fetchJob: 'fetchJob'
    }),
    ...mapMutations({
      setJob: 'SET_JOB'
    })
  }
}
</script>

<style>
</style>
