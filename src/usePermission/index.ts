export interface UsePermissionOptions {}

export function usePermission(role: string, _options: UsePermissionOptions = {}) {
  const hasPermission = ref(false)

  switch (role) {
    case 'admin':
      hasPermission.value = true
      break

    case 'user':
      hasPermission.value = true
      break

    default:
      hasPermission.value = false
      break
  }

  return {
    hasPermission,
  }
}
