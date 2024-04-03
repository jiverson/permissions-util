import { usePermission } from './index'

export const UsePermission = defineComponent({
  name: 'UsePermission',
  props: {
    role: {
      type: String,
      required: true,
    },
  },
  setup(props, { slots }) {
    const { hasPermission } = usePermission(props.role)

    console.log(hasPermission.value)

    return () => {
      if (slots.default && hasPermission.value) {
        return slots.default()
      }
    }
  },
})
