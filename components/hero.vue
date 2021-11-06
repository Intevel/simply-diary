<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="flex flex-col items-center justify-between lg:flex-row">
      <div class="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
        <div class="max-w-xl mb-6">
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-7xl sm:leading-none"
          >
            Your private online Diary
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Simply Diary is an open source platform to write online diary, its completely free and
            works without registration.
          </p>
        </div>
        <div class="flex flex-col items-center md:flex-row">
          <NuxtLink
            to="/new/"
            class="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded-lg shadow-md md:w-auto md:mr-4 md:mb-0 bg-simplydiarynew-primary hover:opacity-80 focus:shadow-outline focus:outline-none"
          >
            <span class="mr-3">Create Diary</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi w-8 bi-journal-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z"
              />
              <path
                d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
              />
              <path
                d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
              />
            </svg>
          </NuxtLink>
          <a
            href="https://github.com/cnrycodes/simply-diary"
            aria-label=""
            class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-simplydiary-primarycolor"
            >Star on Github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="ml-2 bi bi-star font-extrabold"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="relative lg:w-1/2">
        <img
          class="object-cover w-full h-56 rounded sm:h-96"
          src="~/assets/undraw_appreciation_re_p6rl.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default {
  data() {
    return {}
  },
  methods: {},
}
</script>
