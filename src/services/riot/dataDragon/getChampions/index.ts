import { dataDragon } from '..'
import { DataDragonLanguage } from '../types'
import { Champions } from './types'

export const getChampions = async (language: DataDragonLanguage) => {
  const { data } = await dataDragon.get<Champions>(
    `/data/${language}/champion.json`,
  )

  return data
}
