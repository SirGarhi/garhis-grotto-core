/**
 * Changes Foundry's tools to fit that of Elkan 5e. This is the only
 * one that we had to do a full replacement
 * Carpentry+Masonry = Engineering
 */
export function tools(){
	//const tool = game.settings.get("garhis-grotto", "tools");
	console.log("GG  |  Initializing Tools")

	CONFIG.DND5E.itemProperties.masterwork = {
        label:"Masterwork"
    }

	CONFIG.DND5E.validProperties.tool.add("masterwork")
	CONFIG.DND5E.validProperties.equipment.add("masterwork")
	CONFIG.DND5E.validProperties.weapon.add("masterwork")

    //Removing Weapon Property
    CONFIG.DND5E.validProperties.equipment.delete("concentration")

	//Adding Tool Types
	CONFIG.DND5E.toolTypes = {
		artistic: "Artistic Tools",
		industrious: "Industrious Tools",
		explore: "Exploration Tools",
		game: "Gameing Sets",
		music: "Musical Instruments",
		magic: "Magical Implements",
		sneak: "Tools of the Trade"
	}
	CONFIG.DND5E.toolProficiencies = {
		artistic: "Artistic Tools",
		industrious: "Industrious Tools",
		explore: "Exploration Tools",
		game: "Gameing Sets",
		music: "Musical Instruments",
		magic: "Magical Implements",
		sneak: "Tools of the Trade"
	}
	CONFIG.DND5E.toolIds = {
		//Other Artiist's Tools
		painter: "",
		potter: "",
		calligrapher: "",

		//Industrious Supplies
		smith: "",
		woodcarver: "",
		tailor: "",
		leatherworker: "",
		mason: "",
		jeweler: "",
		tinker: "",
		brewer: "",

		//Exploration Tools
		cartographer: "",
		navgigation: "",
		cook: "",
		herbalism: "",
		butchering: "",

		//Gaming Tools
		card: "",
		chess: "",
		dice: "",

		//Instruments
		wind: "",
		string: "",
		reed: "",
		drum: "",
		//Magical
		runes: "",
		alchemy: "",
		scribing: "",
		enchanting: "",

		//Sneak
		pois: "",
		forg: "",
		disg: "",
		thief: "",
	}
}
