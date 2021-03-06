
const table = document.querySelectorAll('.MsoNormalTable')[0]
const trs = table.querySelectorAll('tr')
const trArray = Array.from(trs)
const textData = trArray.map((item) => {
  const textBoxes = item.querySelectorAll('.MsoNormal')
  const singleData = {}
  Array.from(textBoxes).forEach((box, i) => {
    const spanArrays = Array.from(box.querySelectorAll('span'))
    singleData[`text${i + 1}`] = spanArrays.reduce((total, text) => `${total}${text.textContent.replace(/®/g, '<sup>®</sup>')}`, '')
    const superLink = box.querySelector('a')
    if (superLink) {
      singleData.link = superLink.href
    }
  })
  return singleData
})
window.console.log(JSON.stringify(textData.filter(item => Object.keys(item).length !== 0)))
