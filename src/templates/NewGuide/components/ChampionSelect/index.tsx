import Image from 'next/image'
import { useFormContext, Controller } from 'react-hook-form'

import { Select } from 'src/components/form/Select'
import { NewGuideProps } from 'src/pages/guide/new'
import { NewGuideFormType } from '../../types'
import { parseChampion } from 'src/utils/champion/parseChampion'
import { Badge } from 'src/components/Badge'

type ChampionSelectProps = NewGuideProps

export const ChampionSelect = (props: ChampionSelectProps) => {
  const { champions } = props
  const { control, watch } = useFormContext<NewGuideFormType>()

  const selectedChampion = watch('champion')
    ? parseChampion(watch('champion'))
    : undefined

  const options = Object.keys(champions.data)
    .map((key) => champions.data[key])
    .map((champion) => {
      const { id, name } = champion
      const src = `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/${id}.png`

      return {
        label: (
          <div className="flex gap-2 py-1">
            <div className="w-8 h-8 overflow-hidden relative rounded-default">
              <Image
                src={src}
                alt={id}
                fill
                className="scale-125 object-cover"
              />
            </div>

            <h6 className="text-lg">{name}</h6>
          </div>
        ),
        value: JSON.stringify(champion),
      }
    })

  return (
    <div className="flex gap-2 items-center">
      <Controller
        name="champion"
        control={control}
        render={({ field }) => {
          return (
            <Select.Root onValueChange={field.onChange}>
              <Select.SelectTrigger placeholder="Campeão" />
              <Select.SelectContent
                groups={[
                  {
                    options,
                  },
                ]}
              />
            </Select.Root>
          )
        }}
      />

      {selectedChampion && (
        <div className="flex gap-1">
          {selectedChampion.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </div>
  )
}
