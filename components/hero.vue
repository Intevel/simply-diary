<template>
  <div class="mb-3 mt-10">
    <div class="bg-gray-100">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-6">
          <div>
            <p class="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white uppercase rounded-full bg-simplydiary-primary">
              Simply Diary</p>
          </div>
          <h2 class="max-w-lg mb-6 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 sm:text-6xl md:mx-auto">
            
			
           It's really just a diary, but online.
          </h2>
          <p class="text-medium text-gray-700 md:text-lg">
           Simply Diary is an free open-source online diary that allows you to keep a diary that no one else can see but you.</p>
        </div>
        <div class="flex items-center sm:justify-center">
          <NuxtLink
            to="/new/"
            class="inline-flex items-center justify-center h-12 rounded-full py-3 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-simplydiary-primary hover:bg-simplydiary-secondary focus:shadow-outline focus:outline-none"
          >
            Create a Diary
          </NuxtLink>
          <a href="https://github.com/cnrycodes/simply-diary/stargazers" aria-label="" class="inline-flex items-center font-semibold text-gray-700 transition-colors duration-200 hover:text-simplydiary-primary">Star us on Github</a>
        </div>
      </div>
    </div>
    
  </div>
</template>