class MODULE {
  
  static NAME = 'mcdm-beastheart';

  static build() {
    //all startup tasks needed before sub module initialization
    Hooks.on('mcdm-core.addApi', MODULE.#register);
  }


  static #register(_){
    const Util = game.modules.get('mcdm-core')?.api.Util;
    if(!Util) console.error('Could not initialize mcdm-beastheart module from mcdm-core -- no API provided!');

    Util.firstRunImport(MODULE.NAME, {'mcdm-beastheart.mcdm-the-beastheart': {journal: [['CfzGx00NqWYd1Z6g', true]]}})
  }
}

/*
  Initialize Module
*/
MODULE.build();

