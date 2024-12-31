import { CONSTANTS } from "../lib/constants.js"
export function references(){
   skillsRef()
   propertiesRef()
//combatRef()
   //conditionsRef()
   damageRef()
   CONFIG.DND5E.sourceBooks.GarhisGrotto = "Garhi's Grotto"
   CONFIG.DND5E.sourceBooks.ELKAN = "Elkan 5e"
   CONFIG.DND5E.sourceBooks.KCCC = "Kibbles' Compendium of Craft and Creation"
   CONFIG.DND5E.sourceBooks.KCLL = "Kibbles' Compendium of Legacies and Legends"
   CONFIG.DND5E.sourceBooks.KSC = "Kibbles' Spell Compendium"
}

export function skillsRef(){
    console.log("GG |  Setting Skills References")

   //Reference on character sheet
      //physical
   CONFIG.DND5E.skills.ath.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#athletics`
   CONFIG.DND5E.skills.end.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#endurance`
   CONFIG.DND5E.skills.acr.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#acrobatics`
      //combat
   CONFIG.DND5E.skills.wrs.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#wrestling`
   CONFIG.DND5E.skills.spc.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#spellcraft`
   CONFIG.DND5E.skills.psi.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#psionics`
      //knowledge
   CONFIG.DND5E.skills.his.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#history`
   CONFIG.DND5E.skills.arc.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#arcane-lore`
   CONFIG.DND5E.skills.nat.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#primal-lore`
   CONFIG.DND5E.skills.occ.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#occult-lore`
   CONFIG.DND5E.skills.bar.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#bardic-lore`
      // Exploration
   CONFIG.DND5E.skills.prc.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#perception`
   CONFIG.DND5E.skills.inv.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#investigation`
   CONFIG.DND5E.skills.dng.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#dungeoneering`
   CONFIG.DND5E.skills.stw.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#streetwise`
   CONFIG.DND5E.skills.sur.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#survival`
      // Social
   CONFIG.DND5E.skills.ins.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#insight`
   CONFIG.DND5E.skills.dec.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#deception`
   CONFIG.DND5E.skills.itm.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#intimidation`
   CONFIG.DND5E.skills.per.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#persuasion`
      // Skullduggery
   CONFIG.DND5E.skills.ste.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#stealth`
   CONFIG.DND5E.skills.slt.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#sleight-of-hand`
      // Specialty
   CONFIG.DND5E.skills.ani.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#animal-handling`
   CONFIG.DND5E.skills.med.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#medicine`
   CONFIG.DND5E.skills.prf.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#performance`
   CONFIG.DND5E.skills.veh.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#vehicle-handling"`



   //Reference to these using &Reference
      //physical
 	CONFIG.DND5E.enrichmentLookup.skills.ath.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#athletics`
	CONFIG.DND5E.enrichmentLookup.skills.end.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#endurance`
	CONFIG.DND5E.enrichmentLookup.skills.acr.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#acrobatics`
      //combat
	CONFIG.DND5E.enrichmentLookup.skills.wrs.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#wrestling`
	CONFIG.DND5E.enrichmentLookup.skills.spc.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#spellcraft`
	CONFIG.DND5E.enrichmentLookup.skills.psi.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#psionics`
		//knowledge
	CONFIG.DND5E.enrichmentLookup.skills.his.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#history`
   CONFIG.DND5E.enrichmentLookup.skills.arc.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#arcane-lore`
	CONFIG.DND5E.enrichmentLookup.skills.nat.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#primal-lore`
	CONFIG.DND5E.enrichmentLookup.skills.occ.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#occult-lore`
   CONFIG.DND5E.enrichmentLookup.skills.bar.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#bardic-lore`
		// Exploration
	CONFIG.DND5E.enrichmentLookup.skills.prc.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#perception`
	CONFIG.DND5E.enrichmentLookup.skills.inv.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#investigation`
	CONFIG.DND5E.enrichmentLookup.skills.dng.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#dungeoneering`
	CONFIG.DND5E.enrichmentLookup.skills.stw.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#streetwise`
	CONFIG.DND5E.enrichmentLookup.skills.sur.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#survival`
		// Social
	CONFIG.DND5E.enrichmentLookup.skills.ins.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#insight`
	CONFIG.DND5E.enrichmentLookup.skills.dec.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#deception`
	CONFIG.DND5E.enrichmentLookup.skills.itm.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#intimidation`
	CONFIG.DND5E.enrichmentLookup.skills.per.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#persuasion`
		// Skullduggery
	CONFIG.DND5E.enrichmentLookup.skills.ste.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#stealth`
	CONFIG.DND5E.enrichmentLookup.skills.slt.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#sleight-of-hand`
		// Specialty
	CONFIG.DND5E.enrichmentLookup.skills.ani.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#animal-handling`
	CONFIG.DND5E.enrichmentLookup.skills.med.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#medicine`
	CONFIG.DND5E.enrichmentLookup.skills.prf.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#performance`
	CONFIG.DND5E.enrichmentLookup.skills.veh.reference = `${CONSTANTS.rulesRef}.JournalEntry.BliVG3D21TbwRc58.JournalEntryPage.9PslP0x9xOgEtPRv#vehicle-handling"`
}

