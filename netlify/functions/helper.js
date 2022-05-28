import entryCosts from './entryCosts.json'
import placementTable from './placementRPTable.json'
import tierModifiers from './tierModifiers.json'
const helpers = {
    getEntryCost: (rank, division) => {
        if (rank == "rookie" || rank == "master") {
            return entryCosts[rank]
        } else {
            return entryCosts[rank][division - 1]
        }
    },
    getRPRewards: (placement) => {
        let placementKey = {
            "6" : "6th",
            "5" : "5th",
            "4" : "4th",
            "3" : "3rd",
            "2" : "2nd",
            "1" : "1st"
        }
        if(placement >= 14) {
            return placementTable["before-14th"]
        } else if (placement >= 11 && placement <= 13) {
            return placementTable["13th-12th-11th"]
        } else if (placement == 10 || placement == 9) {
            return placementTable["10th-9th"]
        } else if (placement == 7 || placement == 8) {
            return placementTable["8th-7th"]
        } else {
            return placementTable[placementKey[placement]]
        }  
    },
    sortBySkillTier: (playerRank) => {
        return function(a, b) {
            let playerTier = tierModifiers.indexOf(playerRank)
            let killATier = tierModifiers.indexOf(a.rank)
            let killBTier = tierModifiers.indexOf(b.rank)
            let skillATier = killATier - playerTier
            let skillBTier = killBTier - playerTier
            return skillBTier - skillATier
        }
    },
    kpFormula: (playerRank, baseKP, maxKPPotential) => {
        return function(kp) {
            if (kp.count > 0) {
                let playerTier = tierModifiers.indexOf(playerRank)
                let killTier = tierModifiers.indexOf(kp.rank)
                let skillTier = killTier - playerTier

                if (skillTier == -2) {
                    baseKP *= .7
                } else if ( skillTier <= -2) {
                    baseKP *= .3
                } else if ( skillTier == 2) {
                    baseKP *= 1.5
                } else if ( skillTier > 2) {
                    baseKP *= 2
                }
                if (maxKPPotential > 0) {
                    if (kp.count >= 6) {
                        maxKPPotential = 0
                        return (baseKP * 3) + ((baseKP * .8) * 3) + ((baseKP * .2) * (kp.count - 6))
                    } else {
                        maxKPPotential  = (maxKPPotential - kp.count > 0 ) ? (maxKPPotential - kp.count) : 0
                        return (baseKP * kp.count)
                    }
                } else {
                    return ((baseKP * .2) * kp.count)
                }
            } else {
                return 0
            }
        }
    },
    calculateBonusRP: (playerRank, individualTotals, teamTotals, baseKP) => {
        // Calculate Individual RP
        let maxKPPotential = 6
        let totalKPCount = individualTotals.reduce((preVal, currVal, currentIndex) => {
            return {"rank": "totals", "count": parseInt(preVal.count) + parseInt(currVal.count)}
        }).count
        let kpBonus = individualTotals.map(helpers.kpFormula(playerRank, baseKP, maxKPPotential))
        if (totalKPCount >= 6) {
            maxKPPotential = 0
        } else {
            maxKPPotential -= totalKPCount
        }
        let teamBonus = teamTotals.map(helpers.kpFormula(playerRank, baseKP, maxKPPotential))
        console.log(kpBonus)
        console.log(teamBonus)
    }
}

export default helpers
  