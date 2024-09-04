import { getStringFromDataView } from "../predef";

export class BountyInboxMsgData {
	public readonly tl31FromGamerTag: string;
	public readonly tl31TargetGamerTag: string;
	public readonly outcome: number;
	public readonly cash: number;
	public readonly rank: number;
	public readonly time: number;

	constructor(view: DataView) {
		if (view.byteLength !== 96) {
			throw new Error('Invalid view size');
		}
		this.tl31FromGamerTag = getStringFromDataView(view, 0, 31);
		this.tl31TargetGamerTag = getStringFromDataView(view, 32, 63);
		this.outcome = view.getInt32(64, true);
		this.cash = view.getInt32(72, true);
		this.rank = view.getInt32(80, true);
		this.time = view.getInt32(88, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(96));
	}
}