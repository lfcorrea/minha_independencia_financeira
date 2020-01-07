<template>
  <q-page class="flex flex-center">
    <PeopleList />
  </q-page>
</template>

<script>
import PeopleList from '../../components/configs/people/PeopleList'

export default {
  name: 'People',
  components: {
    PeopleList
  }
}
</script>
