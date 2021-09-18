<template>
  <div class="mb-3 mt-10">
    <div class="bg-gray-100">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-6">
          <div>
            <p
              class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white uppercase rounded-full bg-simplydiarynew-primary">
              Simply Diary</p>
          </div>
          <h2
            class="max-w-lg mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
            Please enter your diary code to open the diary.
          </h2>
          <NuxtLink
            to="/new/">
            <p class="text-bold text-simplydiarynew-secondary md:text-lg">
              Do you want to create a new diary?</p>
          </NuxtLink>
        </div>
        <open-form />
      </div>
    </div>

  </div>
</template>