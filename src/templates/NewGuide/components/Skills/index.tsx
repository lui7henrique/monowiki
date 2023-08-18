/* eslint-disable react-hooks/rules-of-hooks */
import { useFormContext } from 'react-hook-form'

import { NewGuideFormType } from '../../types'
import { EmptySkills } from './Empty'
import { SelectSkills } from './Select'

export const Skills = () => {
  const { watch } = useFormContext<NewGuideFormType>()
  const currenChampionValue = watch('champion')

  if (!currenChampionValue) {
    return <EmptySkills />
  }

  return <SelectSkills />
}
