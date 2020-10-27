const elfDesc = "Elves are blahblag"
const orcDesc = "Orcs are blahblag"
const humanDesc = "Humans are blahblag"
const dwarfDesc = "Dwarves are blahblag"

const assassinDesc = "Assassins.."
const thiefDesc = "Thieves.."
const sorcererDesc = "Sorcerers.."
const priestDesc = "Priests.."
const gladiatorDesc = "Gladiators.."
const knightDesc = "Knights.."
const vanquisherDesc = "Vanquishers.."
const justicianDesc = "Justicians.."
const druidDesc = "Druids.."
const hunterDesc = "Hunters.."

const campaigns = [
    {"name": "WebQuest", "description": "Fantasy Adventure"},
    {"name": "Förbundt", "description": "Post-Apocalyptic Europe"},
    {"name": "Chapter 2", "description": "dsadasd"},
    {"name": "Chapter 3", "description": "dddsasd"},
    {"name": "Chapter 4", "description": "aaasdasd"},
]

export function getCampaigns() {
    return campaigns;
}





export function getProfDescription(prof){
    switch (prof) {
        case "assassin": return assassinDesc;
        case "thief": return thiefDesc;
        case "sorcerer": return sorcererDesc;
        case "priest": return priestDesc;
        case "gladiator": return gladiatorDesc;
        case "knight": return knightDesc;
        case "vanquisher": return vanquisherDesc;
        case "justician": return justicianDesc;
        case "druid": return druidDesc;
        case "hunter": return hunterDesc;
    }
}

export function getRaceDescription(race){
    switch (race) {
        case "dwarf": return dwarfDesc;
        case "human": return humanDesc;
        case "orc": return orcDesc;
        case "elf": return elfDesc;
    }
}

