import { getStringFromDataView } from "../predef";

export class NjvsVote {
	public readonly mid: string;
	public readonly numPlayers: number;
	public readonly voteChoice: string;
	public readonly result: string;
	public readonly timeOnline: number;
	public readonly voteDiff: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 120) {
			throw new Error('Invalid view size');
		}
		this.mid = getStringFromDataView(view, 0, 31);
		this.numPlayers = view.getInt32(32, true);
		this.voteChoice = getStringFromDataView(view, 40, 71);
		this.result = getStringFromDataView(view, 72, 103);
		this.timeOnline = view.getInt32(104, true);
		this.voteDiff = view.getInt8(112) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(120));
	}
}