<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-10 lg:grid-cols-2">
      <div class="lg:pr-10">
        <a href="/" aria-label="Go Home" title="Logo" class="inline-block mb-5">
          <div class="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100">
            <svg class="w-10 h-10 text-orange-700" stroke="currentColor" viewBox="0 0 52 52">
              <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
        </a>
        <h5 class="mb-4 text-4xl font-extrabold leading-none">
          What makes  
          <span class="inline-block text-yellow-900">Fosscord</span>different?
        </h5>
        <p class="mb-6 text-gray-700 font-nunito text-xl tracking-wide">
Fosscord is completely free and open source, the client is compatible with Discord, we try to provide the best user experience and make everything as customizable as possible.
       <br>We care a lot about user privacy and want to support end-to-end encryption.<br>We are volunteers providing a better and secure way of communication and are supported by donations.</p>
      </div>
      <div>
        <img class="object-cover w-full h-56 rounded-xl shadow-2xl sm:h-96" src="~/assets/fosscord-loading.png" alt="" />
      </div>
    </div>
  </div>
</template>