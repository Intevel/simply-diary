<template>

  <div
    class="flex flex-col items-center text-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-gray-50">
    <div class="mb-4 lg:mb-0">
      <h5 class="mb-4 text-xl font-bold leading-none sm:text-2xl">
        {{ created_at }}
      </h5>
      <div class="relative pr-8">
        <p class="text-base text-gray-700 md:text-lg">
         {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['content', 'created_at'],
  }

</script>
