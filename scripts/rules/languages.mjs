
/**
 * Changes Foundry's languages to fit that of Elkan 5e.
 */
export function language(){
	console.log("GG  |  Initializing Languages")

	//Replace Languages
	CONFIG.DND5E.languages = {
		standard: {
			label: "Trade Languages",
			children: {
				common: "Common",
				goblin: "Goblin",
				gestural: "Gestural"
			}
		},
		prevalent: {
			label: "Prevalent Languages",
			children: {
				elvish: "Elvish",
				dwarvish: "Dwarvish",
				halfling: "Halfling"
			}
		},
		uncommon: {
			label: "Uncommon Languages",
			children: {
				gnomish: "Gnomish",
				orc: "Orc",
				giant: "Giant",
				undercommon: "Undercommon",
				beastial: {
					label: "Beastial",
					children: {
						gnoll: "Gnoll",
						bird: "Bird",
						cat: "Cat"
					}
				}
			}
		},
		rare: {
			label: "Rare Languages",
			children: {
				draconic: "Draconic",
				gith: "Gith",
				cant: "Thieves' Cant",
				omniglot: "Omniglot"
			}
		},
		planar: {
			label: "Planar Languages",
			children: {
				celestial:"Celestial",
				infernal:"Infernal",
				sylvan: "Sylvan",
				deep: "Deep Speech",
				abyssal:"Abyssal",
				binary: "Binary",
				primordial: {
					label: "Primordial",
					children: {
						aquan: "Aquan",
						auran: "Auran",
						ignan: "Ignan",
						terran: "Terran"
					}
				}
			}
		},
		magical: {
			label: "Magical",
			children: {
				comprehend: "Comprehend Languages",
				druidic: "Druidic",
				tongues: "Tongues"
			}
		}
	}
}
