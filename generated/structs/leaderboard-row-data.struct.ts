import { GamerHandle } from "./gamer-handle.struct";
import { getStringFromDataView } from "../predef";
import { Leaderboard2GroupHandle } from "./leaderboard2-group-handle.struct";

export class LeaderboardRowData {
	public readonly gamerHandle: GamerHandle;
	public readonly gamerName: string;
	public readonly groupSelector: Leaderboard2GroupHandle;
	public readonly clanId: number;
	public readonly clanName: string;
	public readonly clanTag: string;
	public readonly rank: number;
	public readonly numColumnValues: number;

	constructor(view: DataView) {
		if (view.byteLength !== 456) {
			throw new Error('Invalid view size');
		}
		this.gamerHandle = new GamerHandle(new DataView(view.buffer.slice(0, 104)));
		this.gamerName = getStringFromDataView(view, 104, 127);
		this.groupSelector = new Leaderboard2GroupHandle(new DataView(view.buffer.slice(128, 392)));
		this.clanId = view.getInt32(392, true);
		this.clanName = getStringFromDataView(view, 400, 431);
		this.clanTag = getStringFromDataView(view, 432, 439);
		this.rank = view.getInt32(440, true);
		this.numColumnValues = view.getInt32(448, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(456));
	}
}