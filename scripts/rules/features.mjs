export function features() {
	console.log("GG | Initializing Feature Types");

	CONFIG.DND5E.featureTypes.class = {
		label: "Class Ability",
		subtypes: {
			coreAbility: "Core Ability",
			abilityEnhancement: "Ability Enhancement",
			passive: "Passive"
		}
	}
	CONFIG.DND5E.featureTypes.classFeature = {
		label: "Class Feature",
		subtypes: {
			arcaneShot: "Arcane Shot",
			artificerInfusion: "Artificer Infusion",
			bloodCurse: "Blood Curse",
			channelDivinity: "Channel Divinity",
			combatManeuver: "Combat Maneuver",
			fightingStyle: "Fighting Style",
			eldritchInvocation: "Eldritch Invocation",
			ki: "Ki Ability",
			metamagic: "Metamagic Technique",
			multiattack: "Multiattack",
			mutation: "Mutation Formula",
			psionicDiscipline: "Psionic Discipline",
			psionicPower: "Psionic Power",
			psionicTalent: "Psionic Talent",
			precision: "Precision Attack",
			wild: "Wild Shape",
			inventorUpgrade: "Inventor Upgrade",
			warlockPact: "Warlock Pact"
		}
	}
	CONFIG.DND5E.featureTypes.enchantment = {
		label: "Enchantment",
		subtypes: {
			artificerInfusion: "Artificer Infusion",
			crimsonRite: "Crimson Rite",
			runeFormula: "Rune Formula"
		}
	}
	CONFIG.DND5E.featureTypes.supernaturalGift = {
		label: "Supernatural",
		subtypes: {
			curse: "Curse",
			blessing: "Blessing",
			enchantment: "Enchantment",
			boon: "Boon"
		}
	}
	CONFIG.DND5E.featureTypes.injury = {
		label: "Injury",
		subtypes: {
			scar: "Scar"
		}
	}
	CONFIG.DND5E.featureTypes.path = {
			label: "Path Feature"
	}

    CONFIG.DND5E.featureTypes.subclass = {
        label: "Subclass Feature",
        subtypes:{
            channelDivinity:"Channel Divinity",
            improvedfightingStyle:"Improved Fighting Style",
            huntersPrey:"Hunter's Prey",
            ki:"Ki Ability",
			mutation: "Mutation",
			upgrade: "Inventor Upgrade",
			runeFormula: "Rune Formula"
        }
    }

    CONFIG.DND5E.featureTypes.feat = {
        label: "Feat",
        subtypes: {
            manuevers: "Manuevers"
        }
    }
	const index = CONFIG.DND5E.allowedActorFlags.indexOf("elvenAccuracy")
	if( index > 0 ) { CONFIG.DND5E.allowedActorFlags.splice(index, 1) }


	CONFIG.DND5E.consumableResources = [
		"resources.primary.value",
		"resources.secondary.value",
		"resources.tertiary.value",
		"resources.legact.value",
		"attributes.inspiration.value",
		"attributes.spellpoints.value",
		"attributes.ki.value",
		"attributes.sorcerypoints.value"
	]
	CONFIG.DND5E.spellSchools.psi = {
		label: 'KCCC.SchoolPsi',
		icon: 'modules/kibbles-compendium-of-craft-and-creation/assets/psionics.svg',
		fullKey: 'psionic',
		reference: '',
	}
}
