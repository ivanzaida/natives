export class MatchStartInfo {
	public readonly matchType: number;
	public readonly hashedMac: number;
	public readonly posixTime: number;
	public readonly oncalljointime: number;
	public readonly oncalljoinstate: number;
	public readonly missionDifficulty: number;
	public readonly missionLaunch: number;
	public readonly rootContentId: number;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.matchType = view.getInt32(0, true);
		this.hashedMac = view.getInt32(8, true);
		this.posixTime = view.getInt32(16, true);
		this.oncalljointime = view.getInt32(24, true);
		this.oncalljoinstate = view.getInt32(32, true);
		this.missionDifficulty = view.getInt32(40, true);
		this.missionLaunch = view.getInt32(48, true);
		this.rootContentId = view.getInt32(56, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}