<template>
  <div>
    <navbar />
    <div class="mb-1 mt-10">
      <div class="bg-gray-100">
        <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <div>
              <p
                class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white rounded-full bg-simplydiarynew-primary">
                Diary Code: {{ this.diary.code }} </p>
            </div>
            <h2
              class="max-w-lg mb-2 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
              Your Diary: <br> {{ this.diary.title }}
            </h2>
            <div class="flex items-center sm:justify-center">
              <a :href="`https://simply-diary.xyz/diarys/${this.diary.code}/new/`" aria-label=""
                class="inline-flex items-center font-semibold text-gray-700 transition-colors duration-200 hover:text-simplydiarynew-primary">Create new diary entry</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div class="max-w-screen-lg sm:mx-auto">
        <div class="col-lg-12 text-start mt-5">
          <DiaryEntry v-for="post in this.entrys" :key="post.created_at" :created_at="post.date_string"
            :content="post.content">
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
    background-color: #F5F4F4 !important;
  }

  .font-nunito {
    font-family: "Nunito", sans-serif !important;
  }

</style>
<script lang="ts">
  import Vue from "vue";
  import DiaryEntry from "../../../components/diaryentry.vue";


  export default Vue.extend({
    components: {
      DiaryEntry
    },
    data() {
      return {
        diary: {},
        entrys: []
      };
    },

    methods: {
      async download() {
        

      }
    },


    mounted: async function () {
      try {
        var fetchedDiary = await this.$axios.get("https://api.simply-diary.xyz/v1/diarys/" + this.$nuxt.context.params
          .slug)
        this.diary = fetchedDiary.data;
        this.entrys = fetchedDiary.data.posts;
        console.log(this.entrys)
        console.log(this.diary)
      } catch (err) {
        console.log("error" + err);
        this.$nuxt.context.error({
          statusCode: 404,
          message: "Page not found"
        });
      }
    }
  });

</script>
