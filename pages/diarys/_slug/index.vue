<template>
  <div>
    <navbar />
    <div class="mb-1 mt-10">
      <div class="bg-gray-100">
        <div
          class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"
        >
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <div>
              <p
                class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white rounded-full bg-simplydiarynew-primary"
              >
                Diary Code: {{ this.diary.code }}
              </p>
            </div>
            <h2
              class="max-w-lg mb-2 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto"
            >
              Your Diary: <br />
              {{ this.diary.title }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div
      class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16"
    >
      <div class="max-w-screen-2xl sm:mx-auto">
        <div class="col-lg-12 text-start mt-2">
          <div class="flex items-start sm:justify-start mb-6">
            <a
              :href="`https://simply-diary.xyz/diarys/${this.diary.code}/new/`"
              class="mr-3 inline-flex items-center justify-center w-1/2 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-simplydiarynew-secondary hover:bg-simplydiarynew-primary focus:shadow-outline focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="mr-3 bi bi-folder-plus"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Write new Diary Entry
            </a>

            <button
              @click="download"
              class="inline-flex items-center justify-center w-1/2 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-simplydiarynew-secondary hover:bg-simplydiarynew-primary focus:shadow-outline focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-cloud-arrow-down-fill mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"
                />
              </svg>
              Download as PDF
            </button>
            <button
              @click="download"
              class="ml-3 inline-flex items-center justify-center w-1/2 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-simplydiarynew-secondary hover:bg-simplydiarynew-primary focus:shadow-outline focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-cloud-arrow-down-fill mr-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                />
              </svg>
              Diary Settings
            </button>
          </div>
          <DiaryEntry
            v-for="post in this.entrys"
            :key="post.created_at"
            :created_at="post.date_string"
            :timestamp="post.created_at"
            :content="post.content"
          >
          </DiaryEntry>
        </div>
      </div>
    </div>
    <footer-lp />
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

body {
  background-color: #f5f4f4 !important;
}

.font-nunito {
  font-family: 'Nunito', sans-serif !important;
}

.diaryentry:nth-child(2n) {
  background: #f0f0f0;
}
</style>
<script lang="ts">
import Vue from 'vue'
import DiaryEntry from '../../../components/diaryentry.vue'

export default Vue.extend({
  components: {
    DiaryEntry,
  },
  data() {
    return {
      diary: {},
      entrys: [],
    }
  },

  methods: {
    async download() {
      try {
        console.log(this.$nuxt.context.params.slug)
        window.open(
          'https://api.simply-diary.xyz/v1/diarys/' + this.$nuxt.context.params.slug + '/pdf',
          '_blank'
        )
      } catch (err) {
        console.log('error' + err)
        this.$nuxt.context.error({
          statusCode: 404,
          message: 'Page not found',
        })
      }
    },
  },

  mounted: async function() {
    try {
      var fetchedDiary = await this.$axios.get(
        'https://api.simply-diary.xyz/v1/diarys/' + this.$nuxt.context.params.slug
      )
      this.diary = fetchedDiary.data
      this.entrys = fetchedDiary.data.posts
    } catch (err) {
      console.log('error' + err)
      this.$nuxt.context.error({
        statusCode: 404,
        message: 'Page not found',
      })
    }
  },
})
</script>
