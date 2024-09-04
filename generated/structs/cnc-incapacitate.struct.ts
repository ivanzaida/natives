export class CncIncapacitate {
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly incType: number;
	public readonly crookRole: number;
	public readonly crookProgRank: number;
	public readonly crookVehicle: number;
	public readonly copId: number;
	public readonly copRole: number;
	public readonly copProgRank: number;
	public readonly copWeapon: number;
	public readonly copVehicle: number;
	public readonly vOffender: boolean;
	public readonly wantedLvl: number;

	constructor(view: DataView) {
		if (view.byteLength !== 104) {
			throw new Error('Invalid view size');
		}
		this.matchId1 = view.getInt32(0, true);
		this.matchId2 = view.getInt32(8, true);
		this.incType = view.getInt32(16, true);
		this.crookRole = view.getInt32(24, true);
		this.crookProgRank = view.getInt32(32, true);
		this.crookVehicle = view.getInt32(40, true);
		this.copId = view.getInt32(48, true);
		this.copRole = view.getInt32(56, true);
		this.copProgRank = view.getInt32(64, true);
		this.copWeapon = view.getInt32(72, true);
		this.copVehicle = view.getInt32(80, true);
		this.vOffender = view.getInt8(88) === 1;
		this.wantedLvl = view.getInt32(96, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(104));
	}
}