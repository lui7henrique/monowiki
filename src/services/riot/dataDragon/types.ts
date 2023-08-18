import { FullChampion } from './getChampion/types'
import { Champions } from './getChampions/types'

export type DataDragonLanguage =
  | 'cs_CZ'
  | 'el_GR'
  | 'pl_PL'
  | 'ro_RO'
  | 'hu_HU'
  | 'en_GB'
  | 'de_DE'
  | 'es_ES'
  | 'it_IT'
  | 'fr_FR'
  | 'ja_JP'
  | 'ko_KR'
  | 'es_MX'
  | 'es_AR'
  | 'pt_BR'
  | 'en_US'
  | 'en_AU'
  | 'ru_RU'
  | 'tr_TR'
  | 'ms_MY'
  | 'en_PH'
  | 'en_SG'
  | 'th_TH'
  | 'vi_VN'
  | 'id_ID'
  | 'zh_MY'
  | 'zh_CN'
  | 'zh_TW'

export type DataDragonClient = {
  getChampions: (language: DataDragonLanguage) => Promise<Champions>
  getChampion: (
    language: DataDragonLanguage,
    id: string,
  ) => Promise<FullChampion>
}
