interface Field {
  plants: PlantsArray
  width: number
  height: number
  x: number
  y: number
  fertilities: FieldFertilitiesArray
  worksHistory: Array<FieldHistoryWork>
  plantsHistory: Array<FieldHistoryPlant>
}

interface FieldFertilitiesArray {
  [index: number]: FieldFertility
}

interface FieldFertility {
  createdAt: Date
  fertility: Fertility
  amount: number
}

interface Fertility {
  name: string
  description: string
  unitName: string
}

interface FieldHistoryPlant {
  plant: Plant
  phases: Array<PlantPhase>
  diseases: Array<PlantDisease>
  harvests: Array<PlantHarvest>
}

interface FieldHistoryWork {
  name: string
  createdAt: Date
  amount: number
  unitName: string
}
