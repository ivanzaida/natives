import { Leaderboard2Group } from "./leaderboard2-group.struct";

export class Leaderboard2GroupHandle {
	public readonly numGroups: number;
	public readonly group: Leaderboard2Group[];

	constructor(view: DataView) {
		if (view.byteLength !== 264) {
			throw new Error('Invalid view size');
		}
		this.numGroups = view.getInt32(0, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(264));
	}
}