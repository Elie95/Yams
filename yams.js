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
