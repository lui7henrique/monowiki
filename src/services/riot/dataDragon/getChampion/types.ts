export type Image = {
  full: string
  sprite: string
  group: string
  x: number
  y: number
  w: number
  h: number
}

export type Info = {
  attack: number
  defense: number
  magic: number
  difficulty: number
}

export type Passive = {
  name: string
  description: string
  image: Image
}

export type Skin = {
  id: string
  num: number
  name: string
  chromas: boolean
}

export type Datavalues = unknown

export type Leveltip = {
  label: string[]
  effect: string[]
}

export type Spell = {
  id: string
  name: string
  description: string
  tooltip: string
  leveltip: Leveltip
  maxrank: number
  cooldown: number[]
  cooldownBurn: string
  cost: number[]
  costBurn: string
  datavalues: Datavalues
  effect: Array<number[] | null>
  effectBurn: Array<null | string>
  vars: any[]
  costType: string
  maxammo: string
  range: number[]
  rangeBurn: string
  image: Image
  resource: string
}

export type FullChampion = {
  id: string
  key: string
  name: string
  title: string
  image: Image
  skins: Skin[]
  lore: string
  blurb: string
  allytips: string[]
  enemytips: string[]
  tags: string[]
  partype: string
  info: Info
  stats: { [key: string]: number }
  spells: Spell[]
  passive: Passive
  recommended: any[]
}

export type Data = {
  [key: string]: FullChampion
}

export type Champion = {
  type: string
  format: string
  version: string
  data: Data
}
