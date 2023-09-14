<template>
  <div class="card px-12px bg-white">
    <template v-if="!false">
      <div class="cardwrap grid gap-0\.5">
        <div class="sharewrap grid-cols-8">
          <input
            type="text"
            name="contact-card-input"
            class="
              block
              w-full
              rounded
              border-1
              px-3.5
              py-2
              placeholder:text-black-500
            "
          />
        </div>
      </div>
    </template>
  </div>
</template>


<style>

input:focus {
		outline: none;
	}
</style>
