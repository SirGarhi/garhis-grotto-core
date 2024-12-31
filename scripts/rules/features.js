import { CONSTANTS } from "../lib/constants.js"

export function features() {
	console.log("GG | Initializing Feature Types");

	CONFIG.DND5E.featureTypes.class = {
		label: "Class Feature",
		subtypes: {
         coreAbility: "Core Ability",
         coreFeature: "Core Feature",
         genericAbility: "Generic Ability",
         genericFeature: "Generic Feature",
         enhancement: "Feature Enhancement",
			arcaneShot: "Arcane Shot",
			artificerInfusion: "Artificer Infusion",
			bloodCurse: "Blood Curse",
         channelConviction: "Channel Conviction",
			channelDivinity: "Channel Divinity",
			combatManeuver: "Combat Maneuver",
			eldritchInvocation: "Eldritch Invocation",
         fightingStyle: "Fighting Style",
         huntersPrey:"Hunter's Prey",
         improvedfightingStyle:"Improved Fighting Style",
         inventorUpgrade: "Inventor Upgrade",
			ki: "Ki Ability",
			metamagic: "Metamagic Technique",
			mutation: "Mutation Formula",
         smiteOption: "Paladin Smite",
			precision: "Precision Attack",
         psionicDiscipline: "Psionic Discipline",
			psionicPower: "Psionic Power",
			psionicTalent: "Psionic Talent",
         runeFormula: "Rune Formula",
			warlockPact: "Warlock Pact",
         wild: "Wild Shape"
		}
	}
	CONFIG.DND5E.featureTypes.enchantment = {
		label: "Enchantment",
		subtypes: {
			artificerInfusion: "Artificer Infusion",
			crimsonRite: "Crimson Rite",
			runeFormula: "Runic Empowerment"
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
      label: "Path Feature",
      subtypes: {
         ability: "Ability",
         enhancement: "Enhancement"
      }
	}

   CONFIG.DND5E.featureTypes.feat = {
      label: "Feat",
      subtypes: {
         class: "Class",
         manuever: "Manuevers",
         upbringing: "Upbringing"
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
