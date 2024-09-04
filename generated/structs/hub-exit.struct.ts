export class HubExit {
	public readonly hubId: number;
	public readonly type: number;
	public readonly bossId1: number;
	public readonly bossId2: number;
	public readonly playerRole: number;
	public readonly pulled: number;
	public readonly crewId: number;
	public readonly duration: number;
	public readonly dre: boolean;
	public readonly playerCount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.hubId = view.getInt32(0, true);
		this.type = view.getInt32(8, true);
		this.bossId1 = view.getInt32(16, true);
		this.bossId2 = view.getInt32(24, true);
		this.playerRole = view.getInt32(32, true);
		this.pulled = view.getInt32(40, true);
		this.crewId = view.getInt32(48, true);
		this.duration = view.getInt32(56, true);
		this.dre = view.getInt8(64) === 1;
		this.playerCount = view.getInt32(72, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}