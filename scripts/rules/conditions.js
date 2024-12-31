
import { CONSTANTS } from "../lib/constants.js"

export function conditions(){
    console.log("GG  |  Initializing Conditions")
    // console.log("Elkan 5e  |  Replacing Icons for Old Conditions")
    // //Replace icons
    // CONFIG.DND5E.conditionTypes.blinded.icon = `${CONSTANTS.art}/icons/status-effects/blinded.svg "
    // CONFIG.DND5E.conditionTypes.charmed.icon = `${CONSTANTS.art}/icons/status-effects/charmed.svg`
    // CONFIG.DND5E.conditionTypes.deafened.icon = `${CONSTANTS.art}/icons/status-effects/deafened.svg`
    // CONFIG.DND5E.conditionTypes.frightened.icon = `${CONSTANTS.art}/icons/status-effects/frightened.svg`
    // CONFIG.DND5E.conditionTypes.grappled.icon = `${CONSTANTS.art}/icons/status-effects/grappled.svg`
    // CONFIG.DND5E.conditionTypes.incapacitated.icon = `${CONSTANTS.art}/icons/status-effects/incapacitated.svg`
    // CONFIG.DND5E.conditionTypes.invisible.icon = `${CONSTANTS.art}/icons/status-effects/invisible.svg`
    // CONFIG.DND5E.conditionTypes.restrained.icon = `${CONSTANTS.art}/icons/status-effects/restrained.svg`
    // CONFIG.DND5E.conditionTypes.paralyzed.icon = `${CONSTANTS.art}/icons/status-effects/paralyzed.svg`
    // CONFIG.DND5E.conditionTypes.petrified.icon = `${CONSTANTS.art}/icons/status-effects/petrified.svg`
    // CONFIG.DND5E.conditionTypes.poisoned.icon = `${CONSTANTS.art}/icons/status-effects/poisoned.svg`
    // CONFIG.DND5E.conditionTypes.prone.icon = `${CONSTANTS.art}/icons/status-effects/prone.svg`
    // CONFIG.DND5E.conditionTypes.stunned.icon = `${CONSTANTS.art}/icons/status-effects/stunned.svg`
    // CONFIG.DND5E.conditionTypes.unconscious.icon = `${CONSTANTS.art}/icons/status-effects/unconscious.svg`


   // Remove Condition Effects
   delete CONFIG.DND5E.conditionEffects.halfHealth;
   CONFIG.DND5E.conditionEffects.halfMovement.delete('exhaustion-2');
   CONFIG.DND5E.conditionEffects.noMovement.delete('exhaustion-5');
   CONFIG.DND5E.conditionEffects.halfMovement.add('slowed', 'lethargic');

   console.log("GG  |  Adding New Conditions")
   CONFIG.DND5E.conditionTypes.confused = {
      label:"Confused",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.WJFtNc5UraHVrV5V`,
      icon:`${CONSTANTS.art}/icons/status-effects/confused.svg`
   }
   CONFIG.DND5E.conditionTypes.coverhalf = {
      label:"Half Cover",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.1BmTbnT3xDPqv9dq`,
      icon:`${CONSTANTS.art}/icons/status-effects/cover-half.svg`
   }
   CONFIG.DND5E.conditionTypes.coverthreequarters = {
      label:"Three Quarters Cover",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.1BmTbnT3xDPqv9dq`,
      icon:`${CONSTANTS.art}/icons/status-effects/cover-three-quarters.svg`
   }
   CONFIG.DND5E.conditionTypes.dazed = {
      label:"Dazed",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.0BYyVwipnS55gVFq`,
      icon:`${CONSTANTS.art}/icons/status-effects/dazed.svg`
   }
   CONFIG.DND5E.conditionTypes.dominated = {
      label: "Dominated",
      statuses:["Charmed"],
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.0OYaVPznKqYgchW9`,
      icon:`${CONSTANTS.art}/icons/status-effects/dominated.svg`
   };
   CONFIG.DND5E.conditionTypes.drained = {
      label: "Drained",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.ZnhMIMgPZv1QDxzZ`,
      icon:`${CONSTANTS.art}/icons/status-effects/drained.svg`
   };
   CONFIG.DND5E.conditionTypes.goaded = {
      label: "Goaded",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.IVZ318d1P8WBcDxN`,
      icon:`${CONSTANTS.art}/icons/status-effects/goaded.svg`
   };
   CONFIG.DND5E.conditionTypes.hasted = {
      label: "Hasted",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.8dnyv0szJi7dCz74`,
      icon:`${CONSTANTS.art}/icons/status-effects/hasted.svg`
   };
   CONFIG.DND5E.conditionTypes.obscuredheavily = {
      label: "Heavily Obscured",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.UC5VK6i6vqWEUfMn`,
      icon:`${CONSTANTS.art}/icons/status-effects/obscured-heavily.svg`
   };
   CONFIG.DND5E.conditionTypes.obscuredlightly = {
      label: "Lightly Obscured",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.Jq7kMUlHodqSbYDD`,
      icon:`${CONSTANTS.art}/icons/status-effects/obscured-lightly.svg`
   };
   CONFIG.DND5E.conditionTypes.silenced = {
      label: "Silenced",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.F51xrE7Mj8VeM3b8`,
      icon:`${CONSTANTS.art}/icons/status-effects/silenced.svg`
   };
   CONFIG.DND5E.conditionTypes.siphoned = {
      label: "Siphoned",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.SthB8javJuFySiBg`,
      icon:`${CONSTANTS.art}/icons/status-effects/siphoned.svg`
   };
   CONFIG.DND5E.conditionTypes.slowed = {
      label: "Slowed",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.kkbgHooTzrtu4q8T`,
      icon:`${CONSTANTS.art}/icons/status-effects/slowed.svg`
   };

   CONFIG.DND5E.conditionTypes.weakened = {
      label: "Weakened",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.iJT3cWvyTNBv1L5h`,
      icon:`${CONSTANTS.art}/icons/status-effects/weakened.svg`,
   };

   CONFIG.DND5E.conditionTypes.concentrating = {
      label: "Concentrating",
      reference:`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.4ZOHN6tGvj54J6Kv`,
      icon: `${CONSTANTS.art}/icons/status-effects/concentrating.svg`
   }
   CONFIG.DND5E.conditionTypes.surprised = {
      label: "Surprised",
      reference: `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.QOZeW0m8RCdVg6UE`,
      icon: `${CONSTANTS.art}/icons/status-effects/surprised.svg`
   }
   CONFIG.DND5E.conditionTypes.intoxicated = {
      label: "Drunk",
      icon: `${CONSTANTS.art}/icons/status-effects/surprised.svg`
   }
   CONFIG.DND5E.conditionTypes.lethargic = {
      label: "Lethargic",
      icon: `${CONSTANTS.art}/icons/status-effects/surprised.svg`
   }

	CONFIG.DND5E.conditionTypes.intoxicated = {
		label:"Intoxicated",
		reference:`${CONSTANTS.rulesRef}.JournalEntry.USwOGFGJbk8zoR06.JournalEntryPage.55CsgrPatqRKSWku`,
		icon:"modules/garhis-grotto-core/assets/art/02_icons/04_effects/status-conditions/intoxicated.webp"
	}
	// Adding New Conditions
	console.log("Garhi's Grotto  |  Adding new conditions")
	CONFIG.statusEffects.push({
		"id": "intoxicated",
		"name": "Intoxicated",
		"_id": "intoxicated",
		"icon": `${CONSTANTS.art}/icons/status-effects/status-conditions/intoxicated.webp`,
		"reference": `${CONSTANTS.rulesRef}.JournalEntry.USwOGFGJbk8zoR06.JournalEntryPage.55CsgrPatqRKSWku`,
		"changes": [
			{
				"key": "flags.midi-qol.disadvantage.attacks.all",
				"mode": 0,
				"value": 1
			},
			{
				"key": "flags.midi-qol.disadvantage.ability.check.int",
				"mode": 0,
				"value": 1
			},
			{
				"key": "flags.midi-qol.disadvantage.ability.check.wis",
				"mode": 0,
				"value": 1
			},
			{
				"key": "flags.midi-qol.disadvantage.ability.check.cha",
				"mode": 0,
				"value": 1
			}
		]
	});
}


