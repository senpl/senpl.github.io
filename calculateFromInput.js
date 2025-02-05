let testString = `
Bartek Pryszcz /

Bartek Zdanows /

Dawid Willan /

Maciek ER /

Paweł Mac /

Roma Samkovskiy /

Andrzej Doruchowski /

Kamil Kawa(BR) /

Szymon Śleziona(BR) /

Marcin Szkup /

Mateusz Ziober /

Wiktor Ostolski /

Michal Ce /

Adam Piątek`

// calculateSquads(testString, false)

function calculateSquads(data, niedzielneGranie, locator = 'xzsf02u">') {
    console.log(data)
    let found = data.split('/')
    found = found.map(el => el.trim())
    console.log(found)
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
    function replaceStringsStartingWith(array, prefix, newValue) {
        return array.map(item =>
            item.startsWith(prefix) ? newValue : item
        );
    }
    if (found.filter(element => element.startsWith("Dawid Wil"))) {
        found = replaceStringsStartingWith(found, "Dawid Wil", "Dawid Will")
    }
    if (found.filter(element => element.startsWith("Bogumił Grz"))) {
        found = replaceStringsStartingWith(found, "Bogumił Grz", "Bogumił Gr")
    }
    if (found.filter(element => element.startsWith("Paweł Mac"))) {
        found = replaceStringsStartingWith(found, "Paweł Mac", "Paweł Maciejewski")
    }
    if (found.filter(element => element.startsWith("Bartek Pry"))) {
        found = replaceStringsStartingWith(found, "Bartek Pry", "Bartek Pryszcz")
    }
    if (found.filter(element => element.startsWith("Bartek Zda"))) {
        found = replaceStringsStartingWith(found, "Bartek Zda", "Bartek Zdanowski")
    }
    if (found.filter(element => element.startsWith("Kwa Kwa"))) {
        found = replaceStringsStartingWith(found, "Kwa Kwa", "Ryba")
    }
    if (found.filter(element => element.startsWith("Maciek ERa"))) {
        found = replaceStringsStartingWith(found, "Maciek ERa", "Maciek ERa")
    }
    console.log(found)
    let stableRanking = {
        "Andrzej Rukojć": 5.0,
        "Bartek Pryszcz": 5.6,
        "Dawid Will": 8.0,
        "Daniel Toporczyk": 7.5,
        "Bogumił Gr": 7.0,
        "Illia Leo Ti Lish": 1.2,
        "Paweł Maciejewski": 8.6,
        "Roma Samkovskiy": 4.5,
        "Yura Savchuk": 6.2,
        "Marek Ziober": 4.8,
        "Kamil Kawa": 3.9,
        "Kamil Kawa(BR)": 6.0,
        "Michał Siewniak": 5.8,
        "Rafał Chrzanowski(BR)": 3.5,
        "Adam Wisniewski": 7.6,
        "Ryba": 7.7, //Ryba alias Krzysiek K.
        "Andrzej Kruczyński(BR)": 3.7,
        "Aleksander Osmałek": 4.2,
        "Andrzej Doruchowski": 5.5,
        "Adam Syrek": 7.9,
        "Oliwier Sulima": 3.6,
        "Michal Ce": 4.9,
        "Tobiasz Fuczek": 7.8,
        "Adam Piątek": 7.2,
        "Mateusz Szyba": 8.7,
        "Bartek Zdanowski": 8.4,
        "Szymon Śleziona(BR)": 5.3,
        "Marcin Szkup": 3.5,
        "Daniel Tochwin": 8.2,
        "Michał Urbanek": 3.8,
        "Mateusz Ziober": 0.9,
        "Marcin Ziober": 3.0,
        "Maciek ERa": 5.7,
        "Wiktor Ostolski": 6.8
    }
    if (niedzielneGranie) {
        stableRanking["Adam Piątek"] = stableRanking["Adam Piątek"] - 0.2
        stableRanking["Paweł Maciejewski"] = stableRanking["Paweł Maciejewski"] - 0.4
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
    let team2 = [keysIterator.next().value]
    let playerToAdd2 = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd2, team2, team1);
    let playerToAdd = keysIterator.next().value;
    playerToAdd2 = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd, team1, team2);
    addIfGkToOtherTeam(playerToAdd2, team1, team2);
    playerToAdd = keysIterator.next().value;
    playerToAdd2 = keysIterator.next().value;
    addIfGkToOtherTeam(playerToAdd, team2, team1);
    addIfGkToOtherTeam(playerToAdd2, team2, team1);
    console.log("team1")
    console.log(team1)
    console.log("team2")
    console.log(team2)
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
    if (found.length > 12) {
        if(niedzielneGranie==true){
            addIfGkToOtherTeam(playerToAdd2, team2, team1);
            playerToAdd = keysIterator.next().value;        
        }else{
            addIfGkToOtherTeam(playerToAdd2, team1, team2);
            playerToAdd = keysIterator.next().value;
        }
    }
    if (found.length > 13) {
        if(niedzielneGranie==true){
            addIfGkToOtherTeam(playerToAdd2, team1, team2);
            playerToAdd = keysIterator.next().value;        
        }else{
            addIfGkToOtherTeam(playerToAdd, team2, team1);
        }
    }
    if (niedzielneGranie == false) {  //w środy ostatni pick idzie do drugiej drużyny i dostaje lepszego bramkarza.
        let { team1: team1swap, team2: team2swap } = swapGKsIfTeam2GotWeaker(team1, team2);
        team1 = team1swap;
        team2 = team2swap;
    }
    function  swapGKsIfTeam2GotWeaker(team1, team2) {
        if (team1.some(element => element.includes('(BR)')) && team2.some(element => element.includes('(BR)'))) {
            let gk1 = team1.find(element => element.includes('(BR)'))
            let gk2 = team2.find(element => element.includes('(BR)'))
            team1 = team1.filter(element => !element.includes('(BR)'))
            team2 = team2.filter(element => !element.includes('(BR)'))
            gk1Rating=stableRanking[gk1]
            gk2Rating=stableRanking[gk2]
            if(gk1Rating>gk2Rating){
                    team1.push(gk2)
                    team2.push(gk1)}
                else{
                    team1.push(gk1)
                    team2.push(gk2)
                }
            return { team1, team2 }
        } else if (team1.some(element => element.includes('(BR)')) && !team2.some(element => element.includes('(BR)'))) {
            let gk1 = team1.find(element => element.includes('(BR)'))
            team1 = team1.filter(element => !element.includes('(BR)'))
            let playerToTeam1 = team2.splice(5, 1);
            team1.push(playerToTeam1.toString());
            team2.push(gk1);
            return { team1, team2 }
        } else {
            return { team1, team2 }
        }
    }
    team1 = team1.filter(element => element);
    team2 = team2.filter(element => element);
    let finalAssign = "Team 1    Team 2"
    console.log("Team 1    Team 2")
    for (let index = 0; index < 8; index++) {
        finalAssign = finalAssign + '<br></br>'
        console.log('\n')
        finalAssign = finalAssign + team1[index] + ' / ' + team2[index]

        console.log(team1[index])
        console.log(' / ')
        console.log(team2[index])
    }
    document.getElementById('result').innerHTML = finalAssign

    function addIfGkToOtherTeam(player, team1, team2) {
        if (player == undefined) {
            return
        }
        const team1AlreadyGotBR = team1.some(element => element.includes('(BR)'));
        if (team1AlreadyGotBR) {
            if (player.includes(('(BR)'))) {
                console.log("GK FOUND ")
                team1.push(team2.pop())
                team2.push(player)
            } else {
                team1.push(player)
            }
        } else {
            if (player.includes("Paweł Ma") && team1.some(element => element.includes('Dawid Will'))) {
                team2.push(player)
            } else if (player.includes("Dawid Will") && team1.some(element => element.includes('Mateusz Szyba')) && (team2.some(element => element.includes('Paweł Maciejewski')))) {
                team2.splice(0, 1)
                team1.push("Paweł Maciejewski")
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
                if (team1.length >= 7) {
                    team2.push(player)
                } else{
                console.log("GK Not found")
                team1.push(player)
                }
            }
        }
    }
}
