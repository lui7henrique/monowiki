import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { dataDragonClient } from 'src/services/riot/dataDragon'
import { Champions } from 'src/services/riot/dataDragon/getChampions/types'
import { NewGuideTemplate } from 'src/templates/NewGuide'

export const getStaticProps: GetStaticProps<{
  champions: Champions
}> = async () => {
  const champions = await dataDragonClient.getChampions('pt_BR')

  return { props: { champions } }
}

export type NewGuideProps = InferGetStaticPropsType<typeof getStaticProps>

export default function NewGuide(props: NewGuideProps) {
  return <NewGuideTemplate {...props} />
}
