
export function language(){
	console.log("GG - Core | Initializing Languages")
	//Replace Languages
	CONFIG.GARHISGROTTO ||= {}
	CONFIG.GARHISGROTTO.languages = {
		prevalent: {
			label: "Prevalent Languages",
			children: {
				standard: {
					label: "Trade Language",
					children: {
						hodgepodge: "Hodgepodge",
						gestural: "Gestural",
						underspeak: "Underspeak"
					}
				},
				native: {
					label: "Native Mortal Languages",
					children: {
						human: "Acacian",
						halfling: "Erdesh",
						elvish: "Elvish",
						orc: "Zimtash",
						goblin: "Oinesh",
						kobold: "Anesh"
					}
				}
			}
		},
		obscure: {
			label: "Rare Languages",
			children: {
				giant: "Ittean",
				dwarvish: "Dimtean",
				draconic: "Draconic",
				astral: "Astrelan"
			},
		},
		supernatural : {
			label: "Supernatural Languages",
			children: {
				bestial: {
					label: "Beast Speech",
					children: {
						bird: "Avian",
						dog: "Canine",
						cat: "Feline",
						frog: "Amphibian",
						fish: "Aquatic",
						lizard: "Reptile",
						monkey: "Primate"
					}
				},
				planar: {
					label: "Planar Languages",
					children: {
						celestial:"Celestial",
						infernal:"Infernal",
						fey: "Sylvan",
						shadow: "Tenebron",
						abyssal:"Abyssal",
						binary: "Binary",
						primordial: "Primordial",
						madness: "Bazmu"
					}
				}
			}
		},
		secret : {
			label: "Secret Languages",
			children: {
				druidic: "Druidic",
				cant: "Thieves' Cant"
			}
		},
		spell: {
			label: "Magical",
			children: {
				comprehend: "Comprehend Languages",
				omniglot: "Eyes of the Runekeeper",
				tongues: "Tongues"
			}
		}
	}

	CONFIG.DND5E.languages = CONFIG.GARHISGROTTO.languages;

	console.warn("GG | Hooking Polyglot");
	Hooks.once("polyglot.init", (LanguageProvider) => {
		console.warn("GG | In Polyglot Hooked Function")
		class GarhisGrottoLanguageProvider extends LanguageProvider {
			languages = {
				hodgepodge: {
					label: "Hodgepodge",
					font: "Thorass"
				},
				gestural: {
					label: "Gestural",
					font: "Finger Alphabet"
				},
				underspeak: {
					label: "Underspeak",
					font: "Thorass"
				},
				human: {
					label: "Acacian",
					font: "Thorass"
				},
				halfling: {
					label: "Erdesh",
					font: "Thorass"
				},
				elvish: {
					label: "Elvish",
					font: "Espruar"
				},
				orc: {
					label: "Zimtash",
					font: "Ork Glyphs"
				},
				goblin: {
					label: "Oinash",
					font: "Ork Glyphs"
				},
				kobold: {
					label: "Anesh",
					font: "Ork Glyphs"
				},
				giant: {
					label: "Ittean",
					font: "Davek"
				},
				dwarvish: {
					label: "Dimtean",
					font: "Dethek"
				},
				draconic: {
					label: "Draconic",
					font: "Elder Futhark"
				},
				astral: {
					label: "Astrelan",
					font: "Pulsian"
				},
				druidic: {
					label: "Druidic",
					font: "Jungle Slang"
				},
				cant: {
					label: "Thieves' Cant",
					font: "Thorass",
					rng: "unique"
				},
				bestial: {
					label: "Beast Speech",
					font: "Aztec",
					rng: "unique"
				},
				bird: {
					label: "Avian",
					font: "Aztec",
					rng: "unique"
				},
				dog: {
					label: "Canine",
					font: "Aztec",
					rng: "unique"
				},
				cat: {
					label: "Feline",
					font: "Aztec",
					rng: "unique"
				},
				frog: {
					label: "Amphibian",
					font: "Aztec",
					rng: "unique"
				},
				fish: {
					label: "Aquatic",
					font: "Aztec",
					rng: "unique"
				},
				lizard: {
					label: "Reptile",
					font: "Aztec",
					rng: "unique"
				},
				monkey: {
					label: "Primate",
					font: "Aztec",
					rng: "unique"
				},
				celestial: {
					label: "Celestial",
					font: "Celestial"
				},
				infernal: {
					label: "Infernal",
					font: "Infernal"
				},
				fey: {
					label: "Sylvan",
					font: "Olde Espruar"
				},
				shadow: {
					label: "Tenebron",
					font: "High Drowic"
				},
				abyssal: {
					label: "Abyssal",
					font: "Rellanic"
				},
				binary: {
					label: "Binary",
					font: "Ophidian"
				},
				primordial: {
					label: "Primordial",
					font: "Dethek"
				},
				madness: {
					label: "Bazmu",
					font: "Highschool Runes"
				},
				comprehend: {
					label: "Comprehend Languages"
				},
				omniglot: {
					label: "Eyes of the Runekeeper"
				},
				tongues: {
					label: "Tongues"
				}
			}

			get settings() {
				return {
					"DND5E.SpecialLanguages": {
						type: String,
						default: game.i18n.localize("DND5E.LanguagesCommon"),
					}
				};
			}

			languageRarities = ["prevalent", "obscure", "supernatural", "secret", "spell", "standard", "native", "planar"];

			multiLanguages = {
				bestial: { parent: "supernatural" }
			};

			async getLanguages() {
				const langs = {};
				if (this.replaceLanguages) {
					CONFIG.GARHISGROTTO.languages = {};
					this.languageRarities = [];
					this.multiLanguages = [];
				}
				const languagesSetting = game.settings.get("polyglot", "Languages");
				const systemLanguages = CONFIG.GARHISGROTTO.languages;
				const getLang = (key, target) => {
					console.log(`Polyglot Processing: ${key}: ${target}`);
					const processLanguage = (label) => {
						console.log(label);
						if (label) {
							langs[key] = {
								label,
								font: languagesSetting[ key ]?.font || this.languages[key]?.font || this.defaultFont,
								rng: languagesSetting[key]?.rng || this.languages[key]?.rng || "default",
							};
						}
					};

					if (key in this.multiLanguages) {
						processLanguage(target[key].label);
					}
					if (target[key].children) {
						Object.keys(target[key].children).forEach((kkey) => {
							getLang(kkey, target[key].children);
						});
					} else {
						processLanguage(key);
					}
				};
				Object.keys(systemLanguages).forEach((key) => {
					if (this.languageRarities.includes(key)) {
						Object.keys(systemLanguages[key].children).forEach((kkey) => {
							getLang(kkey, systemLanguages[key].children);
						});
					} else {
						getLang(key, systemLanguages);
					}
				});
				this.languages = langs;
			}

			getUserLanguages(actor) {
				let knownLanguages = new Set();
				let literateLanguages = new Set();
				if (actor.system?.traits?.languages) {
					for (let lang of actor.system.traits.languages.value) {
						if (this.languageRarities.includes(lang)) {
							for (let l in CONFIG.GARHISGROTTO.languages[lang].children) {
								knownLanguages.add(l);
							}
						} else {
							knownLanguages.add(lang);
						}
						if (lang in this.multiLanguages) {
							const parent = this.multiLanguages[lang].parent;
							let languages;
							if (parent) {
								const parentChildren = CONFIG.DND5E.languages[parent].children;
								languages = parentChildren[lang].children;
							} else {
								languages = CONFIG.GARHISGROTTO.languages[lang].children;
							}
							for (let l in languages) {
								knownLanguages.add(l);
							}
						}
					}
				}
				return [knownLanguages, literateLanguages];
			}
		}
		game.polyglot.api.registerModule("garhis-grotto-core", GarhisGrottoLanguageProvider);
		console.warn("GG | Polyglot Module Registered")
	})
}


