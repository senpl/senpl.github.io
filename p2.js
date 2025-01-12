function cleanResults(data, niedzielneGranie, locator = 'xzsf02u">') {
    //let locator='xzsf02u">'
    endPos = 0
    let endLocator = '</span'
    let locator2 = locator//.replace('"', '\"')
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
    let found = [data1, data4, data6, data8, data10, data12, data14, data16, data18, data20, data22, data24, data26, data28]
    if(data30.length>3){
        found.push(data30)
    }
    let data31 = data29.substring(data29.indexOf(locator) + locator.length)
    let data32 = data31.substring(0, data31.indexOf(endLocator) + endPos).replace('</sp', '').replace('</s', '')
    if(data32.length>3){
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
       //replace shorcut with full names
       found=found.map((element=>element.replace("Dawid Willan", "Dawid Will")))
       function replaceStringsStartingWith(array, prefix, newValue) {
        return array.map(item => 
            item.startsWith(prefix) ? newValue : item
          );
      }
      if(found.filter(element=>element.startsWith("Bogumił Grz"))){
        found=replaceStringsStartingWith(found,"Bogumił Grz","Bogumił Gr")
      }
      if(found.filter(element=>element.startsWith("Paweł Mac"))){
        found=replaceStringsStartingWith(found,"Paweł Mac","Paweł Maciejewski")
      }
      if(found.filter(element=>element.startsWith("Bartek Pry"))){
        found=replaceStringsStartingWith(found,"Bartek Pry","Bartek Pryszcz")
      }
      if(found.filter(element=>element.startsWith("Bartek Zda"))){
        found=replaceStringsStartingWith(found,"Bartek Zda","Bartek Zdanowski")
      }
      if(found.filter(element=>element.startsWith("Kwa Kwa"))){
        found=replaceStringsStartingWith(found,"Kwa Kwa","Ryba")
      }
       console.log(found)
       let stableRanking = {
           "Bartek Pryszcz": 4.0,
           "Dawid Will": 8.0,
           "Daniel Toporczyk": 7.5,
           "Bogumił Gr": 7.0,
           "Illia Leo Ti Lish": 1.2,
           "Paweł Maciejewski": 8.6,
           "Roma Samkovskiy": 4.3,
           "Yura Savchuk": 6.7,
           "Marek Ziober": 4.8,
           "Kamil Kawa(BR)": 6.0,
           "Michał Siewniak": 5.8,
           "Rafał Chrzanowski(BR)": 3.5,
           "Adam Wisniewski": 7.6,
           "Ryba": 7.8, //Ryba alias Krzysiek K.
           "Andrzej Kruczyński(BR)": 3.7,
           "Aleksander Osmałek": 4.2,
           "Andrzej Doruchowski": 6.5,
           "Adam Syrek": 7.7,
           "Oliwier Sulima": 3.9,
           "Michal Ce": 4.5,
           "Tobiasz Fuczek": 7.9,
           "Adam Piątek": 6.9,
           "Mateusz Szyba": 8.7,
           "Bartek Zdanowski": 8.4,
           "Szymon Śleziona(BR)": 5.3,
           "Marcin Szkup": 3.1,
           "Daniel Tochwin": 8.2,
           "Michał Urbanek": 4.1,
           "Mateusz Ziober": 0.9,
           "Marcin Ziober": 3.0,
           "Maciek ERa": 3.2
       }
    if (niedzielneGranie) {
        //stableRanking["Adam Piątek"] = stableRanking["Adam Piątek"] - 0.5
        stableRanking["Paweł Maciejewski"] = stableRanking["Paweł Maciejewski"] - 1.4
    }
    let playersWithRating = new Map()
    found.forEach(element => {
        playersWithRating.set(element, stableRanking[element])
    });
    playersWithRating.forEach((value, key) => {
        if (value === undefined) {
            playersWithRating.set(key, 4.9);
        }
    });
    const sortedByRating = new Map(
        [...playersWithRating].sort((a, b) => b[1] - a[1]) // Compare values
    );
    console.log(sortedByRating);
    const keysIterator = sortedByRating.keys();
    let team1 = [keysIterator.next().value]
    let team2 = [keysIterator.next().value, keysIterator.next().value]
    let playerToAdd = keysIterator.next().value;
    let playerToAdd2 = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd, team1, team2);
    addIfGkToOtherTeam(playerToAdd2, team1, team2);
    playerToAdd = keysIterator.next().value;
    playerToAdd2 = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd, team2, team1);
    addIfGkToOtherTeam(playerToAdd2, team2, team1);
    playerToAdd = keysIterator.next().value;
    playerToAdd2 = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd, team1, team2);
    addIfGkToOtherTeam(playerToAdd2, team1, team2);
    playerToAdd = keysIterator.next().value;
    playerToAdd2 = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd, team2, team1);
    addIfGkToOtherTeam(playerToAdd2, team2, team1);
    playerToAdd = keysIterator.next().value;
    playerToAdd2 = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd, team1, team2);
    if(found.length>12){
    addIfGkToOtherTeam(playerToAdd2, team1, team2);
    playerToAdd = keysIterator.next().value;
    }
    if(found.length>13){
        addIfGkToOtherTeam(playerToAdd, team2, team1);
    }
    if(niedzielneGranie==false){  //w środy ostatni pick idzie do drugiej drużyny i dostaje lepszego bramkarza.
        swapGKsInWansday(team1,team2)
    }
    function swapGKsInWansday(team1,team2){
        if(team1.some(element=>element.includes('(BR)')) && team2.some(element=>element.includes('(BR)'))){
            let gk1 = team1.find(element=>element.includes('(BR)'))
            let gk2 = team2.find(element=>element.includes('(BR)'))
            team1 = team1.filter(element=>!element.includes('(BR)'))
            team2 = team2.filter(element=>!element.includes('(BR)'))
            team1.push(gk2)
            team2.push(gk1)
        }
    }

    let finalAssign = "Team 1    Team 2"
    console.log("Team 1    Team 2")
    for (let index = 0; index < 7; index++) {
        finalAssign = finalAssign + '<br></br>'
        console.log('\n')
        finalAssign = finalAssign + team1[index] + ' / ' + team2[index]

        console.log(team1[index])
        console.log(' / ')
        console.log(team2[index])
    }
    document.getElementById('result').innerHTML = finalAssign

    function addIfGkToOtherTeam(player, team1, team2) {
        const containsSubstring = team1.some(element => element.includes('(BR)'));
        if (containsSubstring) {
            if (player.includes(('(BR)'))) {
                console.log("GK FOUND ")
                if(team2.length = 7){
                    team1.push(team2.pop())
                }
                team2.push(player)
            } else {
                team1.push(player)
            }
        } else {
            if (player.includes("Dawid Will") && team1.some(element => element.includes('Mateusz Szyba')) && (team2.some(element => element.includes('Paweł Maciejewski')))) {
                team2.splice(0, 1)
                team1.push("Paweł Macieje")
                team2.push(player)
                team1.push(keysIterator.next().value)
                team1.push(keysIterator.next().value)
            } else if (player.includes("Dawid Will") && team1.some(element => element.includes('Mateusz Szyba'))) {
                team2.push(player);
                team1.push(keysIterator.next().value)
                team1.push(keysIterator.next().value)
            } else if (player.includes("Dawid Will") && (team1.some(element => element.includes('Paweł Maciejewski')))) {
                team2.push(player);
                team1.push(keysIterator.next().value)
                team1.push(keysIterator.next().value)
            } else {
                console.log("GK Not found")
                team1.push(player)
            }
        }
    }
}
