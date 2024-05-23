let resp = prompt()
resp = (resp.startsWith('ж') || resp.startsWith('Ж')) ? resp.length : 'Попробуйте снова'
console.log(resp)