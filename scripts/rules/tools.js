/**
 * Changes Foundry's tools to fit that of Elkan 5e. This is the only
 * one that we had to do a full replacement
 * Carpentry+Masonry = Engineering
 */
import { CONSTANTS } from "../lib/constants.js"
export function tools(){
	//const tool = game.settings.get("garhis-grotto", "tools");
	console.log("GG - Core | Initializing Tools")

	//Adding Tool Types
	CONFIG.DND5E.toolTypes = {
		artistic: "Artistic",
      instrument: "Instrument",
		industrious: "Industrious",
		exploration: "Exploration",
		illicit: "Illicit"
	}
	CONFIG.DND5E.toolProficiencies = {
		artistic: "Artistic Tools",
      instrument: "Musical Instruments",
		industrious: "Industrious Tools",
		exploration: "Exploration Tools",
		illicit: "Tools of the Trade"
	}
	CONFIG.DND5E.toolIds = {
		// Artistic
      calligrapher: "Compendium.garhis-grotto-core.gg-reference-item.Item.Ok4RnynRtma0H7op",
      carving: "Compendium.garhis-grotto-core.gg-reference-item.Item.xeQjROnZXvLBdn5P",
      painting: "Compendium.garhis-grotto-core.gg-reference-item.Item.04WmusTA1x0pnhzE",
      sculpting: "Compendium.garhis-grotto-core.gg-reference-item.Item.dMOkFRZjHT7MDztR",

      // Instruments
		wind: "Compendium.garhis-grotto-core.gg-reference-item.Item.LMsNj1xShSjids0D",
		string: "Compendium.garhis-grotto-core.gg-reference-item.Item.Sa3iVgeRDR571DUS",
		reed: "Compendium.garhis-grotto-core.gg-reference-item.Item.j2qxY3tgzWbZDeoQ",
		drum: "Compendium.garhis-grotto-core.gg-reference-item.Item.Qj7j9f0FcIKBk8tq",

		// Industrious
		smith: "Compendium.garhis-grotto-core.gg-reference-item.Item.JKQfgRGnf1cRbwGP",
		builder: "Compendium.garhis-grotto-core.gg-reference-item.Item.55gG0S6n5f0tsMNa",
		stitcher: "Compendium.garhis-grotto-core.gg-reference-item.Item.bdSJX0T16DYBq4i9",
		tinker: "Compendium.garhis-grotto-core.gg-reference-item.Item.bUlX8rP5scfkKB7V",

      // Consumable
      alchemy: "Compendium.garhis-grotto-core.gg-reference-item.Item.rNOg8UHiCV52ZINB",
		brewer: "Compendium.garhis-grotto-core.gg-reference-item.Item.SPw4mJ4H8oF1uoDL",
		cook: "Compendium.garhis-grotto-core.gg-reference-item.Item.qdlrLxfZxIKH1Iwk",

		// Exploration
		cartographer: "Compendium.garhis-grotto-core.gg-reference-item.Item.yfdLSw9JjVkjKetY",
		herbalism: "Compendium.garhis-grotto-core.gg-reference-item.Item.TC3tnEzGrrLoIusn",
		butchering: "Compendium.garhis-grotto-core.gg-reference-item.Item.nTzx6meHF4zqrp5f",

		// Illicit
		disg: "Compendium.garhis-grotto-core.gg-reference-item.Item.YDRZ7cP6rR9NCSaf",
		forg: "Compendium.garhis-grotto-core.gg-reference-item.Item.dFa31G5pfZ3FGcjk",
      thief: "Compendium.garhis-grotto-core.gg-reference-item.Item.NyNivugqNxM9ItgQ",
      pois: "Compendium.garhis-grotto-core.gg-reference-item.Item.SxD6bf7EhJHlnZDk",
		   // Gambling
		card: "Compendium.garhis-grotto-core.gg-reference-item.Item.wreeUSYgtwKxgBne",
		dice: "Compendium.garhis-grotto-core.gg-reference-item.Item.tKRoogCWT0cw8WKG"
	}
}
