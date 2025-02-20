<script lang="ts" setup>
const {t, locale} = useI18n()
</script>

<template>
  <footer class="py-6 lg:py-10 border-t border-gray-200">
    <div class="p-4 flex flex-row flex-wrap justify-center items-center gap-8">
      <!-- Address Section -->
      <div class="flex flex-col items-center gap-y-2">
        <h3 class="text-base lg:text-lg font-semibold text-center">
          {{ t('footer.address.title') }}
        </h3>
        {{ t('footer.address.description') }}
      </div>

      <!-- Phone Section -->
      <div class="flex flex-col items-center gap-y-2">
        <h3 class="text-base lg:text-lg font-semibold text-center">
          {{ t('footer.phone.title') }}
        </h3>
        <a class="text-xs lg:text-sm text-blue-500 underline flex items-center gap-2" href="tel:+66623378553">
          <p>+66623378553</p>
        </a>
      </div>

      <!-- Email Section -->
      <div class="flex flex-col items-center gap-y-2">
        <h3 class="text-base lg:text-lg font-semibold text-center">
          {{ t('footer.email.title') }}
        </h3>
        <a
            class="text-xs lg:text-sm text-blue-500 underline flex items-center gap-2"
            href="mailto:sutitsom@gmail.com"
        >
          <i class="i-heroicons-envelope"></i> sutitsom@gmail.com
        </a>
      </div>

      <!-- LINE Section -->
      <div class="flex flex-col items-center gap-y-2">
        <h3 class="text-base lg:text-lg font-semibold text-center">
          {{ t('footer.line.title') }}
        </h3>
        <a class="text-xs lg:text-sm text-blue-500 underline flex items-center gap-2"
           href="https://line.me/ti/p/jZxhBACV3u"
        >
          LINE
        </a>
      </div>
    </div>
  </footer>
</template>