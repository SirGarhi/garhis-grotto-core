import { equipment } from "./rules/equipment.mjs";
import { weapons } from "./rules/weapons.mjs";
import { consumables } from "./rules/consumables.mjs";
import { tools } from "./rules/tools.mjs";
import { language } from "./rules/languages.mjs";
import { features } from "./rules/features.mjs";
import { skills } from "./rules/skills.mjs";
import { formating } from "./rules/format.mjs";
import { references } from "./rules/references.mjs";
import { conditions, icons } from "./rules/conditions.mjs";
import { modules } from "./moduleIntegrations/_modulesInit.js";




export function initializeRules(){
    console.warn("GG - Core | Initializing Rules")
	equipment()
	tools()
	weapons()
	language()
	skills()
	features()
	consumables()
	// conditions()
	//icons()
	formating()
	//references()
	// TODO: the following below
	// speed()
	// modules()
}
