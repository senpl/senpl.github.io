let testString = `
Michał Urbanek /  Bartek Pryszcz /  Illia Leo Ti L /  Dawid Willan> /  Paweł Maci /  Bogumił Grzybowsk /  Maciek ER /  Lucjan Kowalski /  Aleksander Osmałek /  Szymon Śleziona(BR) /  Rafał Chrzanowski(BR) /  Mateusz Ziober /  Rafał Sobota /  Szybki Mati`
// calculateSquads(testString, false, false, false, 0.3)

let stableRanking = {
        "Szybki Mati": 9.0,
        "Bartek Zdanowski": 8.7,
        "Paweł Maciejewski": 8.8,
        "Dawid Will": 8.0,
        "Adam Syrek": 7.9,
        "Adam Piątek": 7.8,
        "Tobiasz Fuczek": 7.9,
        "Ryba": 7.6, //Ryba alias Krzysiek K.
        "Daniel Toporczyk": 8.5,
        "Rafał Sobota": 7.3,
        "Bogumił Gr": 7.1,
        "Szymon Śleziona": 7.0,
        "Wiktor Ostolski": 6.9,
        "Adam Wisniewski": 6.8,
        "Bartek Pryszcz": 6.7,
        "Lucjan Kowalski": 6.6,
        "Inny": 5.0,
        "Andrzej Rukojć": 6.4,
        "Yura Savchuk": 6.5,
        "Michał Siewniak": 6.3,
        "Roma Samkovskiy": 6.2,
        "Kamil Kawa(BR)": 6.1,
        "Maciek ER": 5.7,
        "Andrzej Doruchowski": 5.8,
        "Szymon Śleziona(BR)": 5.6,
        "Michal Ce": 5.9,
        "Marek Ziober": 4.8,
        "Michał Urbanek": 4.6,
        "Mateusz Szojda": 4.5,
        "Aleksander Osmałek": 4.1,
        "Kamil Kawa": 4.5,
        "Andrzej Kruczyński(BR)": 3.7,
        "Oliwier Sulima": 4.5,
        "Rafał Chrzanowski(BR)": 3.9,
        "Mariusz od Murzyna": 3.7,
        "Marcin Szkup": 3.5,
        "Daniel (od Romy)": 3.4,
        "Denis": 3.3,
        "Illia Leo Ti Lish": 3.2,
        "Marcin Ziober": 3.0,
        "Mateusz Ziober": 2.9,
        "Sławomir Jeleń": 3.2,
        "Rafał Chrzanowski": 3.1,
        "Rafał Baraniec(BR)": 1.2,
        "Joshua Kimmich": 1.0,
        "Random 1": 3.9,
        "Random 2": 3.8,
        "Random 3": 3.6,
        "Random 4": 3.5,
        "Random 5": 3.4,
        "Random Dobry": 6.5,
        "Random Zły": 2.5,
        "Random Bardzo dobry": 8.5,
    }
    