export function combatRef(){
    console.log("GG |  Setting Combat References")
    CONFIG.DND5E.rules.attack = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.IauYsEM9MxyZCIdc`
    CONFIG.DND5E.rules.opportunityattacks = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.5zEWVU1yw2Sv3hSI`
    CONFIG.DND5E.rules.dodge = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.2Fxm6ATuDUyDIrt7`
    CONFIG.DND5E.rules.dash = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.6UWCRY83phLnc7cF`
    CONFIG.DND5E.rules.disengage = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.bYoY0gZQArDraXRs`
    CONFIG.DND5E.rules.help = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.ZdoIWQgcoqcHlZSf`
    CONFIG.DND5E.rules.hide = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.57VIppmrOewNVKF5`
    CONFIG.DND5E.rules.ready = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.Uo0qriXzk4YInJrl`
    CONFIG.DND5E.rules.search = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.bRo3ci56JJiuxYk8`
    CONFIG.DND5E.rules.surprise = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.QOZeW0m8RCdVg6UE`
    CONFIG.DND5E.rules.unarmedstrike = `${CONSTANTS.classRef}.Item.pRDNsHpNLLk1Qq58`
    CONFIG.DND5E.rules.twoweaponfighting = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.XLZbNEhoayCw5bk8`
}

export function propertiesRef() {
   console.log("GG | Setting Item Property References")
   CONFIG.DND5E.rules.adamantine = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.ammunition = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.coldIron = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.finesse = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.lightw = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.magicw = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.mounted = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.reach = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.thrown = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.handed = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.silver = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.unwieldy = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
   CONFIG.DND5E.rules.versatile = "Compendium.garhis-grotto-core.gg-reference-rule.JournalEntry.qNY9JQFSpFy5syoP"
}

export function conditionsRef(){
   console.log("GG |  Setting Condition References")
   //Replace References
   CONFIG.DND5E.conditionTypes.blinded.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.SXTqmewRrCwPS8yW`
   CONFIG.DND5E.conditionTypes.charmed.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.ieDILSkRbu9r8pmZ`
   CONFIG.DND5E.conditionTypes.deafened.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.AHgIwuNdpp0wKF2y`
   CONFIG.DND5E.conditionTypes.frightened.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.ruwpm6lorwoPJsmt`
   CONFIG.DND5E.conditionTypes.grappled.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.zaI1nuc41wANKoFX`
   CONFIG.DND5E.conditionTypes.incapacitated.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.PXI4uoXj7x6IsDXt`
   CONFIG.DND5E.conditionTypes.invisible.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.GfTD899cLRZxGG1H`
   CONFIG.DND5E.conditionTypes.paralyzed.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.w5RoCYZIujGYuiYt`
   CONFIG.DND5E.conditionTypes.petrified.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.n0BX8pLecgm7E3uH`
   CONFIG.DND5E.conditionTypes.poisoned.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.fzEf89TZ1WN90bFv`
   CONFIG.DND5E.conditionTypes.prone.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.y8L5Uq1jMVDsQjaS`
   CONFIG.DND5E.conditionTypes.restrained.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.DiWd3u4HCD7JEw8V`
   CONFIG.DND5E.conditionTypes.stunned.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.JV8kbMo0p5S1YXUR`
   CONFIG.DND5E.conditionTypes.unconscious.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.ZwhWWUPJvpFCz8sK`
   CONFIG.DND5E.conditionTypes.exhaustion.reference =`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.mPzXN6MW8L6ePFmq`

   //Concentration
   CONFIG.DND5E.spellTags.concentration.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.4ZOHN6tGvj54J6Kv`

   //TODO: Talk about these condition
   CONFIG.DND5E.rules.concentrating = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.zY2CHn81NAqSs6gh`
   CONFIG.DND5E.spellTags.concentration.reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.4ZOHN6tGvj54J6Kv`
   CONFIG.DND5E.rules.surprise = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.QOZeW0m8RCdVg6UE`


   //Cover
   CONFIG.DND5E.rules.cover = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.d2hBqe6EYHX2mxKD`
   CONFIG.DND5E.rules.halfcover = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.1BmTbnT3xDPqv9dq`
   CONFIG.DND5E.rules.threequarterscover = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.82ph4sMqvhxjLbiw`
   CONFIG.DND5E.rules.totalcover = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.hY5s70xMeG5ISFUA`


   CONFIG.statusEffects.find(effect => effect.id === "blinded").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.SXTqmewRrCwPS8yW`
   CONFIG.statusEffects.find(effect => effect.id === "charmed").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.ieDILSkRbu9r8pmZ`
   CONFIG.statusEffects.find(effect => effect.id === "deafened").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.AHgIwuNdpp0wKF2y`
   CONFIG.statusEffects.find(effect => effect.id === "exhaustion").reference =`${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.mPzXN6MW8L6ePFmq`
   CONFIG.statusEffects.find(effect => effect.id === "frightened").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.ruwpm6lorwoPJsmt`
   CONFIG.statusEffects.find(effect => effect.id === "grappled").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.zaI1nuc41wANKoFX`
   CONFIG.statusEffects.find(effect => effect.id === "incapacitated").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.PXI4uoXj7x6IsDXt`
   CONFIG.statusEffects.find(effect => effect.id === "invisible").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.GfTD899cLRZxGG1H`
   CONFIG.statusEffects.find(effect => effect.id === "paralyzed").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.w5RoCYZIujGYuiYt`
   CONFIG.statusEffects.find(effect => effect.id === "petrified").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.n0BX8pLecgm7E3uH`
   CONFIG.statusEffects.find(effect => effect.id === "poisoned").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.fzEf89TZ1WN90bFv`
   CONFIG.statusEffects.find(effect => effect.id === "prone").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.y8L5Uq1jMVDsQjaS`
   CONFIG.statusEffects.find(effect => effect.id === "restrained").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.DiWd3u4HCD7JEw8V`
   CONFIG.statusEffects.find(effect => effect.id === "surprised").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.QOZeW0m8RCdVg6UE`
   CONFIG.statusEffects.find(effect => effect.id === "stunned").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.JV8kbMo0p5S1YXUR`
   CONFIG.statusEffects.find(effect => effect.id === "unconscious").reference = `${CONSTANTS.rulesRef}.JournalEntry.eS0uzU55fprQJqIt.JournalEntryPage.ZwhWWUPJvpFCz8sK`

}

export function damageRef(){
   console.log("GG |  Setting Damage Type References")
   CONFIG.DND5E.damageTypes.acid.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.VKYjrEO909FEbScG`
   CONFIG.DND5E.damageTypes.bludgeoning.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.DLkhjyAJK6R1lPrA`
   CONFIG.DND5E.damageTypes.cold.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.qnctn4Gcve0px0wU`
   CONFIG.DND5E.damageTypes.lightning.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.inNJv5hIxFOb0atF`
   CONFIG.DND5E.damageTypes.fire.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.8ZmYsUdejP3wal1K`
   CONFIG.DND5E.damageTypes.force.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.hnbcchv13gA0ev8j`
   CONFIG.DND5E.damageTypes.necrotic.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.3WAI4TbrSC8FS637`
   CONFIG.DND5E.damageTypes.piercing.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.cEnkMbQascSe6lKU`
   CONFIG.DND5E.damageTypes.poison.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.Mh0WKYgypPl7hKSo`
   CONFIG.DND5E.damageTypes.psychic.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.DiUkrQVun34pAK4Z`
   CONFIG.DND5E.damageTypes.radiant.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.1iv5sIBnKoFJrhMH`
   CONFIG.DND5E.damageTypes.slashing.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.yxrHRnhVdSzKtzyZ`
   CONFIG.DND5E.damageTypes.thunder.reference = `${CONSTANTS.rulesRef}.JournalEntry.C3b7Ref9xEVn34Gf.JournalEntryPage.kPmCUWoSWv3lEW3t`
}
