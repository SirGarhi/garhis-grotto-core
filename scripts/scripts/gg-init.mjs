import { armor } from "./rules/armor.mjs";
import { language } from "./rules/language.mjs";
import { formating } from "./rules/format.mjs";
import { tools } from "./rules/tools.mjs";
import { weapons } from "./rules/weapon.mjs";
import { references } from "./rules/references.mjs";
import { modules } from "./moduleIntegrations/_modulesInit.mjs";


export function init(){
    console.warn("GG | Init")
    //tools();
    //weapons();
    //armor();
    //language();
    //icons()
    //formating()
    //references()
    // TODO: the following below
    // speed()
    modules()
} 
