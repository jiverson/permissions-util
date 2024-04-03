<script setup lang="ts">
import { UsePermission } from '~/usePermission/component'

const userRole = ref('foo')
</script>

<template>
  <div>
    Hey does this work?

    <UsePermission :role="userRole">
      <div>Worked</div>
    </UsePermission>
  </div>
</template>
