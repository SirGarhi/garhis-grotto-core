export function equipment(){
	//const armor = game.settings.get("garhis-grotto", "armor");
	console.log("GG - Core | Equipment... Initializing")

	Hooks.once("ready", () => {
		console.log("GG - Core | Equipment... Defining Equipment Slots")
		CONFIG.GARHI ||= {};
		console.log(CONFIG.GARHI);
		CONFIG.GARHI.Equipment = {
			"head": {
				label: "Head",
				types: {
					hat: {
						label: "Hat",
						prof: true
					},
					helmet: {
						label: "Helmet",
						prof: "hvy"
					},
					circlet: {
						label: "Circlet",
						prof: true
					},
					hood: {
						label: "Hood",
						prof: true
					}
				}
			},
			"face": {
				label: "face",
				types: {
					mask: {
						label: "Mask",
						prof: true
					},
					lenses: {
						label: "Lenses",
						prof: true
					},
					goggles: {
						label: "Goggles",
						prof: true
					},
					eyepatch: {
						label: "Eyepatch",
						prof: true
					}
				}
			},
			"shoulder": {
				label: "Shoulder",
				types: {
					shoulderpads: {
						label: "Shoulderpads",
						prof: "med"
					},
					mantle: {
						label: "Mantle",
						prof: true
					}
				}
			},
			"back": {
				label: "Back",
				types: {
					cloak: {
						label: "Cloak",
						prof: true
					},
					cape: {
						label: "Cape",
						prof: true
					}
				}
			},
			"wrist": {
				label: "Wrist",
				types: {
					bracers: {
						label: "Bracers",
						prof: "lgt"
					},
					bracelet: {
						label: "Bracelet",
						prof: true
					}
				}
			},
			"hand": {
				label: "Hand",
				types: {
					gloves: {
						label: "Gloves",
						prof: true
					},
					gauntlets: {
						label: "Gauntlets",
						prof: "med"
					}
				}
			},
			"waist": {
				label: "Waist",
				types: {
					belt: {
						label: "Belt",
						prof: true
					}
				}
			},
			"leg": {
				label: "Leg",
				types: {
					legplates: {
						label: "Legplates",
						prof: "hvy"
					},
					pants: {
						label: "Pants",
						prof: true
					}
				}
			},
			"foot": {
				label: "Foot",
				types: {
					boots: {
						label: "Boots",
						prof: true
					},
					shoes: {
						label: "Shoes",
						prof: true
					},
					slippers: {
						label: "Slippers",
						prof: true
					}
				}
			},
			"neck": {
				label: "Neck",
				types: {
					necklace: {
						label: "Necklace",
						prof: true
					},
					pendant: {
						label: "Pendant",
						prof: true
					},
					scarf: {
						label: "Scarf",
						prof: true
					}
				}
			},
			"finger": {
				label: "Finger",
				types: {
					ring: {
						label: "Ring",
						prof: true
					}
				}
			},
			"bauble": {
				label: "Bits & Bobs",
				types: {
					bauble: {
						label: "Bauble",
						prof: true
					},
					trinket: {
						label: "Trinket",
						prof: true
					},
					gizmo: {
						label: "Gizmo",
						prof: true
					}
				}
			}
		};

		//set Base Equipment types
		console.log("GG - Core | Equipment... Setting Base Armor Types");
		CONFIG.DND5E.armorIds = {
			// Light
			padded: "Compendium.garhis-grotto-core.gg-reference-item.Item.572wwPNIpN0mk7YB",
			leather: "Compendium.garhis-grotto-core.gg-reference-item.Item.fklEnu37c4fkSINa",
			// Medium
			hide: "Compendium.garhis-grotto-core.gg-reference-item.Item.JH0XWd3qgKC7NJiw",
			lamellar: "Compendium.garhis-grotto-core.gg-reference-item.Item.QZgwh3hK8Qd2W0sl",
			scale: "Compendium.garhis-grotto-core.gg-reference-item.Item.humS9EdnyiMCgJRI",
			brigandine: "Compendium.garhis-grotto-core.gg-reference-item.Item.vEb80v7VOXTy6Fqd",
			// Heavy
			banded: "Compendium.garhis-grotto-core.gg-reference-item.Item.wdIoHaPGt2uvP1HW",
			cuirass: "Compendium.garhis-grotto-core.gg-reference-item.Item.HtdmqWwamUqD8CAA",
			halfplate: "Compendium.garhis-grotto-core.gg-reference-item.Item.MBuvwPLCXLmUIW9H",
			plate: "Compendium.garhis-grotto-core.gg-reference-item.Item.8nvP6LMN1dCQ5A5U"
			// Clothing
			// basic: "Compendium.garhis-grotto-core.gg-reference-item.Item.kEFomzgrrbR4dBue",
			// costume: "Compendium.garhis-grotto-core.gg-reference-item.Item.s82Xn9H6HCicnz0Q",
			// robe: "Compendium.garhis-grotto-core.gg-reference-item.Item.ensXG4qIBxTTNzFa",
			// vestment: "Compendium.garhis-grotto-core.gg-reference-item.Item.i4rEDmwsKwHdGoVR",
			//Accessories
			//   waist: "Compendium.garhis-grotto-core.gg-reference-item.Item.C65EACZmcJmmSN3R",
			//   face: "Compendium.garhis-grotto-core.gg-reference-item.Item.6W5ZT81q2zfXLJtk",
			//   feet: "Compendium.garhis-grotto-core.gg-reference-item.Item.5kaBbVBQUknT5x4v",
			//   hands: "Compendium.garhis-grotto-core.gg-reference-item.Item.7i5jquqkyCFE6c5t",
			//   head: "Compendium.garhis-grotto-core.gg-reference-item.Item.Uk2qebAy5cZeCxf7",
			//   neck: "Compendium.garhis-grotto-core.gg-reference-item.Item.HuEcgGB0mTbCOZsM",
			//   finger: "Compendium.garhis-grotto-core.gg-reference-item.Item.dmTyeRkZbayxlbKU",
			//   back: "Compendium.garhis-grotto-core.gg-reference-item.Item.5skVYp3Y974Xx7qU",
			//   wrist: "Compendium.garhis-grotto-core.gg-reference-item.Item.Hs8uKEc1lf6ljZ7w",
			// Spell Focus
			//   arcane: "Compendium.garhis-grotto-core.gg-reference-item.Item.uDQs9CqWo6opLaHW",
			//   bardic: "Compendium.garhis-grotto-core.gg-reference-item.Item.ZUO4aRm6QiSYtx0p",
			//   primal: "Compendium.garhis-grotto-core.gg-reference-item.Item.8SRlRSPpbOGPluwJ",
			//   occult: "Compendium.garhis-grotto-core.gg-reference-item.Item.dtbCO3vjfR9on0T7"
		};

		// Set Shield IDs
		console.log("GG - Core | Equipment... Setting Base Shield Types");
		CONFIG.DND5E.shieldIds = {
			buckler: "Compendium.garhis-grotto-core.gg-reference-item.Item.54OXVQRUEf5WqQ4B",
			round: "Compendium.garhis-grotto-core.gg-reference-item.Item.oa7mv3jCWpgCwWGv",
			infantry: "Compendium.garhis-grotto-core.gg-reference-item.Item.JyI3IExFBjttM4WP",
			heater: "Compendium.garhis-grotto-core.gg-reference-item.Item.a6Kw2M1HkADjIGC8",
			kite: "Compendium.garhis-grotto-core.gg-reference-item.Item.k0DbZ4pbR73wSXF1",
			tower: "Compendium.garhis-grotto-core.gg-reference-item.Item.hrGK6q5jJukrj6RD"
		};

		// Remove some default Armor Calculations
		console.log("GG - Core | Equipment... Removing select AC Calculations");
		delete CONFIG.DND5E.armorClasses.mage;
		delete CONFIG.DND5E.armorClasses.unarmoredBarb;
		delete CONFIG.DND5E.armorClasses.unarmoredMonk;
		delete CONFIG.DND5E.armorClasses.draconic
		console.log("GG - Core | Equipment... Setting Slot Proficiencies");
		for (let [ id, slot ] of Object.entries(CONFIG.GARHI.Equipment)) {
			for (let [ id, type ] of Object.entries(slot.types)) {
				CONFIG.DND5E.equipmentTypes[ id ] = type.label;
				CONFIG.DND5E.armorProficienciesMap[ id ] = type.prof;
			}
		}
		console.log(CONFIG.GARHI);
		console.log("GG - Core | Equipment... Hooking TidySheet");
		// Set TidySheet to render the slots
		Hooks.once('tidy5e-sheet.ready', (api) => {
			console.log("GG - Core | Equipment... Updating TidySheet");
			for (let [ id, slot ] of Object.entries(CONFIG.GARHI.Equipment)) {
				let group = {
					label: slot.label, types: {}
				};
				for (let [ id, type ] of Object.entries(slot.types)) {
					group.types[ id ] = type.label;
				}
				console.log(group);
				api.config.item.registerCustomEquipmentTypeGroup(group);
			}
		});
	});


}
