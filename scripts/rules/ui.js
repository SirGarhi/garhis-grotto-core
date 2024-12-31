export function ui(){
   ruleUpdates()
   activation()
   currency()
   misc()
   sheets()
}


/*
 * Adds different rule types to Foundry
 */
export function ruleUpdates(){
	delete CONFIG.DND5E.distanceUnits.km
	delete CONFIG.DND5E.distanceUnits.m
	delete CONFIG.DND5E.movementUnits.km
	delete CONFIG.DND5E.movementUnits.m
	delete CONFIG.DND5E.weightUnits.Mg
	delete CONFIG.DND5E.weightUnits.kg
	CONFIG.DND5E.containerTypes = {
		backpack: "Backpack",
		sack: "Sack",
		pouch: "Small Pouch",
		purse: "Coin Purse",
		holding: "Bag of Holding",
		haversack: "Handy Haversack",
		hole: "Portable Hole",
		chest: "Chest",
		ammo: "Ammunition",
		saddlebag: "Saddlebag"
	}
	delete CONFIG.Item.sheetClasses.backpack

	CONFIG.DND5E.itemRarity.mundane = "Mundane"
   CONFIG.DND5E.encumbrance.effects.heavilyEncumbered.name = "Over Burdened"

   // Re-tool limited use periods
   CONFIG.DND5E.limitedUseFormulaPeriods = {
      charges: "DND5E.Charges"
   }
   CONFIG.DND5E.limitedUsePeriods = {
      charges: { "label": "Charges", "abbreviation": "Charges", "formula": true },
      lr: { "label": "Long Rest", "abbreviation": "LR"},
      sr: { "label": "Short Rest", "abbreviation": "SR"}
   }

   // Rework Proficiency Levels
   CONFIG.DND5E.proficiencyLevels = {
		0: "Clueless",
		0.5: "Dabbler",
		1: "Proficient",
		2: "Trained",
		3: "Expert"
	}

	CONFIG.DND5E.traitModes = {
      default: {
         hint: "Increase proficiency by one step",
         label: "Proficient"
      },
      training: {
         hint: "Set a proficiency to trained",
         label: "Trained"
      },
      expert: {
         hint: "Set a proficiency to expert",
         label: "Expert"
      }
	}
   // Add Speed Types
   CONFIG.DND5E.movementTypes.crawl = "Crawl"
   CONFIG.DND5E.movementTypes.longJump = "Long Jump"
   CONFIG.DND5E.movementTypes.highJump = "High Jump"
}

/*
 * Adds new activation types that are used in Elkan 5e
 */
export function activation(){
    CONFIG.DND5E.abilityActivationTypes.duringattack = "As Part of a Weapon Attack"
    CONFIG.DND5E.abilityActivationTypes.shortrest = "During a Short Rest"
    CONFIG.DND5E.abilityActivationTypes.longrest = "During a Long Rest"
    CONFIG.DND5E.abilityActivationTypes.nocost = "No Action Cost"
    CONFIG.DND5E.staticAbilityActivationTypes.duringattack = "As Part of a Weapon Attack"
    CONFIG.DND5E.staticAbilityActivationTypes.shortrest = "During a Short Rest"
    CONFIG.DND5E.staticAbilityActivationTypes.longrest = "During a Long Rest"
    CONFIG.DND5E.staticAbilityActivationTypes.nocost = "No Action Cost"
}

export function currency() {
	CONFIG.DND5E.currencies = {
		// ac: {
		// 	abbreviation: 'ac',
		// 	conversion: 0,
		// 	label: 'Ancient'
		// },
		cp: {
			abbreviation: 'cp',
			conversion: 10,
			label: 'Copper'
		},
		sp: {
			abbreviation: 'sp',
			conversion: 1,
			label: 'Silver'
		},
		gp: {
			abbreviation: 'gp',
			conversion: 0.1,
			label: 'Gold'
		},
		pp: {
			abbreviation: 'pp',
			conversion: 0.01,
			label: 'Platinum'
		}
	}
}

export function misc() {
	CONFIG.DND5E.actorSizes = {
		tit: {
			"abbreviation": "Tit",
			"capacityMultiplier": 8,
			"hitDie": 20,
			"dynamicTokenScale": null,
			"label": "Titan",
			"token": 12
		},
		col: {
			"abbreviation": "Col",
			"capacityMultiplier": 8,
			"hitDie": 20,
			"dynamicTokenScale": null,
			"label": "Colossol",
			"token": 8
		},
		grg: {
			"abbreviation": "Grg",
			"capacityMultiplier": 8,
			"hitDie": 12,
			"dynamicTokenScale": null,
			"label": "Gargantuan",
			"token": 5
		},
		huge: {
			"abbreviation": "Hg",
			"capacityMultiplier": 4,
			"hitDie": 12,
			"dynamicTokenScale": null,
			"label": "Huge",
			"token": 3
		},
		lg: {
			"abbreviation": "Big",
			"capacityMultiplier": 2,
			"hitDie": 10,
			"dynamicTokenScale": null,
			"label": "Big",
			"token": 2
		},
		med: {
			"abbreviation": "Avg",
			"capacityMultiplier": null,
			"hitDie": 8,
			"dynamicTokenScale": null,
			"label": "Average",
			"token": 1
		},
		sm: {
			"abbreviation": "Sm",
			"capacityMultiplier": null,
			"hitDie": 6,
			"dynamicTokenScale": 0.8,
			"label": "Small",
			"token": 1
		},
		tiny: {
			"abbreviation": "Tn",
			"capacityMultiplier": 0.5,
			"hitDie": 4,
			"dynamicTokenScale": null,
			"label": "Tiny",
			"token": 0.5
		}
	}
}

export function sheets(){
   CONFIG.DND5E.sourcePacks.BACKGROUNDS = "garhis-grotto-core.gg-background"
   CONFIG.DND5E.sourcePacks.CLASSES = "garhis-grotto-core.gg-class"
   CONFIG.DND5E.sourcePacks.RACES = "garhis-grotto-core.gg-ancestry"
   CONFIG.DND5E.sourcePacks.ITEMS = "garhis-grotto-core.gg-basic"
	CONFIG.DND5E.themes.garhi = "Garhi's Grotto"
	// CONFIG.DND5E.tokenHPColors = {
	// 	"damage": 16711680,
	// 	"healing": 65280,
	// 	"temp": 6737151,
	// 	"tempmax": 4456550,
	// 	"negmax": 5570560
	// }
    // Below breaks everything
    // CONFIG.DND5E.sourcePacks.ITEMS = "elkan5e.elkan5e-mundane-items"
}
