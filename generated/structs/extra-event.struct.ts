export class ExtraEvent {
	public readonly missionName: number;
	public readonly pursuer: number;
	public readonly sessionId: number;
	public readonly endingReason: number;
	public readonly onFoot: boolean;
	public readonly time: number;
	public readonly timeLimit: number;
	public readonly pursuerHealth: number;

	constructor(view: DataView) {
		if (view.byteLength !== 64) {
			throw new Error('Invalid view size');
		}
		this.missionName = view.getInt32(0, true);
		this.pursuer = view.getInt32(8, true);
		this.sessionId = view.getInt32(16, true);
		this.endingReason = view.getInt32(24, true);
		this.onFoot = view.getInt8(32) === 1;
		this.time = view.getInt32(40, true);
		this.timeLimit = view.getInt32(48, true);
		this.pursuerHealth = view.getFloat32(56, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(64));
	}
}