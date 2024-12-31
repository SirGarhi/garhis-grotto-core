export class Effects {

	static async initializeEffects() {
		GarhisGrotto.ce = game.dfreds.effectInterface;
		const ce = GarhisGrotto.ce;
		let ceDark = ce.findEffect('gg-effect-dark');
		if (!ceDark) {
			dark = 'icons/skills/melee/weapons-crossed-swords-black-gray.webp'
			dimLight = 'icons/skills/melee/weapons-crossed-swords-black.webp'
			const dark = {
				label: "Darkness",
				icon: GarhisGrotto.Icons.dark,
				changes: [],
				flags: {
					convenientDescription: 'In complete darkness.'
				}
			}

			const dimLight = {
				label: "Dim Light",
				icon: GarhisGrotto.Icons.dimLight,
				changes: [],
				flags: {
					convenientDescription: 'In dim light.'
				}
			}
			ce.createNewEffects({ folder: 'GG-Effects', activeEffects: [ dark, dimLight ]})
		}
	}

	static async clearEffects(selected_token) {
		const ce = GarhisGrotto.ce;
		let foundEffects = true;
		const uuid = selected_token.actor.uuid;
		// edge case, if there are multiple effects on the token
		while (foundEffects) {
			if (ce.hasEffect({ effectName: 'Darkness', uuid })) {
				ce.removeEffect({ effectName: 'Darkness', uuid });
			} else if (ce.hasEffect({ effectName: 'Dim Light', uuid })) {
				ce.removeEffect({ effectName: 'Dim Light', uuid });
			} else {
				foundEffects = false;
			}
		}
	}

	static async addDark(selected_token) {
		const ce = GarhisGrotto.ce;
		const uuid = selected_token.actor.uuid;
		if (ce.hasEffect({ name: 'Darkness', uuid })) {
			await ce.addEffect({ effectName: 'Darkness', uuid });
		}
	}

	static async addDim(selected_token) {
		const ce = GarhisGrotto.ce;
		const uuid = selected_token.actor.uuid;
		if (ce.hasEffect({ name: 'Dim Light', uuid })) {
			await ce.addEffect({ effectName: 'Dim Light', uuid });
		}
	}
}
