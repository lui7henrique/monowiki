import { Pencil1Icon } from '@radix-ui/react-icons'
import { IconButton } from 'src/components/IconButton'
import Tooltip from 'src/components/Tooltip'

import { Dialog } from 'src/components/Dialog'
import { useFormContext } from 'react-hook-form'
import { NewGuideFormType } from '../../types'
import { parseChampion } from 'src/utils/champion/parseChampion'
import { useQuery } from 'react-query'
import { dataDragonClient } from 'src/services/riot/dataDragon'
import { getSplashArtByChampionKey } from 'src/utils/splash-art'
import Image from 'next/image'
import { useState } from 'react'

export const SelectSkinDialog = () => {
  const { watch, setValue } = useFormContext<NewGuideFormType>()
  const { id, key } = parseChampion(watch('champion'))
  const [open, setOpen] = useState(false)

  const { data } = useQuery(
    [id],
    async () => await dataDragonClient.getChampion('pt_BR', id),
  )

  const handleSelectSkin = (id: string) => {
    setValue('bannerSkinId', id)
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
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
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content size="xl">
          <Dialog.Title>Selecionar skin</Dialog.Title>

          <Dialog.Description>
            Escolha a skin de sua preferência! 😉
          </Dialog.Description>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {data?.skins.map((skin) => {
              const thumbnail = getSplashArtByChampionKey(key, skin.id)

              return (
                <div
                  className="flex flex-col items-center gap-1 cursor-pointer group"
                  key={skin.id}
                  onClick={() => handleSelectSkin(skin.id)}
                >
                  <div className="border border-zinc-800 w-full group-hover:border-zinc-500 transition-all">
                    <figure className="relative aspect-square w-full overflow-hidden border-2 border-zinc-950">
                      <Image
                        src={thumbnail}
                        fill
                        alt={skin.name}
                        style={{ objectFit: 'cover' }}
                      />
                    </figure>
                  </div>

                  <h6 className="text-md font-medium text-zinc-300 mt-1">
                    {skin.name}
                  </h6>
                </div>
              )
            })}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
