import { CONSTANTS } from "../lib/constants.js"
/**
 * Update Weapon Types
 */
export function weapons(){
   console.warn("GG - Core | Initializing Weapon Changes")
   CONFIG.DND5E.weaponTypes = {
		improv: "Improvised",
		simpleM: "Simple Melee",
		simpleR: "Simple Ranged",
      martialM: "Martial Melee",
		martialR: "Martial Ranged",
      special: "Specialized",
      natural: "Natural",
		siege: "Siege Weapon"
	}

	CONFIG.DND5E.weaponProficiencies = {
		improv: "Improvised",
		simpleM: "Simple Melee",
      martialM: "Martial Melee",
		simpleR: "Simple Ranged",
		martialR: "Martial Ranged",
		special: "Specialized"
	}
   // weaponType: weaponProficiency
	CONFIG.DND5E.weaponProficienciesMap = {
      improv: "improv",
		simpleM: "simpleM",
		simpleR: "simpleR",
      martialM: "martialM",
		martialR: "martialR",
		special: "special",
      natural: true
	}



   //Weapon Types
	CONFIG.DND5E.weaponIds = {
      // Improvised
      generic: "Compendium.garhis-grotto-core.gg-reference-item.Item.WBfiUYVy9mD2WpzM",
		// Simple Melee
		dagger: "Compendium.garhis-grotto-core.gg-reference-item.Item.CpPXEJGRMWjQVYxF",
		cudgel: "Compendium.garhis-grotto-core.gg-reference-item.Item.0JRBGgcIsjUaF9sO",
		shortsword: "Compendium.garhis-grotto-core.gg-reference-item.Item.PyZq9STAKMyO7EkT",
		handaxe: "Compendium.garhis-grotto-core.gg-reference-item.Item.zBULaDO2e5vZfDrC",
		quarterstaff: "Compendium.garhis-grotto-core.gg-reference-item.Item.ziDrPj7GTYq9Vejv",
		spear: "Compendium.garhis-grotto-core.gg-reference-item.Item.vZlrJFEVW9g7DUMF",
		greatclub: "Compendium.garhis-grotto-core.gg-reference-item.Item.FkgK6qymfCGdpcgJ",
		// Martial Melee
		longsword: "Compendium.garhis-grotto-core.gg-reference-item.Item.l89EzF7XqemcAc6N",
		battleaxe: "Compendium.garhis-grotto-core.gg-reference-item.Item.gTBGCW5Tejje0gyB",
		warhammer: "Compendium.garhis-grotto-core.gg-reference-item.Item.OVtI1ugIOQxk0JY7",
		rapier: "Compendium.garhis-grotto-core.gg-reference-item.Item.i1BGSbW4IgGyuNhq",
		warspear: "Compendium.garhis-grotto-core.gg-reference-item.Item.bLJApwEIs12urqDJ",
      elvenblade: "Compendium.garhis-grotto-core.gg-reference-item.Item.sgnK3v9rm359CRoA",
		greatsword: "Compendium.garhis-grotto-core.gg-reference-item.Item.mXkcE8nJGwNC9tFR",
		greataxe: "Compendium.garhis-grotto-core.gg-reference-item.Item.QRL9CuksOCy5dvtN",
		maul: "Compendium.garhis-grotto-core.gg-reference-item.Item.LorERiYHvrCCeL5g",
		glaive: "Compendium.garhis-grotto-core.gg-reference-item.Item.C1dst4dYCPbBEKtF",
		halberd: "Compendium.garhis-grotto-core.gg-reference-item.Item.bPYAg5fllYPyfntJ",
		polehammer: "Compendium.garhis-grotto-core.gg-reference-item.Item.X6aYopP08gd1gffx",
		// Simple Ranged
		sling: "Compendium.garhis-grotto-core.gg-reference-item.Item.ZQi8E0vIfTUkjGvv",
		shortbow: "Compendium.garhis-grotto-core.gg-reference-item.Item.BVYJFQMxRfiJAvJp",
		lightcrossbow: "Compendium.garhis-grotto-core.gg-reference-item.Item.MpqSzX39yYO9sey8",
		// Martial Ranged
		longbow: "Compendium.garhis-grotto-core.gg-reference-item.Item.oIdsZQe9KTdtDhgN",
		heavycrossbow: "Compendium.garhis-grotto-core.gg-reference-item.Item.vSW11ejlY6Veoi5P",
		// Specialized
		blowgun: "Compendium.garhis-grotto-core.gg-reference-item.Item.t6axrTiQaWOP7CJp",
      firearm: "Compendium.garhis-grotto-core.gg-reference-item.Item.j9h6IttFX5G4gAAS",
      handcrossbow: "Compendium.garhis-grotto-core.gg-reference-item.Item.lTkOi6aEtJr7XSDz",
      flail: "Compendium.garhis-grotto-core.gg-reference-item.Item.xq6r6uxmdbFOgd5Q",
		whip: "Compendium.garhis-grotto-core.gg-reference-item.Item.z98fEiwfoX1n4Url",
		lance: "Compendium.garhis-grotto-core.gg-reference-item.Item.38CftsqajdSPHAF5",
      net: "Compendium.garhis-grotto-core.gg-reference-item.Item.R40uLkfgVxsvr4Kd",
		thrown: "Compendium.garhis-grotto-core.gg-reference-item.Item.FDpNm2A0DrC63jiu"
	}
}
