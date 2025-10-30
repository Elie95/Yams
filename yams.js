const sum=a=>a.reduce((x,y)=>x+y,0)
const isGrandeSuite=r=>{
  const s=[...new Set(r)].sort((a,b)=>a-b).join('')
  return s==='12345'||s==='23456'
}
const isYams=r=>r.every(v=>v===r[0])
export const scoreRoll=r=>{
  if(isYams(r))return 50
  if(isGrandeSuite(r))return 40
  return sum(r)
}
