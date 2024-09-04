export class CncWork {
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly jobId: number;
	public readonly roundNumber: number;
	public readonly role: number;
	public readonly workType: number;
	public readonly workName: number;
	public readonly endReason: number;
	public readonly dropOff: number;
	public readonly amount: number;
	public readonly bonus: boolean;

	constructor(view: DataView) {
		if (view.byteLength !== 88) {
			throw new Error('Invalid view size');
		}
		this.matchId1 = view.getInt32(0, true);
		this.matchId2 = view.getInt32(8, true);
		this.jobId = view.getInt32(16, true);
		this.roundNumber = view.getInt32(24, true);
		this.role = view.getInt32(32, true);
		this.workType = view.getInt32(40, true);
		this.workName = view.getInt32(48, true);
		this.endReason = view.getInt32(56, true);
		this.dropOff = view.getInt32(64, true);
		this.amount = view.getInt32(72, true);
		this.bonus = view.getInt8(80) === 1;
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(88));
	}
}