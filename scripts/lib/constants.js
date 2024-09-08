const Constants = {
  moduleName: 'garhis-grotto-module',
  moduleDisplayName: 'Garhi\'s Grotto',
  path: `modules/${Constants.moduleName}`,
  art: `${Constants.path}/assets/art`,
  rules: 'gg-journal-reference',
  packs: {
	blueprints: {
		character: 'gg-blueprint-character',
		creature: 'gg-blueprint-creature',
		item: 'gg-blueprint-item',
		spell: 'gg-blueprint-spell',
		summons: 'gg-actor-summon'
	}
  },
  rolltableIds: {
    equipmentQuality: { packName: 'gg-table-specialized', uuid: 'DaIPaRPlgaMofa0X'}
  },
  equipmentQuality: [
    {
      name: 'equipmentQualitySuperb',
      priceMultiplier: 1.5,
      range: [1, 2],
    },
    {
      name: 'equipmentAlmostNew',
      priceMultiplier: 1.0,
      range: [3, 5],
    },
    {
      name: 'equipmentLowQualityPoorlyMadeHighUse',
      priceMultiplier: 0.5,
      range: [6, 55],
    },
    {
      name: 'equipmentTerribleQualityCrackedWarped',
      priceMultiplier: 0.1,
      range: [56, 65],
    },
    {
      name: 'equipmentDestroyed',
      priceMultiplier: 0.0,
      range: [66, 100],
    },
  ],
};

Constants.rootResources = `${Constants.path}/resources`;

export { Constants };
