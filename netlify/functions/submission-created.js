import helpers from './helper.js'
const {
    getEntryCost,
    getRPRewards,
    sortBySkillTier,
    calculateBonusRP
} = helpers

export const handler = async (event) => {
    let payload = JSON.parse(event.body).payload.data
    let {
        playerRank,
        division,
        placement,
        individualRookie,
        individualBronze,
        individualSilver,
        individualGold,
        individualPlatinum,
        individualDiamond,
        individualMaster,
        teamRookie,
        teamBronze,
        teamSilver,
        teamGold,
        teamPlatinum,
        teamDiamond,
        teamMaster
    } =  payload
    let rpCost = getEntryCost(playerRank,division)
    let {
        placementRP,
        baseKP
    } = getRPRewards(placement)
    let individualKPArray = [
        {
            "rank" : "rookie",
            "count" : individualRookie
        },
        {
            "rank" : "bronze",
            "count" : individualBronze
        },
        {
            "rank" : "silver",
            "count" : individualSilver
        },
        {
            "rank" : "gold",
            "count" : individualGold
        },
        {
            "rank" : "platinum",
            "count" : individualPlatinum
        },
        {
            "rank" : "diamond",
            "count" : individualDiamond
        },
        {
            "rank" : "master",
            "count" : individualMaster
        }
    ]
    let teamKPArray = [
        {
            "rank" : "rookie",
            "count" : teamRookie
        },
        {
            "rank" : "bronze",
            "count" : teamBronze
        },
        {
            "rank" : "silver",
            "count" : teamSilver
        },
        {
            "rank" : "gold",
            "count" : teamGold
        },
        {
            "rank" : "platinum",
            "count" : teamPlatinum
        },
        {
            "rank" : "diamond",
            "count" : teamDiamond
        },
        {
            "rank" : "master",
            "count" : teamMaster
        }
    ]
    let bonusKP = individualKPArray.sort(sortBySkillTier(playerRank))
    let bonusTeamKP = teamKPArray.sort(sortBySkillTier(playerRank))
    
    calculateBonusRP(playerRank, bonusKP, bonusTeamKP, baseKP)
    
    return {
        statusCode: 200,
        body: JSON.stringify("Calculating RP")
    }
}
