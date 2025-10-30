import { describe,it,expect } from 'vitest'
import { scoreRoll } from './yams.js'

describe('Chance Uniquement',()=>{
  it('retourne la somme quand aucune règle spéciale',()=>{
    expect(scoreRoll([1,1,2,3,6])).toBe(13)
  })
  it('retourne la somme quand aucune règle spéciale',()=>{
    expect(scoreRoll([6,5,5,3,6])).toBe(25)
  })
})
