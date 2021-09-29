<template>
  <div class="m-form">
    <el-form
      :label-width="props.labelWidth"
      :model="props.model"
      :rules="rules"
      :size="props.size"
      style="max-width: 400px"
      ref="elForm"
    >
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      default: {
        isReadonly: false,
        labelWidth: "auto",
        model: {},
        rules: {},
        size: "mini",
      },
    }
  },
  name: "MForm",
  provide() {
    return {
      mForm: this,
      elForm: null,
    }
  },
  props: {
    isReadonly: Boolean,
    formProps: Object,
  },
  computed: {
    readonly() {
      return !!this.isReadonly || !!this.formProps.isReadonly
    },
    rules() {
      const defaultSlots = this.$slots.default()
      const ruleNameMap = Object.keys(this.props.rules)
      const rule = {}
      ruleNameMap.forEach((ruleName) => {
        const node = defaultSlots.find((node) => node.props?.prop === ruleName)
        const isReadonly = this.readonly || node.props?.isReadonly !== undefined
        if (isReadonly) {
          rule[ruleName] = this.props.rules[ruleName].filter((rule) => !rule.required)
        } else {
          rule[ruleName] = this.props.rules[ruleName]
        }
      })
      return rule
    },
    props() {
      return Object.assign(this.$data.default, this.formProps)
    },
  },
  watch: {
    readonly(readonly) {
      if (readonly) {
        this.elForm.clearValidate()
      }
    },
  },
  mounted() {
    this.elForm = this.$refs.elForm
  },
}
</script>

<style lang="scss"></style>
