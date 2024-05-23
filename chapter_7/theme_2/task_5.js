let resp = prompt()
resp = (resp.length < 5) ? resp += '!' : resp += '?'
console.log(resp)