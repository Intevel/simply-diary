<template>

  <div
    class="flex flex-col text-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-gray-50">
    <div class="mb-4 lg:mb-0">
      <h5 class="mb-4 text-xl font-bold leading-none sm:text-2xl">
        {{ created_at }}
      </h5>
      <div class="relative pr-8">
        <p class="text-base text-gray-700 md:text-lg mb-2">
          {{ content }}
        </p>
        <a href="/" aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-simplydiarynew-primary hover:text-simplydiarynew-secondary">
          Delete
          <svg class="inline-block w-6 ml-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="64"
            height="64" viewBox="0 0 16 16">
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['content', 'created_at'],
  }

</script>
