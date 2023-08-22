export const getSplashArtByChampionKey = (key: string, skinId?: string) => {
  if (skinId) {
    return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${key}/${skinId}.jpg`
  }

  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${key}/${key}000.jpg`
}
