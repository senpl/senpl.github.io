function ifStartsWithSpanIgnore(data,locator) {
    if (data.startsWith('<span class="')) {
        data = data.substring(data.indexOf(locator) + locator.length)
                // data = data.substring(data.indexOf('/svg>') + 12)
    }
    return data
}

function cleanResults(data, niedzielneGranie, locator = 'xzsf02u">',showInBrowser = true) {
    //let locator='xzsf02u">'
    endPos = 0
    let endLocator = '</span'
    let locator2 = locator//.replace('"', '\"')
    let data1 = data.substring(data.indexOf(locator2) + locator2.length)
    data1 = data1.substring(0, data1.indexOf(endLocator)).replace('</sp', '').replace('</s', '')
    let data2 = data.substring(data.indexOf(locator) + locator.length)
    let data3 = data2.substring(data2.indexOf(locator) + locator.length)
    let data4 = data3.substring(0, data3.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data5 = ifStartsWithSpanIgnore(data3.substring(data3.indexOf(locator) + locator.length), locator)
    let data6 = data5.substring(0, data3.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data7 = ifStartsWithSpanIgnore(data5.substring(data5.indexOf(locator) + locator.length),locator)
    let data8 = (data7.substring(0, data5.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', ''))
    let data9 = ifStartsWithSpanIgnore(data7.substring(data7.indexOf(locator) + locator.length), locator)
    let data10 = (data9.substring(0, data7.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', ''))
    let data11 = ifStartsWithSpanIgnore(data9.substring(data9.indexOf(locator) + locator.length),locator)
    let data12 = data11.substring(0, data9.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data13 = ifStartsWithSpanIgnore(data11.substring(data11.indexOf(locator) + locator.length),locator)
    let data14 = data13.substring(0, data13.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data15 = ifStartsWithSpanIgnore(data13.substring(data13.indexOf(locator) + locator.length), locator)
    let data16 = data15.substring(0, data15.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data17 = ifStartsWithSpanIgnore(data15.substring(data15.indexOf(locator) + locator.length), locator)
    let data18 = data17.substring(0, data17.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data19 = ifStartsWithSpanIgnore(data17.substring(data17.indexOf(locator) + locator.length),locator)
    let data20 = data19.substring(0, data19.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data21 = ifStartsWithSpanIgnore(data19.substring(data19.indexOf(locator) + locator.length), locator)
    let data22 = data21.substring(0, data21.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data23 = ifStartsWithSpanIgnore(data21.substring(data21.indexOf(locator) + locator.length), locator)
    let data24 = data23.substring(0, data23.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data25 = ifStartsWithSpanIgnore(data23.substring(data23.indexOf(locator) + locator.length), locator)
    let data26 = data25.substring(0, data25.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data27 = ifStartsWithSpanIgnore(data25.substring(data25.indexOf(locator) + locator.length), locator)
    let data28 = data27.substring(0, data27.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data29 = ifStartsWithSpanIgnore(data27.substring(data27.indexOf(locator) + locator.length), locator)
    let data30 = data29.substring(0, data29.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let found = [data1, data4, data6, data8, data10, data12, data14, data16, data18, data20, data22, data24, data26, data28]
    if (data30.length > 3) {
        found.push(data30)
    }
    let data31 = data29.substring(data29.indexOf(locator) + locator.length)
    let data32 = data31.substring(0, data31.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    if (data32.length > 3) {
        found.push(data32)
    }

    found = found.filter((el) => !el.includes("Znajomi") && !el.includes("Inni"))
    let knownGoalkeepers = ["Andrzej Kruczyński", "Szymon Śleziona", "Kamil Kawa", "Rafał Chrzanowski"]
    for (let index = 0; index < found.length; index++) {
        if (found[index].includes('<')) {
            found[index] = found[index].substring(0, found[index].length - 1)
        }
        if (knownGoalkeepers.includes(found[index])) {
            found[index] = found[index] + "(BR)"
        }
    }

    let finalAssign = ""
    for (let index = 0; index < found.length; index++) {
        finalAssign = finalAssign + '<br></br>'
        console.log('\n')
        if (index == found.length - 1) {
            finalAssign = finalAssign + found[index];
        } else {
            finalAssign = finalAssign + found[index] + ' / '
        }
        console.log(found[index])
        console.log(' / ')
    }
    document.getElementById('result').innerHTML = finalAssign
}

// let niedzielneGranie = false
// let locator = '--fontSize: 15px; --lineHeight: 19.5762px;">'
// let data = ''
// console.log('res'+cleanResults(data,niedzielneGranie,locator,false))