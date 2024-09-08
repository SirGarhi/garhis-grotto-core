import { registerSettings } from "./settings/gg-core-settings.mjs";
import { initializeRules } from "./gg-core-rules.mjs";

Hooks.once("init", () => {
	console.warn("GG - Core | Initializing Garhi's Grotto")
	registerSettings()
	initializeRules()

});

// Hooks.once('ready', async () => {
// 	startDialog()
// });

/**
 * Things that occur when an attack is declaired
 */
// Hooks.on("dnd5e.preRollAttack", (item, config) => {
//     focus(item,config)
// });
