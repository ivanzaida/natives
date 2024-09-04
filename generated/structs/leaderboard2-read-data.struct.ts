import { ELeaderboards2TypesEnum } from "../enums";
import { Leaderboard2GroupHandle } from "./leaderboard2-group-handle.struct";

export class Leaderboard2ReadData {
	public readonly leaderboardId: number;
	public readonly type: ELeaderboards2TypesEnum;
	public readonly clanId: number;
	public readonly groupSelector: Leaderboard2GroupHandle;

	constructor(view: DataView) {
		if (view.byteLength !== 288) {
			throw new Error('Invalid view size');
		}
		this.leaderboardId = view.getInt32(0, true);
		this.type = view.getInt32(8, true);
		this.clanId = view.getInt32(16, true);
		this.groupSelector = new Leaderboard2GroupHandle(new DataView(view.buffer.slice(24, 288)));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(288));
	}
}