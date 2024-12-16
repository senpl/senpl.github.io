function cleanResults(data, locator = 'xzsf02u">') {
    //let locator='xzsf02u">'
    endPos = 0
    let endLocator = '</span'
    let locator2 = locator.replace('"', '\"')
    let data1 = data.substring(data.indexOf(locator2) + locator2.length)
    data1 = data1.substring(0, data1.indexOf(endLocator)).replace('</sp', '').replace('</s', '')
    let data2 = data.substring(data.indexOf(locator) + locator.length)
    let data3 = data2.substring(data2.indexOf(locator) + locator.length)
    let data4 = data3.substring(0, data3.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data5 = data3.substring(data3.indexOf(locator) + locator.length)
    let data6 = data5.substring(0, data3.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data7 = data5.substring(data5.indexOf(locator) + locator.length)
    let data8 = data7.substring(0, data5.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data9 = data7.substring(data7.indexOf(locator) + locator.length)
    let data10 = data9.substring(0, data7.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data11 = data9.substring(data9.indexOf(locator) + locator.length)
    let data12 = data11.substring(0, data9.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data13 = data11.substring(data11.indexOf(locator) + locator.length)
    let data14 = data13.substring(0, data13.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data15 = data13.substring(data13.indexOf(locator) + locator.length)
    let data16 = data15.substring(0, data15.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data17 = data15.substring(data15.indexOf(locator) + locator.length)
    let data18 = data17.substring(0, data17.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data19 = data17.substring(data17.indexOf(locator) + locator.length)
    let data20 = data19.substring(0, data19.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data21 = data19.substring(data19.indexOf(locator) + locator.length)
    let data22 = data21.substring(0, data21.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data23 = data21.substring(data21.indexOf(locator) + locator.length)
    let data24 = data23.substring(0, data23.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data25 = data23.substring(data23.indexOf(locator) + locator.length)
    let data26 = data25.substring(0, data25.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data27 = data25.substring(data25.indexOf(locator) + locator.length)
    let data28 = data27.substring(0, data27.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data29 = data27.substring(data27.indexOf(locator) + locator.length)
    let data30 = data29.substring(0, data29.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    let data31 = data29.substring(data29.indexOf(locator) + locator.length)
    let data32 = data31.substring(0, data31.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')

    let found = [data1, data4, data6, data8, data10, data12, data14, data16, data18, data20, data22, data24, data26, data28, data30, data32
    ]
    found = found.filter((el)=>!el.includes("Znajomi")&&!el.includes("Inni"))
    let knownGoalkeepers=["Andrzej Kruczyński", "Szymon Śleziona", "Kamil Kawa", "Rafał Chrzanowski"]
    for (let index = 0; index < found.length; index++) {
        if(knownGoalkeepers.includes(found[index])){
            found[index] = found[index]+ "(BR)"
        }
    }
    let outPlayers = ""
    for (let el of found) {
        outPlayers = outPlayers + '<br></br>' + el
    }
    document.getElementById('result').innerHTML = outPlayers
    console.log("input" + outPlayers)
}
