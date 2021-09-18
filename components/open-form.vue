<template>
  <div>
    <form class="flex flex-col items-center w-full mb-3 md:flex-row md:px-16" @submit.prevent="open">
      <input placeholder="Diary Code" required="" type="text" v-model="diaryCode"
        class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-simplydiarynew-secondary focus:outline-none focus:shadow-outline" />
      <button type="submit" :href="`https://simply-diary.xyz/diarys/${this.diaryCode}`"
        class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-simplydiarynew-primary hover:bg-simplydiarynew-secondary focus:shadow-outline focus:outline-none">
        Open
      </button>
    </form>
    <div class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
      <input v-model="remember" type="checkbox"
        class="form-checkbox text-simplydiarynew-primary bg-white border border-gray-500 focus:border-simplydiarynew-secondary focus:outline-none focus:shadow-outline"
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
        remember: ''
      }
    },
    methods: {

      async open() {

        if (this.remember) {
          if (process.client) {
            localStorage.setItem("diaryCode", this.diaryCode)
          }
        }
        this.$router.push(`/diarys/${this.diaryCode}`);
      }
    },
    mounted: async function () {
      if (process.client) {
        this.diaryCode = localStorage.getItem("diaryCode") || "";
      }
    }
  }

</script>
