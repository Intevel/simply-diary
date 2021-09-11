<template>
  <div>
    <form class="flex flex-col items-center w-full mb-3 md:flex-row md:px-16" @submit.prevent="createNewDiary">
      <input placeholder="Title" required="" type="text" v-model="title"
        class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-simplydiary-secondary focus:outline-none focus:shadow-outline" />
      <button type="submit"
        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-simplydiary-primary hover:bg-simplydiary-secondary focus:shadow-outline focus:outline-none">
        Ceate
      </button>
    </form>
    <div class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
      <input v-model="remember" type="checkbox"
        class="form-checkbox text-simplydiary-primary bg-white border border-gray-500 focus:border-simplydiary-secondary focus:outline-none focus:shadow-outline"
        checked>
      <span class="ml-2 font-nunito text-gray-700 tracking-wide">Remember my Diary</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        diaryCode: '',
        remember: '',
        title: ""
      }
    },
    methods: {

      async createNewDiary() {
        var createdDiary = await this.$axios.post("https://api.simply-diary.xyz/v1/diarys/", {
          title: this.title
        });
		console.log(createdDiary)
        if (this.remember) {
          if (process.client) {
            localStorage.setItem("diaryCode", createdDiary.data.code)
          }
        }
        this.$router.push(`/diarys/${createdDiary.data.code}`)

      }
    }
  }

</script>
