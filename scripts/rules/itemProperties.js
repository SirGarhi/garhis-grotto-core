
import { CONSTANTS } from "../lib/constants.js"

export function itemProperties() {
   //Define New Properties
   CONFIG.DND5E.itemProperties.ornate = {
      label: "Ornate",
      reference: ""
   },
   CONFIG.DND5E.itemProperties.fine = {
      label: "Finely Crafted",
      reference: ""
   },
   CONFIG.DND5E.itemProperties.mithril = {
      label: "Mithril",
      reference: ""
   },
   CONFIG.DND5E.itemProperties.masterwork = {
      label: "Masterwork",
      reference: ""
   },
   CONFIG.DND5E.itemProperties.coldIron = {
      label: "Cold Iron",
      reference: "",
      isPhysical: true
   },
   CONFIG.DND5E.itemProperties.trueSilver = {
      label: "True Silver",
      reference: "",
      isPhysical: true
   },
   CONFIG.DND5E.itemProperties.mounted = {
      label: "Mounted",
      reference: ""
   }

   // CONFIG.DND5E.ruleTypes.weaponProperty = {
   //    label: "Weapon Property",
   //    reference: "itemProperties"
   // }

   // Remove Invalid Properties
   // Special, Firearms, Heavy, Reloading, Loading
   CONFIG.DND5E.validProperties.weapon.delete("spc")
   CONFIG.DND5E.validProperties.weapon.delete("fir")
   CONFIG.DND5E.validProperties.weapon.delete("hvy")
   CONFIG.DND5E.validProperties.weapon.delete("rel")
   CONFIG.DND5E.validProperties.weapon.delete("lod")
   // Concentration
   CONFIG.DND5E.validProperties.weapon.delete("concentration")
   CONFIG.DND5E.validProperties.equipment.delete("concentration")
   CONFIG.DND5E.validProperties.tool.delete("concentration")

   // Adding New Valid Properties
   CONFIG.DND5E.validProperties.tool.add("masterwork")
   CONFIG.DND5E.validProperties.equipment.add("masterwork")
   CONFIG.DND5E.validProperties.weapon.add("masterwork")

   CONFIG.DND5E.validProperties.loot.add("ornate")
   CONFIG.DND5E.validProperties.loot.add("fine")

   CONFIG.DND5E.validProperties.equipment.add("mithril")
   CONFIG.DND5E.validProperties.equipment.add("ornate")

   CONFIG.DND5E.validProperties.weapon.add("coldIron")
   CONFIG.DND5E.validProperties.weapon.add("trueSilver")
   CONFIG.DND5E.validProperties.weapon.add("mounted")

}

/**
* Adds the weapons reference
*/
export function weaponRules(){
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
