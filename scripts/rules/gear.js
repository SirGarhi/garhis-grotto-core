export function gear() {
	CONFIG.GARHI ||= {}
	CONFIG.GARHI.Gear = {
		gear: {
			label: "Adventuring Gear",
			reference: ""
		},
		tool: {
			label: "Basic Tool"
		},
		spell: {
			label: "Spell Component"
		},
		crafting: {
			label: "Crafting Items",
			children: {
				component: {
					label: "Crafting Component"
				},
				material: {
					label: "Crafting Material"
				},
				resource: {
					label: "Crafting Resource"
				}
			//Tools?
			}
		},
		art: {
			label: "Art Object"
		},
		gem: {
			label: "Gemstone"
		},
		treasure: {
			label: "Treasure"
		},
		trinket: {
			label: "Trinket"
		},
		junk: {
			label: "Junk"
		}
	}
}
