/**
 * Changes Foundry's armor tpypes to that of Garhi's Grotto Homebrew.
 */
export function equipment(){
    //const armor = game.settings.get("garhis-grotto", "armor");
    console.log("GG |  Initializing Equipment Types")
	CONFIG.DND5E.equipmentTypes = {
		armor: "Armor",
		clothing: "Clothing",
		shield: "Shield",
		worn: "Worn Accessory",
		creature: "Creature Equipment",
		vehicle: "Vehicle Part"
	}
    //Delete List
    CONFIG.DND5E.armorTypes = {
		light: "Light Armor",
		medium: "Medium Armor",
		heavy: "Heavy Armor",
		shield: "Shield"
	}
	//Overwrite and update id list
	CONFIG.DND5E.armorIds = {
		padded: "Compendium.garhis-grotto-module.gg-item-mundane.Item.ppEhdKSXccTTST4G",
		quilted: "Compendium.garhis-grotto-module.gg-item-mundane.Item.xfhECKHcIy3DCn8B",
		leather: "Compendium.garhis-grotto-module.gg-item-mundane.Item.0mrmrxZN9TnvWL4E",
		mailshirt: "Compendium.garhis-grotto-module.gg-item-mundane.Item.mZJgJDcc6Sv2Akor",
		scalemail: "Compendium.garhis-grotto-module.gg-item-mundane.Item.jYI6rxeQcwBgdX5i",
		brigandine: "Compendium.garhis-grotto-module.gg-item-mundane.Item.yKFLH2TQnAGFFrw0",
		hauberk: "Compendium.garhis-grotto-module.gg-item-mundane.Item.jNFcHKlqODioxjeW",
		halfPlate: "Compendium.garhis-grotto-module.gg-item-mundane.Item.BgZnG3UOhTG76BwO",
		plate: "Compendium.garhis-grotto-module.gg-item-mundane.Item.8p2Z1oruUht3V27i"
		// basic: "Compendium.garhis-grotto-module.gg-item-mundane.Item.SmEno6FSj2GGBNm2",
		// traveling: "Compendium.garhis-grotto-module.gg-item-mundane.Item.TQLHL446mSurXSIA",
		// adventuring: "Compendium.garhis-grotto-module.gg-item-mundane.Item.7bgnnt9Nvt7MwNig",
		// costume: "Compendium.garhis-grotto-module.gg-item-mundane.Item.s82Xn9H6HCicnz0Q",
		// feastday: "Compendium.garhis-grotto-module.gg-item-mundane.Item.PBCAL0yYRZCfrIxQ",
		// robe: "Compendium.garhis-grotto-module.gg-item-mundane.Item.ensXG4qIBxTTNzFa",
		// vestment: "Compendium.garhis-grotto-module.gg-item-mundane.Item.i4rEDmwsKwHdGoVR"
	}

    //Add List
    CONFIG.DND5E.shieldIds = {
		buckler: "Compendium.garhis-grotto-module.gg-item-mundane.Item.0YakA4vfEuTlAOiW",
		shield: "Compendium.garhis-grotto-module.gg-item-mundane.Item.lJYK6SL7yuEmil7Z",
		tower: "Compendium.garhis-grotto-module.gg-item-mundane.Item.4978tIFQvQDwVkwu",
	}

	CONFIG.DND5E.clothingIds = {
		basic: "Compendium.garhis-grotto-module.gg-item-mundane.Item.SmEno6FSj2GGBNm2",
		traveling: "Compendium.garhis-grotto-module.gg-item-mundane.Item.TQLHL446mSurXSIA",
		adventuring: "Compendium.garhis-grotto-module.gg-item-mundane.Item.7bgnnt9Nvt7MwNig",
		costume: "Compendium.garhis-grotto-module.gg-item-mundane.Item.s82Xn9H6HCicnz0Q",
		feastday: "Compendium.garhis-grotto-module.gg-item-mundane.Item.PBCAL0yYRZCfrIxQ",
		robe: "Compendium.garhis-grotto-module.gg-item-mundane.Item.ensXG4qIBxTTNzFa",
		vestment: "Compendium.garhis-grotto-module.gg-item-mundane.Item.i4rEDmwsKwHdGoVR"
	}

	delete CONFIG.DND5E.armorClasses.mage
    CONFIG.DND5E.armorClasses.draconic.formula = "14 + @abilities.dex.mod"

    CONFIG.DND5E.itemProperties.mithril = {
        label:"Mithril"
    };

    CONFIG.DND5E.validProperties.equipment.add("mithril")

    //Removing Weapon Property
    CONFIG.DND5E.validProperties.equipment.delete("concentration")

	CONFIG.DND5E.lootTypes = {
		gear: {
			label: "Adventuring Gear"
		},
		spell: {
			label: "Spell Component"
		},
		component: {
			label: "Crafting Component"
		},
		material: {
			label: "Crafting Material"
		},
		resource: {
			label: "Crafting Resource"
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

    CONFIG.DND5E.itemProperties.ornate = {
        label:"Ornate"
    }
	CONFIG.DND5E.itemProperties.fine = {
        label:"Finely Crafted"
    }

    CONFIG.DND5E.validProperties.loot.add("ornate")
	CONFIG.DND5E.validProperties.loot.add("fine")

}
