<template>
  <div>
    <navbar />
    <div class="mb-1 mt-10">
      <div class="bg-gray-100">
        <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <div>
              <p
                class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white rounded-full bg-simplydiary-primary">
                Diary Code: {{ this.diary.code }} </p>
            </div>
            <h2
              class="max-w-lg mb-2 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
              Create a new Diary Entry
            </h2>
            <div class="flex items-center sm:justify-center">
              <a :href="`${this.backurl}`" aria-label=""
                class="inline-flex items-center font-semibold text-gray-700 transition-colors duration-200 hover:text-simplydiary-primary">Back
                to Diary</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16" @submit.prevent="createNewEntry">
      <div class="max-w-screen-lg sm:mx-auto">
        <form class="col-lg-12 text-start mt-5">
          <label class="block">
            <span class="text-black font-bold font-nunito text-xl">Start writing, sort your feelings: </span>
            <textarea v-model="entry" class="form-textarea mt-1 mb-3 block w-full border-2 border-simplydiary-primary rounded border-opacity-50 focus:border-simplydiary-secondary focus:outline-none focus:shadow-outline" rows="12"
              placeholder="Today I saw my dream girl again...." required></textarea>
			  <button type="submit"
                    class="inline-flex items-center  h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    Create Entry
              </button>
          </label>
        </form>
      </div>
    </div>

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


  export default Vue.extend({
    data() {
      return {
        diary: {},
		backurl: "",
        entry: "",
      };
    },

    methods: {
      async createNewEntry() {
        var createdDiaryPost = await this.$axios.post("https://api.simply-diary.xyz/v1/diarys/" + this.$nuxt.context
          .params
          .slug + "/posts", {
            content: this.entry
          });
        this.$router.push(`/diarys/${this.$nuxt.context
          .params
          .slug}`)

      }
    },


    mounted: async function () {
      try {
        var fetchedDiary = await this.$axios.get("https://api.simply-diary.xyz/v1/diarys/" + this.$nuxt.context.params
          .slug)
        this.diary = fetchedDiary.data;
		this.backurl = "http://localhost:3000/diarys/" + fetchedDiary.data.code;
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
