interface Plant {
  areaPerPlant: number
  description: string
  name: string
  phases: PlantPhasesArray
  plantsTolerated: PlantsArray
  plantsNotTolerated: PlantsArray
  soilRequirements: SoilRequirementsArray
}

interface PlantPhasesArray {
  [index: number]: PlantPhase
}

interface PlantPhase {
  name: string
  week: number
}

interface SoilRequirementsArray {
  [index: number]: SoilRequirement
}

interface SoilRequirement {
  name: string
  unitName: string
  min: number
  max: number
  optimal: number
}
