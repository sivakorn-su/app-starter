<template>
  <UCard class="max-w-4xl mx-auto my-20 lg:my-24 p-6 sm:p-8">
    <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6">Create Contact</h1>

    <UForm :state="state" :validate="validate" class="space-y-4" @error="onError" @submit="onSubmit">
      <UFormGroup label="Full Name" name="name">
        <UInput v-model="state.name" class="w-full" placeholder="Enter Full Name"/>
      </UFormGroup>

      <UFormGroup label="Age" name="age">
        <UInput v-model="state.age" class="w-full" placeholder="Enter Age" type="number"/>
      </UFormGroup>

      <UButton class="w-full sm:w-auto" type="submit">Submit</UButton>
    </UForm>

    <!-- Success Modal -->
    <UModal v-model="isSuccess">
      <UCard class="p-6 sm:p-8 max-w-lg w-full mx-auto text-center rounded-lg shadow-lg animate-fade-in">
        <div class="mb-4 text-lg sm:text-xl font-semibold text-green-600">Contact Added Successfully!</div>
        <UButton class="w-full sm:w-auto" @click="goToContactList">Go to Contact List</UButton>
      </UCard>
    </UModal>

    <!-- Error Modal -->
    <UModal v-model="isError">
      <UCard class="p-6 sm:p-8 max-w-lg w-full mx-auto text-center rounded-lg shadow-lg animate-fade-in">
        <div class="mb-4 text-lg sm:text-xl font-semibold text-red-600">Submission Failed!</div>
        <UButton class="w-full sm:w-auto" @click="isError = false">Try Again</UButton>
      </UCard>
    </UModal>
  </UCard>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import {useRouter} from 'vue-router';
import type {FormError, FormErrorEvent, FormSubmitEvent} from '#ui/types';
import {addPerson, people} from '@/data/people';

const router = useRouter();
const isSuccess = ref(false);
const isError = ref(false);
const state = reactive({
  name: '',
  age: ''
});

const validate = (state: any): FormError[] => {
  const errors: FormError[] = [];

  if (!state.name) {
    errors.push({path: 'name', message: 'Full Name is required'});
  } else if (!/^[A-Za-z\s]+$/.test(state.name)) {
    errors.push({path: 'name', message: 'Only letters and spaces allowed'});
  }
  const ageNum = parseInt(state.age);
  if (!state.age) {
    errors.push({path: 'age', message: 'Age is required'});
  } else if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
    errors.push({path: 'age', message: 'Enter a valid age (1-120)'});
  }

  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    addPerson({id: people.length + 1, name: state.name, age: parseInt(state.age)});

    state.name = '';
    state.age = '';

    isSuccess.value = true;
  } catch (error) {
    isError.value = true;
  }
}

const goToContactList = () => {
  isSuccess.value = false;
  router.push('/contacts/list');
};

async function onError(event: FormErrorEvent) {
  const element = document.querySelector(`[name="${event.errors[0].path}"]`);
  element?.focus();
  element?.scrollIntoView({behavior: 'smooth', block: 'center'});
}
</script>
