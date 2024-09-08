/**
 * All the changes of Elkan 5e in Foundry.
 */
export function weapons(){
    console.log("GG  |  Initializing Weapon Types")
    focusTypes()
	weaponTypes()
    weaponRules()
}

// Overwrite and add new focus types and subtypes
export function focusTypes() {
	CONFIG.DND5E.focusTypes = {
		arcane: {
			label: "Arcane Focus",
			itemIds: {
				crystal: "",
				orb: "",
				rod: "",
				staff: "",
				wand: ""
			}
		},
		divine: {
			label: "Divine Focus",
			itemIds: {
				amulet: "",
				emblem: "",
				reliquary: ""
			}
		},
		primal: {
			label: "Primal Focus",
			itemIds: {
				mistletoe: "",
				totem: "",
				staff: "",
				talisman: ""
			}
		},
		bardic: {
			label: "Bardic Focus",
			itemIds: {
				instrument: ""
			}
		},
		generic: {
			label: "Spellcasting Focus",
			itemIds: {
				weapon: ""
			}
		}
	}
}
/**
 * Changes the weapon properties in Foundry to match Elkan 5e.
 */
export function weaponTypes(){

	CONFIG.DND5E.weaponTypes.focus = "Spell Focus"

	//Weapon Types
	CONFIG.DND5E.weaponIds = {
		//Simple Thrown
		throwingHammer: "Compendium.garhis-grotto-module.gg-item-mundane.Item.xkoDbfKxaBima19o",
		throwingAxe: "Compendium.garhis-grotto-module.gg-item-mundane.Item.esFl00Gh1Bpvt23r",
		throwingKnife: "Compendium.garhis-grotto-module.gg-item-mundane.Item.FDpNm2A0DrC63jiu",
		javelin: "Compendium.garhis-grotto-module.gg-item-mundane.Item.EsPEzrz6AsAiW3rf",
		dart: "Compendium.garhis-grotto-module.gg-item-mundane.Item.nrOWp2MqMcHikhHz",
		//Simple Melee
		dagger: "Compendium.garhis-grotto-module.gg-item-mundane.Item.CpPXEJGRMWjQVYxF",
		cudgel: "Compendium.garhis-grotto-module.gg-item-mundane.Item.0JRBGgcIsjUaF9sO",
		shortsword: "Compendium.garhis-grotto-module.gg-item-mundane.Item.PyZq9STAKMyO7EkT",
		handaxe: "Compendium.garhis-grotto-module.gg-item-mundane.Item.zBULaDO2e5vZfDrC",
		quarterstaff: "Compendium.garhis-grotto-module.gg-item-mundane.Item.ziDrPj7GTYq9Vejv",
		spear: "Compendium.garhis-grotto-module.gg-item-mundane.Item.vZlrJFEVW9g7DUMF",
		greatclub: "Compendium.garhis-grotto-module.gg-item-mundane.Item.FkgK6qymfCGdpcgJ",
		//Martial Melee
		longsword: "Compendium.garhis-grotto-module.gg-item-mundane.Item.l89EzF7XqemcAc6N",
		battleaxe: "Compendium.garhis-grotto-module.gg-item-mundane.Item.udhb7gIfipZmEis7",
		warhammer: "Compendium.garhis-grotto-module.gg-item-mundane.Item.OVtI1ugIOQxk0JY7",
		rapier: "Compendium.garhis-grotto-module.gg-item-mundane.Item.i1BGSbW4IgGyuNhq",
		warspear: "Compendium.garhis-grotto-module.gg-item-mundane.Item.bLJApwEIs12urqDJ",
		greatsword: "Compendium.garhis-grotto-module.gg-item-mundane.Item.mXkcE8nJGwNC9tFR",
		greataxe: "Compendium.garhis-grotto-module.gg-item-mundane.Item.QRL9CuksOCy5dvtN",
		greathammer: "Compendium.garhis-grotto-module.gg-item-mundane.Item.LorERiYHvrCCeL5g",
		glaive: "Compendium.garhis-grotto-module.gg-item-mundane.Item.pLubA5UKQzggNoAS",
		halberd: "Compendium.garhis-grotto-module.gg-item-mundane.Item.bPYAg5fllYPyfntJ",
		polehammer: "Compendium.garhis-grotto-module.gg-item-mundane.Item.X6aYopP08gd1gffx",
		//Simple Ranged
		blowgun: "Compendium.garhis-grotto-module.gg-item-mundane.Item.t6axrTiQaWOP7CJp",
		sling: "Compendium.garhis-grotto-module.gg-item-mundane.Item.ZQi8E0vIfTUkjGvv",
		shortbow: "Compendium.garhis-grotto-module.gg-item-mundane.Item.BVYJFQMxRfiJAvJp",
		lightcrossbow: "Compendium.garhis-grotto-module.gg-item-mundane.Item.MpqSzX39yYO9sey8",
		//Martial Ranged
		longbow: "Compendium.garhis-grotto-module.gg-item-mundane.Item.oIdsZQe9KTdtDhgN",
		heavycrossbow: "Compendium.garhis-grotto-module.gg-item-mundane.Item.vSW11ejlY6Veoi5P",
		handcrossbow: "Compendium.garhis-grotto-module.gg-item-mundane.Item.lTkOi6aEtJr7XSDz",
		//Specialized
		firearm: "Compendium.garhis-grotto-module.gg-item-mundane.Item.j9h6IttFX5G4gAAS",
		whip: "Compendium.garhis-grotto-module.gg-item-mundane.Item.z98fEiwfoX1n4Url",
		lance: "Compendium.garhis-grotto-module.gg-item-mundane.Item.38CftsqajdSPHAF5",
		//Spell Focus
		arcane: "Compendium.garhis-grotto-module.gg-item-mundane.Item.5wXHI7X1xW0JDFx3",
		planar: "Compendium.garhis-grotto-module.gg-item-mundane.Item.fiZ9fkiIRBq5ezsp",
		primal: "Compendium.garhis-grotto-module.gg-item-mundane.Item.9y7PcFzlGKgF75Qu",
		bardic: "Compendium.garhis-grotto-module.gg-item-mundane.Item.KrrSy9xIhaO8PLhC"
	}

	CONFIG.DND5E.weaponProficiencies = {
		mar: "Martial",
		sim: "Simple",
		foc: "Focus",
		spec: "Specialized"
	}

	CONFIG.DND5E.weaponProficienciesMap = {
		martiaM: "mar",
		marialR: "mar",
		simpleM: "sim",
		simpleR: "sim",
		simpleT: "sim",
		focus: "foc",
		special: "spec"
	}

	CONFIG.DND5E.weaponTypes = {
		focus: "Spell Focus",
		improv: "Improvised",
		martialM: "Martial Melee",
		martialR: "Martial Ranged",
		natural: "Natural",
		siege: "Siege Weapon",
		simpleM: "Simple Melee",
		simpleR: "Simple Ranged",
		simpleT: "Simple Thrown",
		special: "Specialized"
	}

	//Adding new weapon Properties
    CONFIG.DND5E.itemProperties.coldIron = {
        label:"Cold Iron",
        isPhysical: "true"
    }

    CONFIG.DND5E.itemProperties.mou = {
        label:"Mounted"
    }

    CONFIG.DND5E.validProperties.weapon.add("coldIron")
    CONFIG.DND5E.validProperties.weapon.add("mou")
    //Removing Weapon Property
    CONFIG.DND5E.validProperties.weapon.delete("spc")
	CONFIG.DND5E.validProperties.weapon.delete("fir")
	CONFIG.DND5E.validProperties.weapon.delete("hvy")
	CONFIG.DND5E.validProperties.weapon.delete("rel")
	CONFIG.DND5E.validProperties.weapon.delete("lod")
}


