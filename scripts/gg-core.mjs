import { registerSettings } from "./settings/gg-core-settings.mjs";
import { language } from "./rules/languages.js";
import { skills } from "./rules/skills.js";
import { features } from "./rules/features.js";
import { equipment } from "./rules/equipment.js";
import { weapons } from "./rules/weapons.js";
import { tools } from "./rules/tools.js";
import { consumables } from "./rules/consumables.js";
import { gear } from "./rules/gear.js";
import { loot } from "./rules/loot.js";
import { itemProperties } from "./rules/itemProperties.js";
import { ui } from "./rules/ui.js";
import { references } from "./rules/references.js";
// import { conditions, icons } from "./rules/conditions.js";
// import { modules } from "./moduleIntegrations/_modulesInit.js";

Hooks.once("init", () => {
	console.warn("GG - Core | Initializing Garhi's Grotto");
	registerSettings();
	language();
	skills();
	features();
	equipment();
	weapons();
	tools();
	gear();
	loot();
	itemProperties();
	consumables();
	ui();
	references();
});

Hooks.once('ready', async () => {

});

/**
 * Things that occur when an attack is declaired
 */
// Hooks.on("dnd5e.preRollAttack", (item, config) => {
//     focus(item,config)
// });
