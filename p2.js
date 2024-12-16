function cleanResults(data, niedzielneGranie, locator = 'xzsf02u">') {
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
    let stableRanking = {
        "Bartek Pryszcz": 6.0,
        "Dawid Will": 8.0,
        "Daniel Toporczyk": 7.0,
        "Bogumił Gr": 6.5,
        "Illia Leo Ti Lish": 1.2,
        "Paweł Maciejewski": 8.6,
        "Paweł Macieje": 8.6,
        "Roma Samkovskiy": 4.3,
        "Yura Savchuk": 5.0,
        "Marek Ziober": 4.8,
        "Kamil Kawa(BR)": 5.0,
        "Michał Siewniak": 5.8,
        "Rafał Chrzanowski(BR)": 3.5,
        "Adam Wisniewski": 7.8,
        "Andrzej Kruczyński(BR)": 3.7,
        "Aleksander Osmałek": 4.2,
        "Andrzej Doruchowski": 3.8,
        "Adam Syrek": 8.2,
        "Oliwier Sulima": 3.9,
        "Michal Ce": 4.0,
        "Tobiasz Fuczek": 7.6,
        "Adam Piątek": 6.8,
        "Mateusz Szyba": 9.1,
        "Bartek Zda": 8.4,
        "Bartek Zdanowski": 8.4,
        "Szymon Śleziona(BR)": 3.8,
        "Marcin Szkup": 1.1,
        "Daniel Tochwin": 8.2,
        "Michał Urbanek": 4.1,
        "Mateusz Ziober": 0.9,
        "Marcin Ziober": 1.0
    }
    if (niedzielneGranie) {
        stableRanking["Adam Piątek"] = stableRanking["Adam Piątek"] - 1.4
        stableRanking["Paweł Maciejewski"] = stableRanking["Paweł Maciejewski"] - 1.4
        stableRanking["Paweł Macieje"] = stableRanking["Paweł Maciejewski"] - 1.4
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
    addIfGkToOtherTeam(playerToAdd2, team1, team2);
    playerToAdd = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd, team2, team1);

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
            console.log("GK Not found")
            team1.push(player)
        }
    }
}
