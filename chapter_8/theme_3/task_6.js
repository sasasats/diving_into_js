let capitals = prompt().split(' ')
if (capitals.includes('Андорра-Ла-Велла')) {
    console.log(capitals.filter(capital => capital.endsWith('а')))
} else {
    console.log(capitals.filter(capital => capital.endsWith('н')))
}