<template>
  <div>
    <navbar />
    <div class="mb-3 mt-10">
      <div class="bg-gray-100">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-6">
            <div>
              <p
                class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white uppercase rounded-full bg-simplydiary-primary">
                Error</p>
            </div>
            <h2
              class="max-w-lg mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto"
              v-if="error.statusCode === 404">
              Page not found<br> ʕ •́؈•̀)
            </h2>
            <h2
              class="max-w-lg mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto"
              v-else>
              An error occurred
            </h2>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
body {
	background-color: #F5F4F4 !important;
}

.font-nunito{
	font-family: "Nunito", sans-serif !important;
}
</style>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }

</script>
