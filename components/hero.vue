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
            class="max-w-5xl mb-6 font-sans text-5xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">

            <span class="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="e77df901-b9d7-4b9b-822e-16b2d410795b" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)" width="52" height="24"></rect>
              </svg>
              <span class="relative">It's</span>
            </span>
            really just a diary, but online.
          </h2>
          <p class="text-medium text-gray-700 md:text-lg">
            Simply Diary is an open source platform to write online diary, its completely free and works without registration.</p>
        </div>
        <div class="flex items-center sm:justify-center">
          <NuxtLink to="/new/"
            class="inline-flex items-center justify-center h-12 rounded-full py-3 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-simplydiarynew-primary hover:bg-simplydiarynew-secondary focus:shadow-outline focus:outline-none">
            Create a Diary
          </NuxtLink>
          <a href="https://github.com/cnrycodes/simply-diary/" aria-label=""
            class="inline-flex items-center font-semibold text-gray-700 transition-colors duration-200 hover:text-simplydiarynew-primary">Star
            us on Github</a>
        </div>
      </div>
    </div>

  </div>
</template>
