<script lang="ts">
import { usePermission } from '~/usePermission/index'

export default defineComponent({
  beforeRouteEnter: (_to, _from) => {
    const { hasPermission } = usePermission('foo')

    console.log('permission', hasPermission.value)

    if (!hasPermission.value) {
      return '/demo'
    }
  },
})
</script>

<script setup lang="ts">
console.log('guarded page')
</script>

<template>
  <div>
    Guarded Page
  </div>
</template>
