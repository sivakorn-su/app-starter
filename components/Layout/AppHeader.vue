<template>
  <nav class="fixed top-0 left-0 right-0 shadow-md z-50">
    <div class="max-w-4xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/">
            <img alt="Logo" class="h-10" src="../../public/Nuxt.svg">
          </NuxtLink>
        </div>

        <!-- Profile & Language Toggle -->
        <div class="hidden sm:flex items-center space-x-4">
          <ProfileImage :fullName="fullName" :initialImage="profilePic"/>
          <div class="flex items-center gap-2 ml-4 font-semibold">
            <div
                :class="locale === 'th' ? 'text-blue-600' : 'text-blue-600/25'"
                class="cursor-pointer"
                @click="setLocale('th')"
            >
              TH
            </div>
            <span>|</span>
            <div
                :class="locale === 'en' ? 'text-blue-600' : 'text-blue-600/25'"
                class="cursor-pointer"
                @click="setLocale('en')"
            >
              EN
            </div>
          </div>
        </div>
        <UButton class="block lg:hidden" color="gray" icon="i-heroicons-bars-3-20-solid" variant="ghost"
                 @click="isSidebarOpen = true"/>
      </div>
    </div>
  </nav>

  <USlideover v-model="isSidebarOpen">
    <UCard
        :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }"
        class="flex flex-col flex-1"
    >
      <template #header>
        <div class="flex items-center justify-between p-4">
          <ProfileImage :initialImage="profilePic"/>
          <UButton class="-my-1" color="gray" icon="i-heroicons-x-mark-20-solid" variant="ghost"
                   @click="isSidebarOpen = false"/>
        </div>
      </template>
      <ul class="p-4 space-y-4">
        <li>
          <NuxtLink class="block p-2 hover:bg-gray-200 rounded" to="/" @click="isSidebarOpen = false">
            {{ t('header.home') }}
          </NuxtLink>
        </li>
        <li>
          <button class="w-full text-left p-2 hover:bg-gray-200 rounded" @click="toggleContactMenu">
            {{ t('header.contact.title') }}
          </button>
          <ul v-if="isContactMenuOpen" class="pl-4 space-y-2">
            <li>
              <NuxtLink class="block p-2 hover:bg-gray-200 rounded" to="/contacts/list"
                        @click="isSidebarOpen = false">
                {{ t('header.contact.list') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="block p-2 hover:bg-gray-200 rounded" to="/contacts/create"
                        @click="isSidebarOpen = false">
                {{ t('header.contact.create') }}
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <button class="block w-full text-left p-2 hover:bg-gray-200 rounded" @click="openMap">
            {{ t('header.current_location') }}
          </button>
        </li>
      </ul>
    </UCard>
  </USlideover>
</template>

<script setup>
import {ref} from 'vue';
import {user} from '@/data/userData.js';

const isSidebarOpen = ref(false);
const isContactMenuOpen = ref(false);
const fullName = ref(user.fullName);
const profilePic = ref(user.profilePic);
const {locale, setLocale, t} = useI18n();
const localePath = useLocalePath();

const toggleContactMenu = () => isContactMenuOpen.value = !isContactMenuOpen.value;
const openMap = () => window.open('https://www.google.com/maps', '_blank');
</script>

<style scoped>
/* Optional: Add any additional styles here */
</style>