let sumaPowołań = {
        "Szybki Mati": 20,
        "Bartek Zdanowski": 29,
        "Paweł Maciejewski": 30,
        "Dawid Will": 43,
        "Adam Syrek": 2,
        "Adam Piątek": 36,
        "Tobiasz Fuczek": 20,
        "Ryba": 14, //Ryba alias Krzysiek K.
        "Daniel Toporczyk": 2,
        "Rafał Sobota": 2.3,
        "Bogumił Gr": 13,
        "Szymon Śleziona": 7.0,
        "Wiktor Ostolski": 6.9,
        "Adam Wisniewski": 16.8,
        "Bartek Pryszcz": 44,
        "Lucjan Kowalski": 6.6,
        "Inny": 1,
        "Andrzej Rukojć": 6.4,
        "Yura Savchuk": 24,
        "Michał Siewniak": 6.3,
        "Roma Samkovskiy": 20.2,
        "Kamil Kawa(BR)": 27,
        "Maciek ER": 30,
        "Andrzej Doruchowski": 15,
        "Szymon Śleziona(BR)": 12,
        "Michal Ce": 7,
        "Marek Ziober": 4.8,
        "Michał Urbanek": 24.6,
        "Mateusz Szojda": 4.5,
        "Aleksander Osmałek": 22,
        "Kamil Kawa": 4.5,
        "Andrzej Kruczyński(BR)": 0.7,
        "Oliwier Sulima": 4.5,
        "Rafał Chrzanowski(BR)": 25,
        "Mariusz od Murzyna": 2,
        "Marcin Szkup": 42,
        "Daniel (od Romy)": 2,
        "Denis": 4,
        "Illia Leo Ti Lish": 10,
        "Marcin Ziober": 3.0,
        "Mateusz Ziober": 27,
        "Sławomir Jeleń": 3.2,
        "Rafał Chrzanowski": 3.1,
        "Rafał Baraniec(BR)": 1.2,
        "Joshua Kimmich": 1.0,
        "Random 1": 1,
        "Random 2": 1,
        "Random 3": 1,
        "Random 4": 1,
        "Random 5": 1,
        "Random Dobry": 1,
        "Random Zły": 1,
        "Random Bardzo dobry": 0,
}


    let defenceRanking = {
        "Andrzej Rukojć": 5.8,
        "Bartek Pryszcz": 6.8,
        "Dawid Will": 8.5,
        "Daniel Toporczyk": 8.5,
        "Rafał Sobota": 7.3,
        "Bogumił Gr": 8.9,
        "Inny": 5.0,
        "Illia Leo Ti Lish": 2.7,
        "Paweł Maciejewski": 5.3,
        "Roma Samkovskiy": 6.6,
        "Yura Savchuk": 3.7,
        "Marek Ziober": 3.8,
        "Kamil Kawa": 6.1,
        "Kamil Kawa(BR)": 9.0,
        "Michał Siewniak": 7.8,
        "Rafał Chrzanowski(BR)": 6.1,
        "Rafał Chrzanowski": 3.5,
        "Adam Wisniewski": 5.5,
        "Ryba": 6.9, //Ryba alias Krzysiek K.
        "Andrzej Kruczyński(BR)": 6.2,
        "Aleksander Osmałek": 4.2,
        "Andrzej Doruchowski": 4.8,
        "Adam Syrek": 6.9,
        "Oliwier Sulima": 5.6,
        "Michal Ce": 6.1,
        "Tobiasz Fuczek": 5.6,
        "Adam Piątek": 9.0,
        "Szybki Mati": 7.9,
        "Bartek Zdanowski": 8.8,
        "Szymon Śleziona": 8.6,
        "Szymon Śleziona(BR)": 7.9,
        "Lucjan Kowalski": 5.9,
        "Marcin Szkup": 2.5,
        "Michał Urbanek": 3.8,
        "Mateusz Ziober": 0.9,
        "Marcin Ziober": 3.0,
        "Mariusz od Murzyna": 3.8,
        "Daniel (od Romy)": 4.4,
        "Denis": 4.3,
        "Maciek ER": 6.9,
        "Wiktor Ostolski": 7.8,
        "Sławomir Jeleń": 3.6,
        "Mateusz Szojda": 3.5,
        "Rafał Baraniec(BR)": 4.5,
        "Joshua Kimmich": 2.4,
        "Random 1": 3.9,
        "Random 2": 3.8,
        "Random 3": 3.6,
        "Random 4": 3.5,
        "Random 5": 3.4,
        "Random Dobry": 6.5,
        "Random Zły": 2.5,
        "Random Bardzo dobry": 8.5,
    }

