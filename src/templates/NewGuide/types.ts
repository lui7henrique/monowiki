export type NewGuideFormType = {
  champion: string
  skills: Array<{
    level: number
    spellId: string | undefined
  }>
}
