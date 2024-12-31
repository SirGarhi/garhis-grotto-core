const moduleId = 'garhis-grotto-core'
const moduleName = "Garhi's Grotto | Core"
const CONSTANTS = {
	module: {
		id: moduleId,
		name: moduleName
	},
	path: 'modules/garhis-grotto-core/',
	art: `modules/garhis-grotto-resources/assets/art/`,
	rulesRef: `Compendium.${moduleId}.gg-reference-rule`,
	itemRef: `Compendium.${moduleId}.gg-item-reference`,
	classFeatRef: `Compendium.${moduleId}.gg-feat-class`,
	packs: {
		blueprints: {
			character: 'gg-blueprint-character',
			creature: 'gg-blueprint-creature',
			item: 'gg-blueprint-item',
			spell: 'gg-blueprint-spell',
			summons: 'gg-actor-summon'
		}
	},
   rolltables: {
	  equipmentQuality: { packName: 'gg-table-specialized', uuid: 'DaIPaRPlgaMofa0X'}
   },
   equipmentQuality: [
	  {
		 name: 'equipmentQualityMasterwork',
		 priceMultiplier: 2.0,
		 range: [1, 3],
	  },
	  {
		 name: 'equipmentQualitySuperb',
		 priceMultiplier: 1.5,
		 range: [4, 10],
	  },
	  {
		 name: 'equipmentAlmostNew',
		 priceMultiplier: 1.0,
		 range: [11, 20],
	  },
	  {
		 name: 'equipmentLowQualityPoorlyMadeHighUse',
		 priceMultiplier: 0.5,
		 range: [21, 60],
	  },
	  {
		 name: 'equipmentTerribleQualityCrackedWarped',
		 priceMultiplier: 0.1,
		 range: [61, 80],
	  },
	  {
		 name: 'equipmentDestroyed',
		 priceMultiplier: 0.0,
		 range: [81, 100],
	  },
   ],
};

export { CONSTANTS };
