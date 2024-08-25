/**
 * Changes Foundry's tools to fit that of Elkan 5e. This is the only 
 * one that we had to do a full replacement
 */
export function tools(){
	//const tool = game.settings.get("garhis-grotto", "tools");
	console.log("GG  |  Initializing Tools")

	//Removing Tools
	delete CONFIG.DND5E.toolIds.glassblower
	delete CONFIG.DND5E.toolIds.potter
	delete CONFIG.DND5E.toolIds.weaver
	delete CONFIG.DND5E.toolIds.carpenter
	delete CONFIG.DND5E.toolIds.cobbler
		
	//Adding Tool Types
	CONFIG.DND5E.toolTypes.craft = "Crafting Tools"
	CONFIG.DND5E.toolTypes.explore = "Exploration Tools"
	CONFIG.DND5E.toolProficiencies.craft = "Crafting Tools"
	CONFIG.DND5E.toolProficiencies.explore = "Exploration Tools"
	
	//Other Artiist's Tools
	CONFIG.DND5E.toolIds.painter = "";
	CONFIG.DND5E.toolIds.sculpt = "";
	
	//Crafting Supplies
	CONFIG.DND5E.toolIds.alchemist = "";
	CONFIG.DND5E.toolIds.brewer = "";
	CONFIG.DND5E.toolIds.calligrapher = "";
	CONFIG.DND5E.toolIds.cook = "";
	CONFIG.DND5E.toolIds.herb = "";
	CONFIG.DND5E.toolIds.jeweler = "";
	CONFIG.DND5E.toolIds.leatherworker = "";
	CONFIG.DND5E.toolIds.mason = "";
	CONFIG.DND5E.toolIds.pois = "";
	CONFIG.DND5E.toolIds.smith = "";
	CONFIG.DND5E.toolIds.tailor = "";
	CONFIG.DND5E.toolIds.tinker = "";
	CONFIG.DND5E.toolIds.woodcarver = "";
	CONFIG.DND5E.toolIds.forg = "";

	//Exploration Tools
	CONFIG.DND5E.toolIds.disg = "";
	CONFIG.DND5E.toolIds.navg = "";
	CONFIG.DND5E.toolIds.thief = "";
	
	//Gaming Tools
	CONFIG.DND5E.toolIds.card = "";
	CONFIG.DND5E.toolIds.chess = "";
	CONFIG.DND5E.toolIds.dice = "";	

}