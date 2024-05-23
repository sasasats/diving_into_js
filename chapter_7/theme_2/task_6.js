let resp = prompt()
resp = (resp.includes('д') || resp.includes('н')) ? resp.toUpperCase() : resp.toLowerCase()
console.log(resp)