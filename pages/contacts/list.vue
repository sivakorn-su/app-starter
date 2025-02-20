<template>
  <UCard class="max-w-4xl mx-auto my-24 p-6">
    <h1 class="text-2xl font-bold text-center mb-8">Contact List</h1>

    <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700 items-center space-x-2">
      <UInput v-model="searchQuery" class="flex-1" placeholder="Search Name..."/>
      <UButton
          class="hover:bg-red-600 hover:text-white"
          color="gray"
          variant="outline"
          @click="clearSearch"
      >
        Clear
      </UButton>
    </div>

    <UTable :columns="columns" :rows="paginatedRows"
            class="border border-gray-300 rounded-lg overflow-hidden mt-4">
      <template #actions-data="{ row }">
        <UButton color="red" icon="i-heroicons-trash" variant="ghost" @click="deletePerson(row.id)"/>
      </template>
      <template #empty-state>
        <div class="flex flex-col items-center justify-center py-6 gap-3">
          <span class="italic text-sm">No one here!</span>
          <UButton label="Add people" to="./create"/>
        </div>
      </template>
    </UTable>

    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination
          v-model="page"
          :page-count="Math.ceil(filteredPeople.length / itemsPerPage)"
          :total="filteredPeople.length"
      />
    </div>
  </UCard>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {people as initialPeople} from '@/data/people'

const searchQuery = ref('')
const page = ref(1)
const itemsPerPage = 20
const people = ref([...initialPeople])

const columns = [
  {key: 'id', label: 'ID'},
  {key: 'name', label: 'Name'},
  {key: 'age', label: 'Age'},
  {key: 'actions', label: ''}
]

const deletePerson = (id: number) => {
  people.value = people.value.filter(person => person.id !== id)
}

const filteredPeople = computed(() => {
  if (searchQuery.value.length < 3) return people.value
  return people.value.filter(person => person.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const paginatedRows = computed(() => {
  const start = (page.value - 1) * itemsPerPage
  return filteredPeople.value.slice(start, start + itemsPerPage)
})

const clearSearch = () => {
  searchQuery.value = ''
}
</script>

