import { CONSTANTS } from "../lib/constants.js"

export function consumables() {
	CONFIG.DND5E.ammoIds = {
		arrow: "Compendium.garhis-grotto-core.gg-reference-item.Item.Nrm0FALEMmDYZbhT",
		bolt: "Compendium.garhis-grotto-core.gg-reference-item.Item.ogsr9ZsWNeK3nrGi",
		needle: "Compendium.garhis-grotto-core.gg-reference-item.Item.uuwfZLjYBeXki4Fy",
		sling: "Compendium.garhis-grotto-core.gg-reference-item.Item.MRv7lQ7K5AsqBh0C",
		siege: "Compendium.garhis-grotto-core.gg-reference-item.Item.8fESb3kQLMgEz7YI",
		improvised: "Compendium.garhis-grotto-core.gg-reference-item.Item.flNjs0fTXCnVFkYs",
      bullet: "Compendium.garhis-grotto-core.gg-reference-item.Item.awT2FHs3f80n6pUX",
      arcane: "Compendium.garhis-grotto-core.gg-reference-item.Item.V7vyjB6Y14EM5olY"
	}

	CONFIG.DND5E.spellScrollIds = {
		"0": "Compendium.garhis-grotto-core.gg-reference-item.Item.zEHwa9r1juEHTaCz",
		"1": "Compendium.garhis-grotto-core.gg-reference-item.Item.2yjOlPbb92OcosVI",
		"2": "Compendium.garhis-grotto-core.gg-reference-item.Item.fGi6B3sCoa62IEHl",
		"3": "Compendium.garhis-grotto-core.gg-reference-item.Item.a6Metx3bmVu2Jd89",
		"4": "Compendium.garhis-grotto-core.gg-reference-item.Item.9I6mBwBU5umRCTrU",
		"5": "Compendium.garhis-grotto-core.gg-reference-item.Item.uEUuSXlTR3qa6ISh",
		"6": "Compendium.garhis-grotto-core.gg-reference-item.Item.w3kMxYAVrBruvsto",
		"7": "Compendium.garhis-grotto-core.gg-reference-item.Item.9QkRngcGsLhqQ2sv",
		"8": "Compendium.garhis-grotto-core.gg-reference-item.Item.WU4IwcX0JJXEt20T",
		"9": "Compendium.garhis-grotto-core.gg-reference-item.Item.q45nxYRAspcB8oHy"
	}

	CONFIG.DND5E.consumableTypes = {
		ammo: {
			label: "Ammunition",
			subtypes: {
				arrow: "Bow",
				bolt: "Crossbow",
				needle: "Blowgun",
				sling: "Sling",
				siege: "Siege",
				improvised: "Improvised",
            bullet: "Firearm",
				arcane: "Magical"
			}
		},
		healing: {
			label: "Healing",
			subtypes: {
				minor: "Minor Potion",
				greater: "Greater Potion",
				superior: "Superior Potion",
				supreme: "Supreme Potion",
				poultice: "Poultice",
				ointment: "Ointment",
				herbs: "Herbal Remedy",
            kit: "Healer's Kit"
			}
		},
		potion: {
			label: "Potion",
			subtypes: {
				elixir: "Elixir",
				potion: "Tonic",
				serum: "Serum"
			}
		},
		poison: {
			label: "Poison",
			subtypes: {
				contact: "Contact",
				ingested: "Ingested",
				inhaled: "Inhaled",
				injury: "Injury"
			}
		},
		oil: {
			label: "Weapon Oil",
			subtypes: {
				impact: "Impact",
				lingering: "Lingering"
			}
		},
		bomb: {
			label: "Cannister Bomb",
			subtypes: {
				shrapnel: "Shrapnel",
				gas: "Gas",
				substance: "Substance"
			}
		},
		sundry: {
			label: "Sundry",
         subtypes: {
            food: "Food",
            drink: "Drink",
            booze: "Alcohol",
            candy: "Candy",
            wine: "Wine",
            substance: {
               label: "Illicit",
               subtypes: {
                  herb: "Raw Herb",
                  dust: "Dust & Powder",
                  drug: "Drug"
               }
            }
         }
		},
		scroll: {
			label: "Magic Spell",
			subtypes: {
				arcane: "Arcane",
				divine: "Divine",
				primal: "Primal"
			}
		},
		component: {
			label: "Spell Component"
		}
	}
}
