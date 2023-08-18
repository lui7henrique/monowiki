type Options = {
  passive?: boolean
}

export const keyOfSpellByIndex = (index: number, options?: Options) => {
  if (options?.passive) {
    const skillByIndex: Record<number, string> = {
      0: 'P',
      1: 'Q',
      2: 'W',
      3: 'E',
      4: 'R',
    }

    const skill = skillByIndex[index]
    return skill
  }

  const skillByIndex: Record<number, string> = {
    0: 'Q',
    1: 'W',
    2: 'E',
    3: 'R',
  }

  const skill = skillByIndex[index]
  return skill
}
