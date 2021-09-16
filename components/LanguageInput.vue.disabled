<template>
  <div>
    <!--<label class="block mt-4">
      <dropdown class="form-select mt-1 block w-full">
        <ul>
          <li>
            <nuxt-link :to="switchLocalePath('de')">German</nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
          </li>
        </ul>
      </dropdown>
    </label>!-->
    <div class="dropdown inline-block relative">
      <button class="text-gray-700 font-semibold py-2 rounded inline-flex items-center">
        <span class="mr-1">Languages</span>
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
      </button>
      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
        <li class="">
          <nuxt-link class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            :to="switchLocalePath('de')">German</nuxt-link>
        </li>
        <li class="">
          <nuxt-link class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            :to="switchLocalePath('en')">English</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
  .dropdown:hover .dropdown-menu {
    display: block;
  }

</style>
