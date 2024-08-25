export function gameSettingRegister(){
	// game.settings.register("garhis-grotto", "dialogShown", {
	// 	name: "Dialog Shown",
	// 	hint: "Indicates whether the dialog has been shown for this user",
	// 	scope: "client",
	// 	config: false,
	// 	type: Boolean,
	// 	default: false,
	// });

	// game.settings.register("garhis-grotto", "conditions", {
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

	// game.settings.register("garhis-grotto", "conditions-exhaustion", {
	// 	name: "Remove Custom Exhaustion",
	// 	hint: "Remove Elkan's automation of conditions",
	// 	scope: "world",
	// 	config: true,
	// 	default: false,
	// 	type: Boolean,
	// 	restricted: true,
	// 	requiresReload: true,
	// });

	game.settings.register("garhis-grotto", "skills", {
		name: "Extra Skills",
		hint: "Remove added skills like Streetwise",
		scope: "world",
		config: true,
		requiresReload: true,
		default: false,
		type: Boolean,
		restricted: true,
	});

	game.settings.register("garhis-grotto", "tools", {
		name: "Tools List",
		hint: "Add old tools removed by the Elkan ruleset (like woodcarving).",
		scope: "world",
		config: true,
		requiresReload: true,
		default: false,
		type: Boolean,
		restricted: true,
	});

	game.settings.register("garhis-grotto", "armor", {
		name: "Armor List",
		hint: "Add deprecated armor proficiencies.",
		scope: "world",
		config: true,
		requiresReload: true,
		default: false,
		type: Boolean,
		restricted: true,
	});
	
	game.settings.register("garhis-grotto", "weapons", {
		name: "Weapon List",
		hint: "Add deprecated weapon proficiencies. May not function properly with Elkan classes.",
		scope: "world",
		config: true,
		requiresReload: true,
		default: false,
		type: Boolean,
		restricted: true,
	});
}