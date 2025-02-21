<template>
  <UCard class="max-w-4xl mx-auto my-20 lg:my-24 p-6 sm:p-8">
    <h1 class="text-2xl sm:text-3xl font-bold text-center mb-6">
      {{ $t('contact.form.title') }}
    </h1>

    <UForm :state="state" :validate="validate" class="space-y-4" @error="onError" @submit="onSubmit">
      <UFormGroup :label="$t('contact.form.name.label')" name="name">
        <UInput v-model="state.name" :placeholder="$t('contact.form.name.placeholder')" class="w-full"/>
      </UFormGroup>

      <UFormGroup :label="$t('contact.form.age.label')" name="age">
        <UInput v-model="state.age" :placeholder="$t('contact.form.age.placeholder')" class="w-full" type="number"/>
      </UFormGroup>

      <UButton :disabled="isSubmitting" class="w-full sm:w-auto" type="submit">
        {{ $t('common.submit') }}
      </UButton>
    </UForm>

    <!-- Success Modal -->
    <UModal v-model="isSuccess">
      <UCard class="p-6 sm:p-8 max-w-lg w-full mx-auto text-center rounded-lg shadow-lg animate-fade-in">
        <div class="mb-4 text-lg sm:text-xl font-semibold text-green-600">
          {{ $t('contact.success_message') }}
        </div>
        <UButton class="w-full sm:w-auto" @click="goToContactList">
          {{ $t('contact.go_to_list') }}
        </UButton>
      </UCard>
    </UModal>

    <!-- Error Modal -->
    <UModal v-model="isError">
      <UCard class="p-6 sm:p-8 max-w-lg w-full mx-auto text-center rounded-lg shadow-lg animate-fade-in">
        <div class="mb-4 text-lg sm:text-xl font-semibold text-red-600">
          {{ $t('contact.error_message') }}
        </div>
        <UButton class="w-full sm:w-auto" @click="isError = false">
          {{ $t('common.try_again') }}
        </UButton>
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
const isSubmitting = ref(false);

const state = reactive({
  name: '',
  age: ''
});

const validate = (state: any): FormError[] => {
  const errors: FormError[] = [];

  if (!state.name) {
    errors.push({path: 'name', message: $t('contact.form.validation.name_required')});
  } else if (!/^[A-Za-z\s]+$/.test(state.name)) {
    errors.push({path: 'name', message: $t('contact.form.validation.name_invalid')});
  }

  const ageNum = parseInt(state.age);
  if (!state.age) {
    errors.push({path: 'age', message: $t('contact.form.validation.age_required')});
  } else if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
    errors.push({path: 'age', message: $t('contact.form.validation.age_invalid')});
  }

  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  try {
    isSubmitting.value = true;
    addPerson({id: people.length + 1, name: state.name, age: parseInt(state.age)});

    state.name = '';
    state.age = '';

    isSuccess.value = true;
  } catch (error) {
    isError.value = true;
  } finally {
    isSubmitting.value = false;
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
