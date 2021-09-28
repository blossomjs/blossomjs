import mLayoutPro from "@/components/common/m-layout-pro"
import mLayoutPage from "@/components/common/m-layout-page"
import mPanel from "@/components/common/m-panel"
import mPanelGroup from "@/components/common/m-panel-group"
import mTable from "@/components/common/m-table"
import mForm from "@/components/common/m-form"
import mFormItem from "@/components/common/m-form-item"

export default (app) => {
  ;[mLayoutPro, mLayoutPage, mPanelGroup, mPanel, mTable, mForm, mFormItem].forEach((item) => {
    app.component(item.name, item)
  })
}
