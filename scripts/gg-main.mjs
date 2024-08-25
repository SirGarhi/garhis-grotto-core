import { gameSettingRegister } from "./scripts/gameSettings/gameSettingRegister.mjs";
import { startDialog } from "./scripts/gameSettings/startDialog.mjs";
import { init } from "./scripts/gg-init.mjs";
import { initWarlockSpellSlot } from "./scripts/classes/warlock.mjs";

// CONFIG.elkan5e.WARLOCK_SPELL_SLOT_TABLE = [
//     [2],
//     [2],
//     [2, 1],
//     [2, 2],
//     [2, 2, 1],
//     [2, 2, 2],
//     [2, 2, 2, 1],
//     [2, 2, 2, 2],
//     [2, 2, 2, 2, 1],
//     [2, 2, 2, 2, 2],
//     [2, 2, 2, 2, 2, 1],
//     [2, 2, 2, 2, 2, 1],
//     [2, 2, 2, 2, 2, 1, 1],
//     [2, 2, 2, 2, 2, 1, 1],
//     [2, 2, 2, 2, 2, 1, 1, 1],
//     [2, 2, 2, 2, 2, 1, 1, 1],
//     [2, 2, 2, 2, 2, 1, 1, 1, 1],
//     [2, 2, 2, 2, 2, 1, 1, 1, 1],
//     [2, 2, 2, 2, 2, 2, 1, 1, 1],
//     [2, 2, 2, 2, 2, 2, 2, 1, 1]
// ]

Hooks.once("init", () => {
	console.warn("GG  |  Initializing Garhi's Grotto")
	//gameSettingRegister()
	init()
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