export function consumables() {
	CONFIG.DND5E.ammoIds = {
		arrow: "",
		bolt: "",
		needle: "",
		sling: "",
		siege: "",
		improvised: ""
	}

	// CONFIG.DND5E.spellScrollIds = {
	// 	"0": "rQ6sO7HDWzqMhSI3",
	// 	"1": "9GSfMg0VOA2b4uFN",
	// 	"2": "XdDp6CKh9qEvPTuS",
	// 	"3": "hqVKZie7x9w3Kqds",
	// 	"4": "DM7hzgL836ZyUFB1",
	// 	"5": "wa1VF8TXHmkrrR35",
	// 	"6": "tI3rWx4bxefNCexS",
	// 	"7": "mtyw4NS1s7j2EJaD",
	// 	"8": "aOrinPg7yuDZEuWr",
	// 	"9": "O4YbkJkLlnsgUszZ"
	// }

	CONFIG.DND5E.consumableTypes = {
		ammo: {
			label: "Ammunition",
			subtypes: {
				arrow: "Arrow",
				bolt: "Crossbow Bolt",
				needle: "Blowgun Needle",
				sling: "Sling Bullet",
				siege: "Siege Ammunition",
				improvised: "Improvised Ammunition",
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
				herbs: "Herbal Remedy"
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
		substance: {
			label: "Substance",
			subtypes: {
				herb: "Raw Herb",
				dust: "Dust & Powder",
				drug: "Drug",
				candy: "Candy",
				food: "Food",
				drink: "Drink",
				wine: "Wine",
				alcohol: "Alcohol"
			}
		},
		sundry: {
			label: "Sundry"
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
