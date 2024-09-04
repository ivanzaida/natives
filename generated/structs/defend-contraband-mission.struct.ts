import { BuyContrabandMission } from "./buy-contraband-mission.struct";

export class DefendContrabandMission {
	public readonly data: BuyContrabandMission;
	public readonly enemiesKilled: number;

	constructor(view: DataView) {
		if (view.byteLength !== 224) {
			throw new Error('Invalid view size');
		}
		this.data = new BuyContrabandMission(new DataView(view.buffer.slice(0, 216)));
		this.enemiesKilled = view.getInt32(216, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(224));
	}
}