export type NewGuideFormType = {
  champion: string
  bannerSkinId: string
  skills: Array<{
    level: number
    spellId: string | undefined
  }>
}
