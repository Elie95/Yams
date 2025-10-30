import { describe, it, expect } from 'vitest'
import { scoreRoll} from './yams.js'

describe('figures', () => {
  it('chance', () => {
    expect(scoreRoll([1,1,2,3,6])).toBe(13)
    expect(scoreRoll([6,5,5,3,6])).toBe(25)
  })
  it('grande suite', () => {
    expect(scoreRoll([1,2,3,4,5])).toBe(40)
    expect(scoreRoll([2,3,4,5,6])).toBe(40)
  })
  it('yams', () => {
    expect(scoreRoll([6,6,6,6,6])).toBe(50)
    expect(scoreRoll([2,2,2,2,2])).toBe(50)
  })
  it('carré', () => {
    expect(scoreRoll([2,2,2,2,5])).toBe(35)
    expect(scoreRoll([5,3,5,5,5])).toBe(35)
  })
  it('full', () => {
    expect(scoreRoll([3,3,3,4,4])).toBe(30)
    expect(scoreRoll([1,1,2,2,1])).toBe(30)
  })
  it('brelan', () => {
    expect(scoreRoll([5,5,5,2,3])).toBe(28)
    expect(scoreRoll([3,5,3,2,3])).toBe(28)
  })
  it('meilleure figure si multiple', () => {
    expect(scoreRoll([2,2,2,2,3])).toBe(35)
    expect(scoreRoll([3,3,3,3,3])).toBe(50)
    expect(scoreRoll([2,3,4,5,6])).toBe(40)
  })
})