function calculateSquads(data, niedzielneGranie, showInBrowser = true, davidSwitch = true, variation = 0.2) {
    console.log("variation " + variation)
    console.log("dawidSwitch " + davidSwitch)
    console.log(data)
    let found = data.split('/')
    found = found.map(el => el.trim())
    console.log(found)
    //replace shorcut with full names
    function replaceStringsStartingWith(array, prefix, newValue) {
        return array.map(item =>
            item.startsWith(prefix) ? newValue : item
        );
    }
    found = found.filter(element => element)
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
    if (found.filter(element => element.startsWith("Krz Krz"))) {
        found = replaceStringsStartingWith(found, "Krz Krz", "Ryba")
    }
    if (found.filter(element => element.startsWith("Andrzej Ru"))) {
        found = replaceStringsStartingWith(found, "Andrzej Ru", "Andrzej Rukojć")
    }
    if (found.filter(element => element.startsWith("Maciek ER"))) {
        found = replaceStringsStartingWith(found, "Maciek ER", "Maciek ER")
    }
    if (found.filter(element => element.startsWith("Roma Sam"))) {
        found = replaceStringsStartingWith(found, "Roma Sam", "Roma Samkovskiy")
    }
    if (found.filter(element => element.startsWith("Daniel To"))) {
        found = replaceStringsStartingWith(found, "Daniel To", "Daniel Toporczyk")
    } else if (found.filter(element => element.startsWith("Daniel"))) {
        found = replaceStringsStartingWith(found, "Daniel", "Daniel (od Romy)")
    }
    if (found.filter(element => element.startsWith("Illia Leo Ti"))) {
        found = replaceStringsStartingWith(found, "Illia Leo Ti", "Illia Leo Ti Lish")
    }
    console.log(found)
    
    found = found.filter(element => element)
    found.filter(element => {
        if (stableRanking[element] == undefined) {
            console.log("Nie znaleziono ratingu dla: ")
            console.log(found.filter(element => stableRanking[element] == undefined))
            if (element.includes("(BR)") && element.includes("(GK)")) {
                stableRanking[element] = 3.2
                defenceRanking[element] = 6.1
            } else {
                stableRanking[element] = 4.9
                defenceRanking[element] = 4.9
            }
        }
    })
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
        if (niedzielneGranie == true) {
            addIfGkToOtherTeam(playerToAdd2, team2, team1);
            playerToAdd = keysIterator.next().value;
        } else {
            addIfGkToOtherTeam(playerToAdd2, team1, team2);
            playerToAdd = keysIterator.next().value;
        }
    }
    if (found.length > 13) {
        if (team1.length < 7) {
            team1.push(playerToAdd)
        } else {
            team2.push(playerToAdd)
        }
    }
    console.log("team1f")
    console.log(team1)
    console.log("team2f")
    console.log(team2)
    if (checkIfTeamGot3DefensiveCapable(team1) == false && getNoOfDefenders(team2) > 3) {
        let team2Defenders = team2.filter(element => (defenceRanking[element] > 6.0 && !element.includes("(BR)")))
        let bestDefenderToTakeIndex = 2
        if (team2Defenders.length > 4) {
            bestDefenderToTakeIndex = 3
        }
        let indexOfChange = team2.indexOf(team2Defenders[team2Defenders.length - bestDefenderToTakeIndex])
        team1.push(team2[team2.indexOf(team2Defenders[team2Defenders.length - bestDefenderToTakeIndex])])
        team2.splice(team2.indexOf(team2Defenders[team2Defenders.length - bestDefenderToTakeIndex]), 1)
        team2.push(team1[indexOfChange])
        team1.splice(indexOfChange, 1)
        if (checkIfTeamGot3DefensiveCapable(team1) == false && getNoOfDefenders(team2) > 3) {
            let team2Defenders = team2.filter(element => (defenceRanking[element] > 6.0 && !element.includes("(BR)")))
            let bestDefenderToTakeIndex = 2
            // if (team2Defenders.length > 4) {
            //     bestDefenderToTakeIndex = 3
            // }
            let indexOfChange = team2.indexOf(team2Defenders[team2Defenders.length - bestDefenderToTakeIndex])
            team1.push(team2[team2.indexOf(team2Defenders[team2Defenders.length - bestDefenderToTakeIndex])])
            team2.splice(team2.indexOf(team2Defenders[team2Defenders.length - bestDefenderToTakeIndex]), 1)
            team2.push(team1[indexOfChange])
            team1.splice(indexOfChange, 1)
            if (checkIfTeamGot3DefensiveCapable(team1) == false) {
                // throw new Error("Not enough defenders")
            }
        }

        team1.sort((a, b) => playersWithRating.get(b) - playersWithRating.get(a))
        team2.sort((a, b) => playersWithRating.get(b) - playersWithRating.get(a))
        team1 = team1.filter(element => element != undefined)
        team2 = team2.filter(element => element != undefined)
        console.log(team1)
        console.log(team2)
    }
    if (checkIfTeamGot3DefensiveCapable(team2) == false && getNoOfDefenders(team1) > 3) {
        //znajdz najwyższy def rating z danej drużyny
        // i zamień go z ondrop. ratingiem drużyny przeciwnej

        let team1Defenders = team1.filter(element => (defenceRanking[element] > 6.0 && !element.includes("(BR)")))
        let bestDefenderToTakeIndex = 2
        // if (team1Defenders.length > 4) {
        //     bestDefenderToTakeIndex = 3
        // }
        console.log(team1[team1.indexOf(team1Defenders[team1Defenders.length - bestDefenderToTakeIndex])])
        let indexOfChange = team1.indexOf(team1Defenders[team1Defenders.length - bestDefenderToTakeIndex])
        team2.push(team1[team1.indexOf(team1Defenders[team1Defenders.length - bestDefenderToTakeIndex])])
        team1.splice(team1.indexOf(team1Defenders[team1Defenders.length - bestDefenderToTakeIndex]), 1)
        team1.push(team2[indexOfChange])
        team2.splice(indexOfChange, 1)
        if (checkIfTeamGot3DefensiveCapable(team2) == false && getNoOfDefenders(team1) > 3) {
            let team1Defenders = team1.filter(element => (defenceRanking[element] > 6.0 && !element.includes("(BR)")))
            console.log(team1[team1.indexOf(team1Defenders[team1Defenders.length - 2])])
            let indexOfChange = team1.indexOf(team1Defenders[team1Defenders.length - 2])
            team2.push(team1[team1.indexOf(team1Defenders[team1Defenders.length - 2])])
            team1.splice(team1.indexOf(team1Defenders[team1Defenders.length - 2]), 1)
            team1.push(team2[indexOfChange])
            team2.splice(indexOfChange, 1)
        }
        team1.sort((a, b) => playersWithRating.get(b) - playersWithRating.get(a))
        team2.sort((a, b) => playersWithRating.get(b) - playersWithRating.get(a))
        console.log(team1)
        console.log(team2)
        team1 = team1.filter(element => element != undefined)
        team2 = team2.filter(element => element != undefined)
        console.log(team1)
        console.log(team2)
    }
    if (niedzielneGranie == false) {  //w środy ostatni pick idzie do drugiej drużyny i dostaje lepszego bramkarza.
        let { team1: team1swap, team2: team2swap } = swapGKsIfTeam2GotWeaker(team1, team2);
        team1 = team1swap;
        team2 = team2swap;
        console.log("team1")
        console.log(team1)
        console.log("team2")
        console.log(team2)
    }
    function swapGKsIfTeam2GotWeaker(team1, team2) {
        if (team1.includes('(BR)') && team1.some(element => element.includes('(BR)')) && team2.some(element => element.includes('(BR)'))) {
            let gk1 = team1.find(el => el.includes('(BR)'))
            let gk2 = team2.find(el => el.includes('(BR)'))
            console.log("gk1 " + gk1)
            console.log("gk2 " + gk2)
            team1 = team1.filter(element => element != gk1)
            team2 = team2.filter(element => element != gk2)
            gk1Rating = stableRanking[gk1]
            gk2Rating = stableRanking[gk2]
            if (gk1Rating > gk2Rating) {
                team1.push(gk2)
                team2.push(gk1)
            }
            else {
                team1.push(gk1)
                team2.push(gk2)
            }
            return { team1, team2 }
        } else if (team1.includes('(BR') && team1.some(element => element.includes('(BR)')) && !team2.some(element => element.includes('(BR)'))) {
            let gk1 = team1.find(element => element.includes('(BR)'))
            team1 = team1.filter(element => !element.includes(gk1))
            let playerToTeam1 = team2.splice(5, 1);
            team1.push(playerToTeam1.toString());
            team2.push(gk1);
            return { team1, team2 }
        } else {
            return { team1, team2 }
        }
    }
    team1 = team1.filter(element => element != undefined);
    team2 = team2.filter(element => element != undefined);
    console.log("team1ToCheck")
    console.log(team1)
    console.log("team2ToCheck")
    console.log(team2)
    let team1WithRating = team1.map(element => [element, stableRanking[element]])
    let team2WithRating = team2.map(element => [element, stableRanking[element]])
    let team3 = [], team4 = [], team5 = [], team6 = []

    for (let i = 0; i < team1WithRating.length; i++) {
        if (team1WithRating[i] != undefined && team2WithRating[i] != undefined) {
            if (Math.abs(team1WithRating[i][1] - team2WithRating[i][1]) <= variation && !team1WithRating[i][0].includes("(BR)") && !team2WithRating[i][0].includes("(BR)")) {
                team4.push(team1WithRating[i][0])
                team3.push(team2WithRating[i][0])
                if (i > 4) {
                    team6.push(team1WithRating[i][0]);
                    team5.push(team2WithRating[i][0]);
                } else {
                    team5.push(team1WithRating[i][0]);
                    team6.push(team2WithRating[i][0]);
                }
            } else {
                team3.push(team1WithRating[i][0])
                team4.push(team2WithRating[i][0])
                team5.push(team1WithRating[i][0])
                team6.push(team2WithRating[i][0])
            }
        }
        if (team1WithRating[i] != undefined && team2WithRating[i] == undefined) {
            if (team1.length >= 6 && niedzielneGranie == false) {
                team4.push(team1WithRating[i][0])
                team6.push(team1WithRating[i][0])
            } else {
                team3.push(team1WithRating[i][0])
                team5.push(team1WithRating[i][0])
            }
        }
        if (team1WithRating[i] == undefined && team2WithRating[i] != undefined) {
            team4.push(team2WithRating[i][0])
            team6.push(team2WithRating[i][0])
        }
    }
    let finalAssign = "Team 1    Team 2     (Vote Icon Heart)"
    for (let index = 0; index < 7; index++) {
        finalAssign = finalAssign + '<p></p>'
        finalAssign = finalAssign + team1[index] + ' / ' + team2[index]
    }
    let finalAssign3 = "Team 1    Team 2     (Vote Icon Trzymaj Się)"
    for (let index = 0; index < 7; index++) {
        finalAssign3 = finalAssign3 + '<p></p>'
        finalAssign3 = finalAssign3 + team3[index] + ' / ' + team4[index]
    }
    let finalAssign4 = "Team 1    Team 2     (Vote Icon Ha Ha)"
    for (let index = 0; index < 7; index++) {
        finalAssign4 = finalAssign4 + '<p></p>'
        finalAssign4 = finalAssign4 + team5[index] + ' / ' + team6[index]
    }
    if (showInBrowser) {
        let finalAssign2 = "Team 1    Team 2     (Vote Icon Wow)"
        for (let index = 0; index < 7; index++) {
            finalAssign2 = finalAssign2 + '<p></p>'
            if (index == 5 || index == 6) {
                finalAssign2 = finalAssign2 + team2[index] + ' / ' + team1[index]
            } else {
                finalAssign2 = finalAssign2 + team1[index] + ' / ' + team2[index]
            }
        }
        finalAssign = finalAssign.replaceAll("undefined", "")
        finalAssign2 = finalAssign2.replaceAll("undefined", "")
        finalAssign3 = finalAssign3.replaceAll("undefined", "")
        finalAssign4 = finalAssign4.replaceAll("undefined", "")
        finalAssign = finalAssign.replace("<p></p> / <p", "")
        finalAssign2 = finalAssign2.replace("<p></p> / <p", "")
        finalAssign3 = finalAssign3.replace("<p></p> / <p", "")
        finalAssign4 = finalAssign4.replace("<p></p> / <p", "")
        let playersByRating=sortedByRating.keys()
        let bestRatingPlayer=playersByRating.next().value
        let secondBestRatingPlayer=playersByRating.next().value
        let finalAssign5 = "Wybieramy siłowo pierwszy " + secondBestRatingPlayer + " jednego, potem " + bestRatingPlayer + " 2ch i dalej po 2 (Vote Icon Wrr)"
        let finalAssign6 = "Wybieramy siłowo przez losowych graczy, pierwszy 1 potem 2gi dwóch i po 1 (Vote Icon Przykro mi(Cry))"
        document.getElementById('result').innerHTML = finalAssign + "<br><p></p></br>" + finalAssign2
            + "<br><p></p></br>" + finalAssign3 + "<br><p></p></br>" + finalAssign4 + "<br><p></p></br>" + finalAssign5+ "<br><p></p></br>" + finalAssign6
    }

    function checkIfPlayerIsAvoidedByDavid(player, team1, team2) {
        if (player.includes("Dawid Will") && (team1.some(element => element.includes('Szybki Mati')) || team2.some(element => element.includes('Szybki Mati'))) && ((team2.some(element => element.includes('Paweł Maciejewski')))) || team1.some(element => element.includes('Szybki Mati'))) {
            console.log("Paweł Maciejewski and Szybki Mati found david switch on")
            if(team1.includes('Szybki Mati')&& !team2.includes('Bartek Zdanowski')) {
                team2.push(player)
            } else if (team2.includes('Szybki Mati')) {
                team2.splice(0, 1)
                team2.push("Paweł Maciejewski")
                team1.push(player)
            } else {
                team2.splice(0, 1)
                team1.push("Szybki Mati")
                team2.push(player)
            }
            team2.filter(element => element != undefined)
            team1.filter(element => element != undefined)
        }
        else if (player.includes("Paweł Ma") && team1.some(element => element.includes('Dawid Will'))) {
            console.log("Paweł Maciejewski found david switch on")
            team2.push(player)
        } else if (player.includes("Dawid Will") && team1.some(element => element.includes('Szybki Mati'))) {
            team2.push(player);
            team1.push(keysIterator.next().value)
            team1.push(keysIterator.next().value)
        } else if (player.includes("Dawid Will") && (team1.some(element => element.includes('Paweł Maciejewski')))) {
            team2.push(player);
            team1.push(keysIterator.next().value)
            team1.push(keysIterator.next().value)
        }
    }

    function checkIfTeamGot3DefensiveCapable(team1) {
        let team1Defenders = team1.filter(element => defenceRanking[element] > 6.0)
        if (team1Defenders.length >= 3) {
            return true
        } else {
            return false
        }
    }

    function getNoOfDefenders(team1) {
        let team1Defenders = team1.filter(element => defenceRanking[element] > 6.0)
        return team1Defenders.length
    }

    function addIfGkToOtherTeam(player, team1, team2) {
        if (player == undefined) {
            return;
        }
        const team1AlreadyGotBR = team1.some(element => element.includes('(BR)'));
        const team2AlreadyGotBR = team2.some(element => element.includes('(BR)'));
        if (team1AlreadyGotBR) {
            if (player.includes(('(BR)'))) {
                console.log("GK FOUND ")
                console.log("GK " + player)
                if (team2AlreadyGotBR) {
                    team1.push(player)
                } else {
                    team1.push(team2.pop())
                    team2.push(player)
                }
            } else {
                team1.push(player)
            }
        } else if (team2AlreadyGotBR && player.includes('(BR)')) {
            console.log("GK FOUND ")
            team1.push(player)
        } else {
            if (davidSwitch && (player.includes("Dawid Will") || player.includes("Paweł Maciejewski"))) {
                checkIfPlayerIsAvoidedByDavid(player, team1, team2)
            } else {
                if (team1.length >= 7) {
                    team2.push(player)
                } else {
                    console.log("GK Not found")
                    team1.push(player)
                }
            }
        }
    }
}

// Funkcja do generowania klikalnej listy zawodników
function renderPlayersList() {
 if (typeof stableRanking === "undefined" || typeof sumaPowołań === "undefined") return;
    if (typeof stableRanking === "undefined" || typeof sumaPowołań === "undefined") return;
    const playersListDiv = document.getElementById('playersList');
    if (!playersListDiv) return;
    playersListDiv.innerHTML = '';
    Object.keys(stableRanking)
        .sort((a, b) => (sumaPowołań[b] || 0) - (sumaPowołań[a] || 0))
        .forEach(player => {
            const btn = document.createElement('button');
            btn.textContent = player + " (" + (stableRanking[player] || 0) + ")";
            btn.style.margin = "2px";
            btn.onclick = function() {
                const input = document.getElementById('playersNames');
                if (!input.value.includes(player)) {
                    if (input.value.trim() !== "") input.value += " / ";
                    input.value += player;
                }
            };
            playersListDiv.appendChild(btn);
        });
}

// Uczyń stableRanking globalnym
window.stableRanking = stableRanking;

// Automatycznie generuj listę po załadowaniu strony
window.onload = function() {
    if (typeof renderPlayersList === "function") renderPlayersList();
};
