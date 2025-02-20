<template>
  <div class="flex flex-row justify-between items-center space-x-5 h-full">
    <img
        :src="imageUrl"
        class="w-10 h-10 rounded-full border border-gray-300 shadow-md cursor-pointer"
        @click="openModal"
    />
    <span class="flex font-semibold text-center justify-center">{{ fullName }}</span>
    <UModal v-model="isModalOpen">
      <UCard class="p-6 text-center">
        <h2 class="text-xl font-semibold mb-4">Upload Profile Picture</h2>
        <input
            accept="image/*"
            class="mb-4"
            type="file"
            @change="handleFileUpload"
        />
        <div class="flex justify-end">
          <UButton color="gray" @click="closeModal">Cancel</UButton>
          <UButton color="blue" @click="closeModal">Upload</UButton>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps({
  initialImage: String,
  fullName: String,
});

const imageUrl = ref(props.initialImage);
const isModalOpen = ref(false);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
  }
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style scoped>
/* Optional: Add any additional styles here */
</style>
