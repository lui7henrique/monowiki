import { dataDragon } from '..'
import { DataDragonLanguage } from '../types'
import { Champion } from './types'

export const getChampion = async (language: DataDragonLanguage, id: string) => {
  const {
    data: { data },
  } = await dataDragon.get<Champion>(`/data/${language}/champion/${id}.json`)

  const champion = Object.keys(data).map((key) => data[key])[0]

  return champion
}
