<script>
import { indexOf } from 'store/storages/all'
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    if (icon) {
      if (icon.indexOf('el-icon') > -1) {
        vnodes.push(<i class={icon} style='font-size: 18px;margin-right: 16px;' />)
      } else if (icon.indexOf('yc-icon') > -1) {
        vnodes.push(<i class={'yc-icon ' + icon} style='font-weight: normal;font-size: 18px;margin-right: 16px;' />)
      } else {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>
