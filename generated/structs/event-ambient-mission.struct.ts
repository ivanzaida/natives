export class EventAmbientMission {
	public readonly uid0: number;
	public readonly uid1: number;
	public readonly playersNotified: number;
	public readonly playersParticipating: number;
	public readonly playersLeftInProgress: number;
	public readonly endReason: number;
	public readonly cashEarned: number;
	public readonly rpEarned: number;
	public readonly notifiedTime: number;
	public readonly startTime: number;
	public readonly timeTakenToComplete: number;
	public readonly timeTakenForObjective: number;

	constructor(view: DataView) {
		if (view.byteLength !== 96) {
			throw new Error('Invalid view size');
		}
		this.uid0 = view.getInt32(0, true);
		this.uid1 = view.getInt32(8, true);
		this.playersNotified = view.getInt32(16, true);
		this.playersParticipating = view.getInt32(24, true);
		this.playersLeftInProgress = view.getInt32(32, true);
		this.endReason = view.getInt32(40, true);
		this.cashEarned = view.getInt32(48, true);
		this.rpEarned = view.getInt32(56, true);
		this.notifiedTime = view.getInt32(64, true);
		this.startTime = view.getInt32(72, true);
		this.timeTakenToComplete = view.getInt32(80, true);
		this.timeTakenForObjective = view.getInt32(88, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(96));
	}
}