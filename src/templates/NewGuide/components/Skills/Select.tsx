import { useFieldArray, useFormContext } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useCallback, useEffect } from 'react'

import { dataDragonClient } from 'src/services/riot/dataDragon'

import { Skeleton } from './Skeleton'

import { SpellButton } from 'src/components/SpellButton'
import { SpellHoverCard } from 'src/components/SpellHoverCard'
import { keyOfSpellByIndex } from 'src/utils/spell/keyOfSpellByIndex'
import { PassiveHoverCard } from 'src/components/PassiveHoverCard'
import { Spell } from 'src/services/riot/dataDragon/getChampion/types'

import { NewGuideFormType } from '../../types'
import { parseChampion } from 'src/utils/champion/parseChampion'
import { HeaderSkills } from './Header'

export const SelectSkills = () => {
  const { watch, control } = useFormContext<NewGuideFormType>()

  const { append, update, fields } = useFieldArray({
    control,
    name: 'skills',
  })

  const currentChampion = parseChampion(watch('champion'))
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

  const verifyIfSpellIsChecked = useCallback(
    (level: number, spell: Spell) => {
      const isChecked = fields[level]?.spellId === spell.id
      return isChecked
    },
    [fields],
  )

  const handleCheckSpell = useCallback(
    (level: number, spell: Spell) => {
      const isChecked = verifyIfSpellIsChecked(level, spell)

      if (isChecked) {
        return update(level, { level, spellId: undefined })
      }

      const canUpdate =
        fields.filter((field) => field.spellId === spell.id).length <
        spell.maxrank

      if (canUpdate) {
        update(level, { level, spellId: spell.id })
      }
    },
    [fields, update, verifyIfSpellIsChecked],
  )

  if (isLoading || !data) {
    return <Skeleton />
  }

  return (
    <section>
      <HeaderSkills />

      <div className="mt-4 flex flex-col gap-1">
        <div className="grid grid-cols-19 gap-1 w-full">
          <PassiveHoverCard
            passive={data.passive}
            partype={partype}
            championKey={key}
            keyboardKey="P"
          />

          <div className="col-[_span_18] w-full border border-zinc-800 rounded-default bg-zinc-900 flex items-center justify-center uppercase font-bold text-zinc-600 text-sm select-none">
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

                const checked = verifyIfSpellIsChecked(level, spell)

                return (
                  <SpellButton
                    checked={checked}
                    key={level}
                    onClick={() => handleCheckSpell(level, spell)}
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
