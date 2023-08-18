import { NewGuideProps } from 'src/pages/guide/new'
import { ChampionSelect } from './components/ChampionSelect'

import { FormProvider, useForm } from 'react-hook-form'
import { Banner } from './components/Banner'
import { NewGuideFormType } from './types'
import { Runes } from './components/Runes'
import { Skills } from './components/Skills'
import { Items } from './components/Items'

export const NewGuideTemplate = (props: NewGuideProps) => {
  const { champions } = props

  const methods = useForm<NewGuideFormType>()

  console.log(methods.watch('skills'))

  return (
    <FormProvider {...methods}>
      <form className="max-w-app mx-auto py-8 ">
        <Banner />

        <main className="p-4 max-w-article mx-auto">
          <ChampionSelect champions={champions} />
          <div className="flex flex-col gap-4 mt-4">
            <Runes />
            <Skills />
            <Items />
          </div>
        </main>
      </form>
    </FormProvider>
  )
}
