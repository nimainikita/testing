import React from "react"
import { useSelector } from "react-redux"

type LayoutItem = {
  children: string[]
  parents: string[]
  type: ComponentType
  id: string
  meta: {
    chartId: number
    defaultText?: string
    height: number
    placeholder?: string
    sliceName: string
    sliceNameOverride?: string
    text?: string
    uuid: string
    width: number
  }
}

type DashboardLayoutState = { present: DashboardLayout }

type DashboardLayout = { [key: string]: LayoutItem }

export type RootState = {
  datasources: DatasourcesState
  sliceEntities: JsonObject
  charts: ChartsState
  dashboardLayout: DashboardLayoutState
  dashboardFilters: {}
  dashboardState: DashboardState
  dashboardInfo: DashboardInfo
  dataMask: DataMaskStateWithId
  impressionId: string
  nativeFilters: NativeFiltersState
  user: UserWithPermissionsAndRoles
}

type SliceInfoProps = {
  sliceId: number
}

const SliceInfo: React.FC<SliceInfoProps> = ({ sliceId }) => {
  const customChartName = useSelector((state: RootState) => {
    const layoutItems = state.dashboardLayout.present

    for (const key in layoutItems) {
      const item = layoutItems[key] as LayoutItem

      if (item.meta.chartId === sliceId) {
        return item.meta.sliceNameOverride || item.meta.sliceName
      }
    }

    return "Unknown Chart" // если не найден
  })

  return (
    <div>
      <h1>{customChartName}</h1>
    </div>
  )
}
