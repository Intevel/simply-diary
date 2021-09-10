<template>

  <div
    class="flex flex-col items-center py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-gray-50">
    <div class="mb-4 lg:mb-0">
      <h5 class="mb-4 text-xl font-bold leading-none sm:text-2xl">
        {{ created_at }}
      </h5>
      <div class="relative pr-8">
        <p class="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae.
        </p>
      </div>
    </div>
    <div class="flex justify-center w-56 lg:justify-end">
      <a href="/" aria-label=""
        class="inline-flex items-center font-semibold transition-colors duration-200 text-simplydiary-primary hover:text-simplydiary-secondary">
        Learn more
        <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
          <path
            d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z">
          </path>
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['content', 'created_at'],
  }

</script>