/*
* Makes the world use Elkan 5e icons
*/
export function icons(){
    const conditions = game.settings.get("elkan5e", "conditions");
    const exhaustion = game.settings.get("elkan5e", "conditions-exhaustion");

    console.log("Elkan 5e  |  Initializing Icons")
    CONFIG.statusEffects.find(effect => effect.id === "dead").img= `${CONSTANTS.art}/icons/status-effects/dead.svg`
    CONFIG.statusEffects.find(effect => effect.id === "blinded").img= `${CONSTANTS.art}/icons/status-effects/blinded.svg`
    CONFIG.statusEffects.find(effect => effect.id === "charmed").img= `${CONSTANTS.art}/icons/status-effects/charmed.svg`
    CONFIG.statusEffects.find(effect => effect.id === "concentrating").img= `${CONSTANTS.art}/icons/status-effects/concentrating.svg`
    CONFIG.statusEffects.find(effect => effect.id === "deafened").img= `${CONSTANTS.art}/icons/status-effects/deafened.svg`
    CONFIG.statusEffects.find(effect => effect.id === "diseased").img= `${CONSTANTS.art}/icons/status-effects/diseased.svg`
    CONFIG.statusEffects.find(effect => effect.id === "frightened").img= `${CONSTANTS.art}/icons/status-effects/frightened.svg`
    CONFIG.statusEffects.find(effect => effect.id === "grappled").img= `${CONSTANTS.art}/icons/status-effects/grappled.svg`
    CONFIG.statusEffects.find(effect => effect.id === "incapacitated").img= `${CONSTANTS.art}/icons/status-effects/incapacitated.svg`
    CONFIG.statusEffects.find(effect => effect.id === "invisible").img= `${CONSTANTS.art}/icons/status-effects/invisible.svg`
    CONFIG.statusEffects.find(effect => effect.id === "paralyzed").img= `${CONSTANTS.art}/icons/status-effects/paralyzed.svg`
    CONFIG.statusEffects.find(effect => effect.id === "petrified").img= `${CONSTANTS.art}/icons/status-effects/petrified.svg`
    CONFIG.statusEffects.find(effect => effect.id === "poisoned").img= `${CONSTANTS.art}/icons/status-effects/poisoned.svg`
    CONFIG.statusEffects.find(effect => effect.id === "prone").img= `${CONSTANTS.art}/icons/status-effects/prone.svg`
    CONFIG.statusEffects.find(effect => effect.id === "restrained").img= `${CONSTANTS.art}/icons/status-effects/restrained.svg`
    CONFIG.statusEffects.find(effect => effect.id === "surprised").img= `${CONSTANTS.art}/icons/status-effects/surprised.svg`
    CONFIG.statusEffects.find(effect => effect.id === "stunned").img= `${CONSTANTS.art}/icons/status-effects/stunned.svg`
    CONFIG.statusEffects.find(effect => effect.id === "unconscious").img= `${CONSTANTS.art}/icons/status-effects/unconscious.svg`
    CONFIG.statusEffects.find(effect => effect.id === "silenced").img=`${CONSTANTS.art}/icons/status-effects/silenced.svg`

    // //Removing Unused Conditions
    if (conditions == "a" || conditions == "d"){
        console.log("Elkan 5e  |  Removing unused conditions")
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "bleeding");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "burrowing");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "cursed");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "dodging");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "ethereal");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "flying");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "hidden");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "hiding");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "hovering");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "marked");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "transformed");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "sleeping");
        CONFIG.statusEffects = CONFIG.statusEffects.filter(effect => effect.id !== "stable");
    }


    //Applying effects
    CONFIG.statusEffects.find(effect => effect.id === "dead").changes = [
        {
            "key": "attributes.hp.value",
            "mode": 5,
            "value": "0",
            "priority": null
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "blinded").changes = [
        {
            "key": "flags.midi-qol.disadvantage.attack.all",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.grants.advantage.attack.all",
            "mode": 5,
            "value": "1"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "deafened").changes = [
        {
            "key": "flags.midi-qol.disadvantage.ability.check.dex",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.disadvantage.ability.save.dex",
            "mode": 5,
            "value": "1"
        }
    ]

    if (!exhaustion){
        CONFIG.statusEffects.find(effect => effect.id === "exhaustion").changes = [
            {
                "key": "system.bonuses.All-Attacks",
                "mode": 2,
                "value": "-2*@attributes.exhaustion"
            },
            {
                "key": "system.bonuses.spell.dc",
                "mode": 2,
                "value": "-2*@attributes.exhaustion"
            },
            {
                "key": "system.bonuses.abilities.skill",
                "mode": 2,
                "value": "-2*@attributes.exhaustion"
            },
            {
                "key": "system.bonuses.abilities.save",
                "mode": 2,
                "value": "-2*@attributes.exhaustion"
            }
        ]
    }

    CONFIG.statusEffects.find(effect => effect.id === "frightened").changes = [
        {
            "key": "flags.midi-qol.disadvantage.attack.all",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.disadvantage.ability.check.all",
            "mode": 5,
            "value": "1"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "incapacitated").changes = [
        {
            "key": "flags.midi-qol.fail.ability.save.dex",
            "mode": 5,
            "value": "1",
            "priority": null
        },
        {
            "key": "flags.midi-qol.fail.ability.save.str",
            "mode": 5,
            "value": "1",
            "priority": null
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "invisible").changes = [
        {
            "key": "flags.midi-qol.advantage.attack.all",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.grants.disadvantage.attack.all",
            "mode": 5,
            "value": "1"
        },
        {
            "key":"flags.midi-qol.advantage.skill.ste",
            "mode":2,
            "value":"1"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "paralyzed").changes = [
        {
            "key": "flags.midi-qol.grants.advantage.attack.all",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.grants.critical.mwak",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.grants.critical.msak",
            "mode": 5,
            "value": "1"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "petrified").changes = [
        {
            "key": "flags.midi-qol.grants.advantage.attack.all",
            "mode": 2,
            "value": "1"
        },
        {
            "key": "system.traits.dr.all",
            "mode": 0,
            "value": "physical"
        },
        {
            "key": "system.traits.dr.all",
            "mode": 0,
            "value": "magical"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "poisoned").changes = [
        {
            "key": "flags.midi-qol.disadvantage.attack.all",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.disadvantage.ability.check.all",
            "mode": 5,
            "value": "1"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "prone").changes = [
        {
            "key": "flags.midi-qol.grants.advantage.attack.mwak",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.grants.advantage.attack.msak",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.grants.disadvantage.attack.rwak",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.grants.disadvantage.attack.rsak",
            "mode": 5,
            "value": "1"
        },
        {
            "key": "flags.midi-qol.disadvantage.attack.all",
            "mode": 5,
            "value": "1"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "restrained").changes = [
        {
            "key": "flags.midi-qol.disadvantage.attack.all",
            "mode": 5,
            "value": "1",
            "priority": null
        },
        {
            "key": "flags.midi-qol.disadvantage.ability.save.dex",
            "mode": 5,
            "value": "1",
            "priority": null
        },
        {
            "key": "flags.midi-qol.grants.advantage.attack.all",
            "mode": 5,
            "value": "1",
            "priority": null
        },
        {
            "key": "flags.midi-qol.fail.spell.somatic",
            "mode": 2,
            "value": "1",
            "priority": null
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "silenced").changes = [
        {
            "key": "flags.midi-qol.fail.spell.verbal",
            "mode": 5,
            "value": "1"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "stunned").changes = [
        {
            "key": "flags.midi-qol.grants.advantage.attack.all",
            "mode": 5,
            "value": "1"
        }
    ]


    CONFIG.statusEffects.find(effect => effect.id === "surprised").changes = [
        {
            "key": "system.attributes.init.bonus",
            "mode": 2,
            "value": "-20"
        },
        {
            "key": "flags.midi-qol.disadvantage.ability.save.dex",
            "mode": 5,
            "value": "1"
        }
    ]

    CONFIG.statusEffects.find(effect => effect.id === "surprised").flags = {
        "dae": {
            "transfer": false,
            "stackable": "none",
            "macroRepeat": "none",
            "specialDuration": ["turnEnd"],
            "durationExpression": "",
            "selfTarget": false,
            "selfTargetAlways": false,
            "disableIncapacitated": true,
            "dontApply": false,
            "showIcon": true
        },
        "core": {
            "statusId": ""
        }
    }

    if(conditions == "a" || conditions == "b"){
        // Adding New Conditions
        console.log("Elkan 5e  |  Adding new conditions")
        CONFIG.statusEffects.push({
            "id": "coverhalf",
            "name": "Half Cover",
            "_id": "dnd5ecoverhalf00",
            "icon": `${CONSTANTS.art}/icons/status-effects/cover-half.svg`,
            "reference": `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.1BmTbnT3xDPqv9dq`,
            "changes": [
                {
                    "key": "system.abilities.dex.bonuses.save",
                    "mode": 2,
                    "value": "+2"
                },
                {
                    "key": "system.attributes.ac.bonus",
                    "mode": 2,
                    "value": "+2"
                }
            ]
        });

        CONFIG.statusEffects.push({
            "id": "coverthreequarters",
            "name": "Three Quarrters Cover",
            "_id": "dnd5ecoverthreec",
            "icon": `${CONSTANTS.art}/icons/status-effects/cover-three-quarters.svg`,
            "reference": `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.1BmTbnT3xDPqv9dq`,
            "changes": [
                {
                "key": "system.abilities.dex.bonuses.save",
                "mode": 2,
                "value": "+5"
                },
                {
                "key": "system.attributes.ac.bonus",
                "mode": 2,
                "value": "+5"
                }
            ]
        });

        CONFIG.statusEffects.push({
            "id": "confused",
            "name": "Confused",
            "_id": "dnd5econfused000",
            "icon": `${CONSTANTS.art}/icons/status-effects/confused.svg`,
            "reference": `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.WJFtNc5UraHVrV5V`,
            "changes": [
                {
                "key": "flags.midi-qol.OverTime",
                "mode": 2,
                "value": "turn=start, label=Confused Effect, macro=Compendium.elkan5e.elkan5e-macros.Macro.HW9jG0cdn6BmhzyE"
                }
            ],
            "macros": [
                {
                "id": "",
                "type": "apply"
                },
                {
                "id": "",
                "type": "remove"
                }
            ]
        });

        CONFIG.statusEffects.push({
            "id": "dazed",
            "name": "Dazed",
            "_id": "dnd5edazed000000",
            "icon": `${CONSTANTS.art}/icons/status-effects/dazed.svg`,
            "reference": `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.0BYyVwipnS55gVFq`
        });

        CONFIG.statusEffects.push({
            "id": "dominated",
            "name": "Dominated",
            "_id": "dnd5edominated00",
            "icon": `${CONSTANTS.art}/icons/status-effects/dominated.svg`,
            "reference": `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.0OYaVPznKqYgchW9`
        });
        CONFIG.statusEffects.push({
            "id":"drained",
            "name": "Drained",
            "_id": "dnd5edrained0000",
            "reference":`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.ZnhMIMgPZv1QDxzZ`,
            "icon":`${CONSTANTS.art}/icons/status-effects/drained.svg`
        });

        CONFIG.statusEffects.push({
            "id":"goaded",
            "name": "Goaded",
            "_id": "dnd5egoaded00000",
            "reference":`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.IVZ318d1P8WBcDxN`,
            "icon":`${CONSTANTS.art}/icons/status-effects/goaded.svg`
        });

        CONFIG.statusEffects.push({
            "id":"hasted",
            "name": "Hasted",
            "_id": "dnd5ehasted00000",
            "reference":`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.8dnyv0szJi7dCz74`,
            "icon":`${CONSTANTS.art}/icons/status-effects/hasted.svg`,
            "changes": [
                {
                    "key": "system.attributes.ac.bonus",
                    "mode": 2,
                    "value": "+2"
                },
                {
                    "key": "system.abilities.dex.bonuses.save",
                    "mode": 2,
                    "value": "+2"
                },
                {
                    "key": "system.attributes.movement.all",
                    "mode": 0,
                    "value": "*2"
                }
            ]
        });

        CONFIG.statusEffects.push({
            "id":"obscuredheavily",
            "name": "Heavily Obscured",
            "_id": "dnd5eobscuredhea",
            "reference":`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.UC5VK6i6vqWEUfMn`,
            "icon":`${CONSTANTS.art}/icons/status-effects/obscured-heavily.svg`,
            "changes": [
                {
                    "key": "flags.midi-qol.advantage.attack.all",
                    "mode": 5,
                    "value": "1"
                },
                {
                    "key": "flags.midi-qol.grants.disadvantage.attack.all",
                    "mode": 5,
                    "value": "1"
                },
                {
                    "key":"flags.midi-qol.advantage.skill.ste",
                    "mode":2,
                    "value":"1"
                }

            ]
        });

        CONFIG.statusEffects.push({
            "id":"obscuredlightly",
            "name": "Lightly Obscured",
            "_id": "dnd5eobscuredlig",
            "reference":`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.Jq7kMUlHodqSbYDD`,
            "icon":`${CONSTANTS.art}/icons/status-effects/obscured-lightly.svg`,
            "changes": [
                {
                    "key":"flags.midi-qol.advantage.skill.ste",
                    "mode":2,
                    "value":"1"
                },

            ]
        });

        CONFIG.statusEffects.push({
            "id":"siphoned",
            "name": "Siphoned",
            "_id": "dnd5esiphoned000",
            "reference":`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.SthB8javJuFySiBg`,
            "icon":`${CONSTANTS.art}/icons/status-effects/siphoned.svg`
        });

        CONFIG.statusEffects.push({
            "id":"slowed",
            "name": "Slowed",
            "_id": "dnd5eslowed00000",
            "reference":`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.kkbgHooTzrtu4q8T`,
            "icon":`${CONSTANTS.art}/icons/status-effects/slowed.svg`,
            "changes":[
                {
                    "key": "flags.midi-qol.disadvantage.attack.all",
                    "mode": 5,
                    "value": "1"
                },
                {
                    "key": "system.attributes.ac.bonus",
                    "mode": 2,
                    "value": "-2"
                },
                {
                    "key": "system.abilities.dex.bonuses.save",
                    "mode": 2,
                    "value": "-2"
                }
            ]
        });

        CONFIG.DND5E.conditionEffects.halfMovement.add("slowed")

        CONFIG.statusEffects.push({
            "id":"weakened",
            "name": "Weakened",
            "_id": "dnd5eweakened000",
            "reference":`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.iJT3cWvyTNBv1L5h`,
            "icon":`${CONSTANTS.art}/icons/status-effects/weakened.svg`,
            "changes": [
                {
                    "key": "flags.midi-qol.disadvantage.ability.dex",
                    "mode": 5,
                    "value": "1"
                },
                {
                    "key": "flags.midi-qol.disadvantage.ability.str",
                    "mode": 5,
                    "value": "1"
                }
            ]
        });
    }

    CONFIG.statusEffects.sort((a, b) => {
        if (a.id === "dead" && b.id !== "dead") {
            return -1;
        }
        if (a.id !== "dead" && b.id === "dead") {
            return 1;
        }
        return a.id.localeCompare(b.id);
    });



}

/**
 * TODO: Adds functionality to Fey Ancestry to gain advantage on saves against charmed.
 *
 */
export function feyAncest(){
}

/*
 * TODO: Automate grapple and give conditions according to the size of the attacker grappler and the
 * size of the grappled. Also roll to see if the creature is actually grappled
 */
export function grapple(){
    console.log("Grapple")
}

/**
 * TODO: Adds functionality to Dwarven Resilience to give advantage on saves via poison. Probably need to use midi to automate
 * maybe with looking at there overtime effects and how to mix that
 */
export function dwarfResil(){

}

/**
 * Adds functionality to Sturdy to give advantage on saves via prone.
 */
export function sturdy(){
}
