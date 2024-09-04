export class LeaderboardReadInfo {
	public readonly leaderboardId: number;
	public readonly leaderboardType: number;
	public readonly leaderboardIndex: number;
	public readonly returnedRows: number;
	public readonly totalRows: number;
	public readonly localGamerRowNumber: number;
	public readonly localGamerRankInt: number;
	public readonly localGamerRankFloat: number;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.leaderboardId = view.getInt32(0, true);
		this.leaderboardType = view.getInt32(8, true);
		this.leaderboardIndex = view.getInt32(16, true);
		this.returnedRows = view.getInt32(24, true);
		this.totalRows = view.getInt32(32, true);
		this.localGamerRowNumber = view.getInt32(40, true);
		this.localGamerRankInt = view.getInt32(48, true);
		this.localGamerRankFloat = view.getFloat32(56, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}