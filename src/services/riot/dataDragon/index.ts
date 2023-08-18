import axios from 'axios'
import { DataDragonClient } from './types'
import { getChampions } from './getChampions'
import { getChampion } from './getChampion'

export const dataDragonURL = 'https://ddragon.leagueoflegends.com/cdn/13.16.1'

export const dataDragon = axios.create({
  baseURL: dataDragonURL,
})

export const dataDragonClient: DataDragonClient = {
  getChampions,
  getChampion,
}
