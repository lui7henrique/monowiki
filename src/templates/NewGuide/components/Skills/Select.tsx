import { useFieldArray, useFormContext } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useEffect } from 'react'

import { Champion } from 'src/services/riot/dataDragon/getChampions/types'
import { dataDragonClient } from 'src/services/riot/dataDragon'

import { Skeleton } from './Skeleton'
import { SpellButton } from 'src/components/SpellButton'
import { SpellHoverCard } from 'src/components/SpellHoverCard'

import { NewGuideFormType } from '../../types'
import { keyOfSpellByIndex } from 'src/utils/spell/keyOfSpellByIndex'
import { PassiveHoverCard } from 'src/components/PassiveHoverCard'

export const SelectSkills = () => {
  const { watch, control } = useFormContext<NewGuideFormType>()

  const { append, update, fields } = useFieldArray({
    control,
    name: 'skills',
  })

  const currentChampionValue = watch('champion')
  const currentChampion: Champion = JSON.parse(currentChampionValue)
  const { id, partype, key } = currentChampion

  const { data, isLoading } = useQuery(
    [currentChampion.id],
    async () => await dataDragonClient.getChampion('pt_BR', id),
  )

  useEffect(() => {
    Array.from({ length: 18 }).forEach((_, index) =>
      append({
        level: index + 1,
        spellId: undefined,
      }),
    )
  }, [append])

  if (isLoading || !data) {
    return (
      <section className="">
        <h3>Habilidades</h3>
        <Skeleton />
      </section>
    )
  }

  return (
    <section>
      <h4 className="text-lg font-bold">Habilidades</h4>

      <div className="mt-4 flex flex-col gap-1">
        <div className="grid grid-cols-19 gap-1 w-full">
          <PassiveHoverCard
            passive={data.passive}
            partype={partype}
            championKey={key}
            keyboardKey="P"
          />

          <div className="col-[_span_18] w-full border border-zinc-800 rounded-md bg-zinc-900 flex items-center justify-center uppercase font-bold text-zinc-600 text-sm select-none">
            Passiva
          </div>
        </div>

        {data.spells.map((spell, index) => {
          return (
            <div className="grid grid-cols-19 gap-1" key={spell.id}>
              {Array.from({ length: 19 }).map((_, level) => {
                if (level === 0) {
                  return (
                    <SpellHoverCard
                      spell={spell}
                      key={spell.id}
                      partype={partype}
                      championKey={key}
                      keyboardKey={keyOfSpellByIndex(index)}
                    />
                  )
                }

                const checked = fields[level]?.spellId === spell.id

                return (
                  <SpellButton
                    checked={checked}
                    key={level}
                    onClick={() => {
                      if (checked) {
                        return update(level, { level, spellId: undefined })
                      }

                      const canUpdate =
                        fields.filter((field) => field.spellId === spell.id)
                          .length < spell.maxrank

                      if (canUpdate) {
                        update(level, { level, spellId: spell.id })
                      }
                    }}
                  >
                    {checked && level}
                  </SpellButton>
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}
