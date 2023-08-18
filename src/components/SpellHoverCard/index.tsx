import { dataDragonURL } from 'src/services/riot/dataDragon'
import { Spell } from 'src/services/riot/dataDragon/getChampion/types'
import Image from 'next/image'
import {
  BlendingModeIcon,
  ClockIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons'
import { HoverCard } from '../HoverCard'

type SpellHoverCardProps = {
  spell: Spell
  partype: string
  championKey: string
  keyboardKey: string
}

export const SpellHoverCard = ({
  spell,
  partype,
  championKey,
  keyboardKey,
}: SpellHoverCardProps) => {
  const {
    name,
    description,
    rangeBurn,
    cooldownBurn,
    costBurn,
    image,
    leveltip,
  } = spell

  const src = `${dataDragonURL}/img/spell/${image.full}`

  const formattedKey = championKey.padStart(4, '0')

  const video = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${formattedKey}/ability_${formattedKey}_${keyboardKey}1.mp4`

  return (
    <HoverCard
      content={
        <div className="flex flex-col">
          <video
            src={video}
            className="aspect-video w-full object-fill"
            autoPlay
          />

          <div className="flex flex-col gap-2 p-2">
            <h4 className="font-bold">{name}</h4>

            <div className="flex gap-2 flex-wrap">
              {leveltip.label.map((label) => {
                return (
                  <div
                    className="bg-indigo-600 text-zinc-100 py-1 px-2 rounded-sm whitespace-nowrap"
                    key={label}
                  >
                    {label.replace('@AbilityResourceName@', partype)}
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-2 divide-y divide-zinc-800">
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="leading-normal pb-2"
              />

              <div className="py-2 flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <ClockIcon width={20} height={20} />
                  Tempo de recarga: {cooldownBurn}
                </div>

                <div className="flex gap-1 items-center">
                  <BlendingModeIcon width={20} height={20} />
                  Custo: {costBurn}
                </div>

                <div className="flex gap-1 items-center">
                  <PlusCircledIcon width={20} height={20} />
                  Range: {rangeBurn}
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '6px',
        }}
      >
        <Image src={src} alt={spell.name} fill style={{ objectFit: 'cover' }} />
      </div>
    </HoverCard>
  )
}
