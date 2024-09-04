import { Leaderboard2GroupHandle } from "./leaderboard2-group-handle.struct";

export class LeaderboardUpdateData {
	public readonly leaderboardId: number;
	public readonly clanId: number;
	public readonly groupSelector: Leaderboard2GroupHandle;

	constructor(view: DataView) {
		if (view.byteLength !== 280) {
			throw new Error('Invalid view size');
		}
		this.leaderboardId = view.getInt32(0, true);
		this.clanId = view.getInt32(8, true);
		this.groupSelector = new Leaderboard2GroupHandle(new DataView(view.buffer.slice(16, 280)));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(280));
	}
}