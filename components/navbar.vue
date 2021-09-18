<template>
  <div class="px-2 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-2">
    <div class="relative flex items-center justify-between">
      <NuxtLink to="/" class="inline-flex items-center">
        <h2 class="ml-2 text-3xl font-extrabold tracking-wide text-black">simply-<span class="text-simplydiarynew-primary">diary</span>.xyz</h2>
      </NuxtLink>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <NuxtLink to="/"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-simplydiarynew-primary">
            Home</NuxtLink>
        </li>
        <li>
          <a href="https://github.com/cnrycodes/simply-diary/"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-simplydiarynew-primary">Github</a>
        </li>

        <li>
          <a href="https://github.com/cnrycodes/simply-diary/issues"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-simplydiarynew-primary">
            Feature Request</a>
        </li>
		<!--<li>
          <LanguageInput />
        </li>!-->
      </ul>
      <ul class="flex items-center hidden space-x-8 md:flex">
        <li>
          <NuxtLink to="/open/"
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-blue-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
            Open Diary
          </NuxtLink>
        </li>
      </ul>
      <div class="lg:hidden">
        <button aria-label="Open Menu" title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-simplydiarynew-primary focus:bg-simplydiarynew-secondary"
          @click="isMenuOpen = true">
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
            <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
            <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <NuxtLink to="/" class="inline-flex items-center">
                   <h2 class="ml-2 text-3xl font-extrabold tracking-wide text-black">simply-<span class="text-simplydiarynew-primary">diary</span>.xyz</h2>
      

                </NuxtLink>
              </div>
              <div>
                <button aria-label="Close Menu" title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false">
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <NuxtLink to="/"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-simplydiarynew-primary">
                    Home</NuxtLink>
                </li>
                <li>
                  <a href="https://github.com/cnrycodes/simply-diary/"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-simplydiarynew-primary">Github</a>
                </li>
                <li>
                  <a href="https://github.com/cnrycodes/simply-diary/issues"
                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-simplydiarynew-primary">
                    Feature Request</a>
                </li>
                <li>
                  <NuxtLink to="/open/"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-gray-900 hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                    Open Diary
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
  };

</script>
