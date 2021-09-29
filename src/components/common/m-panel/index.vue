<script>
import { h } from "vue"
import { ElButton } from "element-plus"

export default {
  name: "MPanel",
  props: {
    width: String,
    title: String,
    panelProps: {
      type: Object,
      default: () => ({}),
    },
  },
  render() {
    const header = h(
      "header",
      {
        class: "m-panel__header",
      },
      [
        h(
          "div",
          {
            class: "m-panel__header-title",
          },
          [this.title]
        ),
        h(
          "div",
          {},
          (this.panelProps?.toolbar || []).map((createButton) => {
            const button = createButton()
            return h(
              ElButton,
              {
                size: "mini",
                ...button.on,
                ...button.props,
              },
              { default: () => button.text }
            )
          })
        ),
      ]
    )
    const main = h(
      "main",
      {
        class: "m-panel__content",
      },
      { default: () => this.$slots.default() }
    )
    const panelChildren = this.title ? [header, main] : [main]
    return h(
      "div",
      {
        class: "m-panel",
        style: this.style,
      },
      panelChildren
    )
  },
  computed: {
    style() {
      const style = {}
      if (this.width) style.width = this.width
      return style
    },
  },
}
</script>

<style lang="scss">
.m-panel {
  margin: 10px;
  border-radius: 2px;
  background: #fff;
  header {
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    padding: 0 10px;
    .m-panel__header-title {
      margin: 0;
      color: #262626;
      font-weight: bold;
      font-size: 14px;
    }
  }
  .m-panel__content {
    padding: 10px;
  }
}
</style>
