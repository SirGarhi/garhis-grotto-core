import { CONSTANTS } from "../lib/constants.js"

export function skills() {
	CONFIG.DND5E.abilities.lck = {
		"abbreviation": "lck",
		"fullKey": "luck",
		"label": "Luck",
		"reference": `${CONSTANTS.rulesRef}.JournalEntry.nVTpxENO4kXmZMTS.JournalEntryPage.jdDPDYmJNe3oIqAu`
	}
	CONFIG.DND5E.skills = {
		//physical skills
		"ath": {
			"ability": "str",
			"fullKey": "athletics",
			"label": "Athletics",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#athletics`
		},
		"end": {
			"ability": "con",
			"fullKey": "endurance",
			"label": "Endurance",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#endurance`
		},
		"acr": {
			"ability": "dex",
			"fullKey": "acrobatics",
			"label": "Acrobatics",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#acrobatics`
		},
		//combat
		"wrs": {
			"ability": "str",
			"fullKey": "wrestling",
			"label": "Wrestling",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#wrestling`
		},
		"spc": {
			"ability": "int",
			"fullKey": "spellcraft",
			"label": "Spellcraft",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#spellcraft`
		},
		"psi": {
			"ability": "int",
			"fullKey": "psionics",
         "label": "Psionics",
			"icon": `${CONSTANTS.art}/icons/skills/psionics.svg`,
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#psionics`
		},
		//knowledge
		"his": {
			"ability": "int",
			"fullKey": "history",
			"label": "Historical Lore",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#history`
		},
      "arc": {
			"ability": "int",
			"fullKey": "arcana",
			"label": "Arcane Lore",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#arcane-lore`
		},
		"nat": {
			"ability": "int",
			"fullKey": "nature",
			"label": "Primal Lore",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#primal-lore`
		},
		"occ": {
			"ability": "int",
			"fullKey": "occult",
			"label": "Occult Lore",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#occult-lore`
		},
		// Exploration
      //luck - passive only
		"prc": {
			"ability": "lck",
			"fullKey": "perception",
			"label": "Perception",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#perception`
		},
      //luck - active checks only
		"inv": {
			"ability": "lck",
			"fullKey": "investigation",
			"label": "Investigation",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#investigation`
		},
		"dng": {
			"ability": "wis",
			"fullKey": "dungeoneering",
			"label": "Dungeoneering",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#dungeoneering`
		},
		"stw": {
			"ability": "wis",
			"fullKey": "streetwise",
			"label": "Streetwise",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#streetwise`
		},
		"sur": {
			"ability": "wis",
			"fullKey": "survival",
			"label": "Survival",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#survival`
		},
		// Social
		"ins": {
			"ability": "wis",
			"fullKey": "insight",
			"label": "Insight",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#insight`
		},
		"dec": {
			"ability": "cha",
			"fullKey": "deception",
			"label": "Deception",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#deception`
		},
		"itm": {
			"ability": "cha",
			"fullKey": "intimidation",
			"label": "Intimidation",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#intimidation`
		},
		"per": {
			"ability": "cha",
			"fullKey": "persuasion",
			"label": "Persuasion",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#persuasion`
		},
      "prf": {
			"ability": "cha",
			"fullKey": "performance",
			"label": "Performance",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#performance`
		},
		// Skullduggery
		"ste": {
			"ability": "dex",
			"fullKey": "stealth",
			"label": "Stealth",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#stealth`
		},
		"slt": {
			"ability": "dex",
			"fullKey": "sleightOfHand",
			"label": "Sleight of Hand",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#sleight-of-hand`
		},
		// Specialty
		"ani": {
			"ability": "cha",
			"fullKey": "animalHandling",
			"label": "Animal Handling",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#animal-handling`
		},
		"med": {
			"ability": "int",
			"fullKey": "medicine",
			"label": "Medicine",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#medicine`
		},
      "bar": {
         "ability": "int",
         "fullKey": "bardic",
         "label": "Bardic Lore",
         "reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#bardic-lore`
      },
		"veh": {
			"ability": "dex",
			"fullKey": "vehicleHandling",
			"label": "Vehicle Handling",
			"reference": `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#vehicle-handling`
		}
	}
}
