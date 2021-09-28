<template>
  <div class="m-form-item">
    <el-form-item :label="label" :prop="prop" ref="elFormItem">
      <template v-slot:label v-if="$slots.label"></template>
      <div v-show="readonly">
        {{ displayValue }}
      </div>
      <div v-show="!readonly">
        <slot></slot>
      </div>
    </el-form-item>
  </div>
</template>

<script>
import { getPropByPath } from "element-plus/lib/utils/util"

export default {
  name: "MFormItem",
  props: {
    label: String,
    prop: String,
    isReadonly: Boolean,
    emptyText: {
      type: String,
      default: "-",
    },
  },
  inject: ["mForm"],
  computed: {
    fieldValue() {
      const model = this.mForm.props.model
      if (!model || !this.prop) {
        return
      }
      return getPropByPath(model, this.prop, true).v
    },
    readonly() {
      return (this.mForm.readonly && this.prop) || this.isReadonly
    },
  },
  watch: {
    fieldValue() {
      this.$nextTick(this.updateDisplayValue)
    },
  },
  data() {
    return {
      displayValue: this.emptyText,
    }
  },
  mounted() {
    this.updateDisplayValue()
  },
  methods: {
    updateDisplayValue() {
      this.displayValue = this.fieldValue || this.emptyText
    },
  },
}
</script>

<style lang="scss"></style>
