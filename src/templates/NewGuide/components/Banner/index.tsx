import { useFormContext } from 'react-hook-form'
import Image from 'next/image'
import { Pencil1Icon } from '@radix-ui/react-icons'

import Tooltip from 'src/components/Tooltip'
import { IconButton } from 'src/components/IconButton'
import { getSplashArtByChampionKey } from 'src/utils/splash-art'

import { NewGuideFormType } from '../../types'
import { parseChampion } from 'src/utils/champion/parseChampion'

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
  const banner = getSplashArtByChampionKey(currentChampion.key)

  return (
    <div className="w-full h-[500px] relative">
      <header className="w-full h-full bg-zinc-950 border border-zinc-900 rounded-default relative overflow-hidden -z-20">
        <Image src={banner} alt="Banner" fill className="object-cover" />
      </header>

      <div className="absolute right-4 top-4 z-50">
        <Tooltip content="Alterar skin">
          <div>
            <IconButton
              onClick={() => console.log('alterar skin')}
              type="button"
            >
              <Pencil1Icon />
            </IconButton>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}
