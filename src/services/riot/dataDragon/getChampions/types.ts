export type Type = 'champion'

export type Sprite = string

export interface Info {
  attack: number
  defense: number
  magic: number
  difficulty: number
}

export type Tag =
  | 'Fighter'
  | 'Tank'
  | 'Mage'
  | 'Assassin'
  | 'Marksman'
  | 'Support'

export type Version = string

export interface Image {
  full: string
  sprite: Sprite
  group: Type
  x: number
  y: number
  w: number
  h: number
}

export interface Champion {
  version: Version
  id: string
  key: string
  name: string
  title: string
  blurb: string
  info: Info
  image: Image
  tags: Tag[]
  partype: string
  stats: { [key: string]: number }
}

export interface Champions {
  type: Type
  format: string
  version: Version
  data: { [key: string]: Champion }
}