/**
 * Adds the weapons reference
 */
export function weaponRules(){
    CONFIG.DND5E.rules.adamantine = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.cUHKJTc6BHyI1gfR"
    CONFIG.DND5E.rules.ammunition = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.5RUwcK38cpr1fZLe"
    CONFIG.DND5E.rules.coldw = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.ciqBm30ddE1BsPOg"
    CONFIG.DND5E.rules.finesse = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.QIw9oL7nHuy6A5e3"
    CONFIG.DND5E.rules.heavy = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.K644Km2l7enin6ou"
    CONFIG.DND5E.rules.lightw = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.AHUBfDV0TrMzcTUa"
    CONFIG.DND5E.rules.loading = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.VENz7U1ksd5WtYbK"
    CONFIG.DND5E.rules.magicw = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.ZqkxXr9joWmx5dEx"
    CONFIG.DND5E.rules.mounted = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.NF2lMEQyT4y6dxd0"
    CONFIG.DND5E.rules.reach = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.1xgI5cPXMX8TwBt5"
    CONFIG.DND5E.rules.thrown = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.cJzshBhfAwz9VYv0"
    CONFIG.DND5E.rules.handed = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.R5B5WfIsoxR4E1OZ"
    CONFIG.DND5E.rules.silver = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.3ZyL5VG1OqvBjajQ"
    CONFIG.DND5E.rules.unwieldy = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.sokjqCLGL8GY3O67"
    CONFIG.DND5E.rules.versatile = "Compendium.elkan5e.elkan5e-rules.JournalEntry.nfEDSQG0DMBs7eGp.JournalEntryPage.zrkm2gvW9a0IXpvW"
}
