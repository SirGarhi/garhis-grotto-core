
/**
 * Changes Foundry's languages to fit that of Elkan 5e.
 */
export function language(){
	console.log("GG  |  Initializing Languages")

	//Deleting Languages
	delete CONFIG.DND5E.languages.standard.children.giant
	delete CONFIG.DND5E.languages.standard.children.gnomish 
	delete CONFIG.DND5E.languages.standard.children.orc
	delete CONFIG.DND5E.languages.exotic
	delete CONFIG.DND5E.languages.druidic;
	delete CONFIG.DND5E.languages.cant;

	//Adding Languages
	CONFIG.DND5E.languages.standard.children.under = "Undercommon"
	CONFIG.DND5E.languages.standard.children.sign = "Hand Gestures"

	CONFIG.DND5E.languages.rare = {
		label: "Rare Languages",
		children: {
			draconic:"Draconic",
			giant:"Giant",
			gnomish:"Gnomish",
			orc:"Orc",
			gith:"Gith",
			cant:"Thieves' Cant"
		}
	}

	CONFIG.DND5E.languages.magic = {
		label: "Magical Languages",
		children: {
			outerplanes:{
				label: "Outer Planes",
				children: {
					abyssal:"Abyssal",
					celestial:"Celestial",
					infernal:"Infernal",
				}
			},

			deep:"Deep Speech",
			druidic:"Druidic",
			sylvan: "Sylvan",
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
	}

	CONFIG.DND5E.languages.animalistic = {
		label: "Animalistic Languages",
		children: {
			aarakocra:"Aarakocra",
			gnoll:"Gnoll"
		}
	}
}