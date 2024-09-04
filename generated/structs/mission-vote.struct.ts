import { getStringFromDataView } from "../predef";

export class MissionVote {
	public readonly mid: string;
	public readonly numPlayers: number;
	public readonly voteChoice: number;
	public readonly result: number;
	public readonly timeOnline: number;
	public readonly voteDiff: boolean;
	public readonly endBoard: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.mid = getStringFromDataView(view, 0, 31);
		this.numPlayers = view.getInt32(32, true);
		this.voteChoice = view.getInt32(40, true);
		this.result = view.getInt32(48, true);
		this.timeOnline = view.getInt32(56, true);
		this.voteDiff = view.getInt8(64) === 1;
		this.endBoard = view.getInt8(72) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}