import { DefendContrabandMission } from "./defend-contraband-mission.struct";

export class RecoverContrabandMission {
	public readonly data: DefendContrabandMission;
	public readonly lostDestroyedOrRecovered: number;

	constructor(view: DataView) {
		if (view.byteLength !== 232) {
			throw new Error('Invalid view size');
		}
		this.data = new DefendContrabandMission(new DataView(view.buffer.slice(0, 224)));
		this.lostDestroyedOrRecovered = view.getInt32(224, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(232));
	}
}