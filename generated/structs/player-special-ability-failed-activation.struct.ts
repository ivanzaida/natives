import { TPlayerIndex } from "../typedefs";

export class PlayerSpecialAbilityFailedActivation {
	public readonly playerIndex: TPlayerIndex;
	public readonly specialAbility: number;

	constructor(view: DataView) {
		if (view.byteLength !== 16) {
			throw new Error('Invalid view size');
		}
		this.playerIndex = view.getInt32(0, true);
		this.specialAbility = view.getInt32(8, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(16));
	}
}