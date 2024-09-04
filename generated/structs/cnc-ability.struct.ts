export class CncAbility {
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly team: number;
	public readonly role: number;
	public readonly roundNumber: number;
	public readonly stage: number;
	public readonly ability: number;
	public readonly vehicle: number;
	public readonly wantedLvl: number;

	constructor(view: DataView) {
		if (view.byteLength !== 72) {
			throw new Error('Invalid view size');
		}
		this.matchId1 = view.getInt32(0, true);
		this.matchId2 = view.getInt32(8, true);
		this.team = view.getInt32(16, true);
		this.role = view.getInt32(24, true);
		this.roundNumber = view.getInt32(32, true);
		this.stage = view.getInt32(40, true);
		this.ability = view.getInt32(48, true);
		this.vehicle = view.getInt32(56, true);
		this.wantedLvl = view.getInt32(64, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(72));
	}
}