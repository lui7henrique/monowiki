import { useFormContext } from 'react-hook-form'
import Image from 'next/image'

import { getSplashArtByChampionKey } from 'src/utils/splash-art'

import { NewGuideFormType } from '../../types'
import { parseChampion } from 'src/utils/champion/parseChampion'
import { SelectSkinDialog } from './SelectSkinModal'

export const Banner = () => {
  const { watch } = useFormContext<NewGuideFormType>()
  const currentChampionValue = watch('champion')

  if (!currentChampionValue) {
    return (
      <div className="w-full h-[500px] relative">
        <header className="w-full h-full bg-zinc-950 border border-zinc-900 rounded-default relative overflow-hidden -z-20" />
      </div>
    )
  }

  const currentChampion = parseChampion(currentChampionValue)

  const skinId = watch('bannerSkinId')
  const isMatchSkinChampion = skinId.startsWith(currentChampion.key)

  const banner = getSplashArtByChampionKey(
    currentChampion.key,
    isMatchSkinChampion ? skinId : undefined,
  )

  return (
    <div className="w-full h-[500px] relative">
      <header className="w-full h-full bg-zinc-950 border border-zinc-900 rounded-default relative overflow-hidden -z-20">
        <Image src={banner} alt="Banner" fill className="object-cover" />
      </header>

      <div className="absolute right-4 top-4 z-50">
        <SelectSkinDialog />
      </div>
    </div>
  )
}
