let resp = prompt().split(', ')
let index1 = Number(prompt())
let index2 = Number(prompt())
let res = resp.slice(index1, index2 + 1).join(', ')
console.log(res)