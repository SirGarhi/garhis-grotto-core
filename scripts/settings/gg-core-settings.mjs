export function registerSettings() {
	// game.settings.register("garhis-grotto-core", "dialogShown", {
	// 	name: "Dialog Shown",
	// 	hint: "Indicates whether the dialog has been shown for this user",
	// 	scope: "client",
	// 	config: false,
	// 	type: Boolean,
	// 	default: false,
	// });

	// game.settings.register("garhis-grotto-core", "conditions", {
	// 	name: "Use Custom Conditions",
	// 	hint: "The Elkan 5e module automates the function of conditions. Our module is designed with the Elkan conditions in mind, but if you don't want any of the Elkan improvements to conditions, you can switch back to SRD conditions.",
	// 	scope: "world",
	// 	config: true,
	// 	type: String,
	// 	requiresReload: true,
	// 	default: "a",
	// 	choices: {
	// 		"a":"Elkan Conditions",
	// 		"b":"Elkan Conditions + extra condition icons",
	// 		"c":"SRD Conditions",
	// 		"d":"SRD Conditions + extra condition icons"
	// 	},
	// 	restricted: true,
	// });

	// game.settings.register("garhis-grotto-core", "conditions-exhaustion", {
	// 	name: "Remove Custom Exhaustion",
	// 	hint: "Remove Elkan's automation of conditions",
	// 	scope: "world",
	// 	config: true,
	// 	default: false,
	// 	type: Boolean,
	// 	restricted: true,
	// 	requiresReload: true,
	// });

	game.settings.register("garhis-grotto-core", "skills", {
		name: "Skills List",
		hint: "Changes to the defined skills and proficiencies.",
		scope: "world",
		config: true,
		requiresReload: true,
		default: true,
		type: Boolean,
		restricted: true
	});

	game.settings.register("garhis-grotto-core", "tools", {
		name: "Tools List",
		hint: "Changes to the defined types of tool proficiencies.",
		scope: "world",
		config: true,
		requiresReload: true,
		default: true,
		type: Boolean,
		restricted: true
	});

	game.settings.register("garhis-grotto-core", "armor", {
		name: "Armor List",
		hint: "Changes to the defined types of armor proficiencies.",
		scope: "world",
		config: true,
		requiresReload: true,
		default: true,
		type: Boolean,
		restricted: true,
	});

	game.settings.register("garhis-grotto-core", "weapons", {
		name: "Weapon List",
		hint: "Changes to the defined types of weapon proficiencies.",
		scope: "world",
		config: true,
		requiresReload: true,
		default: true,
		type: Boolean,
		restricted: true
	});

	game.settings.register("garhis-grotto-core", "itemPilesIntegration",	{
		name: "Item Piles Integration",
		hint: "Enables the creation of Item Ples at the end of combat.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		onChange: async (value) => {

		}
	});

	game.settings.register("garhis-grotto-core", "randomizeQuality",	{
		name: "Randomize Quality of Loot?",
		hint: "Mundane equipment dropped by enemies will be given a random quality modifier to the value.",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		onChange: async (value) => {

		}
	});
}
