const sum=a=>a.reduce((x,y)=>x+y,0)
const isGrandeSuite=r=>{
  const s=[...new Set(r)].sort((a,b)=>a-b).join('')
  return s==='12345'||s==='23456'
}
export const scoreRoll=r=>isGrandeSuite(r)?40:sum(r)
