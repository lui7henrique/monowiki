import { dataDragonURL } from 'src/services/riot/dataDragon'
import { Passive } from 'src/services/riot/dataDragon/getChampion/types'
import Image from 'next/image'
import { HoverCard } from '../HoverCard'

type PassiveHoverCardProps = {
  passive: Passive
  partype: string
  championKey: string
  keyboardKey: string
}

export const PassiveHoverCard = ({
  passive,
  championKey,
  keyboardKey,
}: PassiveHoverCardProps) => {
  const { name, description, image } = passive

  const src = `${dataDragonURL}/img/passive/${image.full}`

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

            <div className="flex flex-col gap-2 divide-y divide-zinc-800">
              <div
                dangerouslySetInnerHTML={{ __html: description }}
                className="leading-normal pb-2"
              />
            </div>
          </div>
        </div>
      }
    >
      <div className="w-full h-full aspect-square overflow-hidden rounded-md relative">
        <Image
          src={src}
          alt={passive.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </HoverCard>
  )
}
