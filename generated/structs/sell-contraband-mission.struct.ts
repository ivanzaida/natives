import { BuyContrabandMission } from "./buy-contraband-mission.struct";

export class SellContrabandMission {
	public readonly data: BuyContrabandMission;
	public readonly dropOffLocation: number;

	constructor(view: DataView) {
		if (view.byteLength !== 224) {
			throw new Error('Invalid view size');
		}
		this.data = new BuyContrabandMission(new DataView(view.buffer.slice(0, 216)));
		this.dropOffLocation = view.getInt32(216, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(224));
	}
}