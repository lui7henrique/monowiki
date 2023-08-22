import { Champion } from 'src/services/riot/dataDragon/getChampions/types'

export const parseChampion = (rawChampion: string): Champion => {
  const champion: Champion = JSON.parse(rawChampion)

  return champion
}
