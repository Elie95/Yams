const sum = a => {
  return a.reduce((x, y) => x + y, 0)
}

const counts = r => {
  const c = [0, 0, 0, 0, 0, 0]
  for (const v of r) {
    c[v - 1]++
  }
  return c
}

const isGrandeSuite = r => {
  const s = [...new Set(r)].sort((a, b) => a - b).join('')
  return s === '12345' || s === '23456'
}

const isYams = r => {
  return r.every(v => v === r[0])
}

const isCarre = c => {
  return c.some(x => x >= 4)
}

const isFull = c => {
  return c.includes(3) && c.includes(2)
}

const isBrelan = c => {
  return c.some(x => x >= 3)
}

export const scoreRoll = r => {
  const c = counts(r)
  const cand = []
  if (isYams(r)) cand.push(50)
  if (isGrandeSuite(r)) cand.push(40)
  if (isCarre(c)) cand.push(35)
  if (isFull(c)) cand.push(30)
  if (isBrelan(c)) cand.push(28)
  cand.push(sum(r))
  return Math.max(...cand)
}

export const scoretot = rolls => {
  let total = 0
  for (const r of rolls) total += scoreRoll(r)
  return total
}

export const scoreuni = rolls => {
  const used = new Set()
  let total = 0
  for (const r of rolls) {
    const c = counts(r)
    let bestFig = 'CH'
    let bestScore = sum(r)
    if (!used.has('Y') && isYams(r) && 50 > bestScore) { bestFig = 'Y'; bestScore = 50 }
    if (!used.has('GS') && isGrandeSuite(r) && 40 > bestScore) { bestFig = 'GS'; bestScore = 40 }
    if (!used.has('C') && isCarre(c) && 35 > bestScore) { bestFig = 'C'; bestScore = 35 }
    if (!used.has('F') && isFull(c) && 30 > bestScore) { bestFig = 'F'; bestScore = 30 }
    if (!used.has('B') && isBrelan(c) && 28 > bestScore) { bestFig = 'B'; bestScore = 28 }
    total += bestScore
    if (bestFig !== 'CH') used.add(bestFig)
  }
  return total
}
