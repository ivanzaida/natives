export class CncLobby {
	public readonly matchId1: number;
	public readonly matchId2: number;
	public readonly team: number;
	public readonly gameRank: number;
	public readonly progRank: number;
	public readonly copRole: number;
	public readonly copWeapons: number;
	public readonly copClothing: number;
	public readonly copTattoos: number;
	public readonly copEmote: number;
	public readonly copVehicle: number;
	public readonly copAbilities: number;
	public readonly crookRole: number;
	public readonly crookWeapons: number;
	public readonly crookClothing: number;
	public readonly crookTattoos: number;
	public readonly crookEmote: number;
	public readonly crookVehicle: number;
	public readonly crookAbilities: number;
	public readonly endReason: number;
	public readonly joinFrom: number;
	public readonly copSlot: number;
	public readonly crookSlot: number;

	constructor(view: DataView) {
		if (view.byteLength !== 184) {
			throw new Error('Invalid view size');
		}
		this.matchId1 = view.getInt32(0, true);
		this.matchId2 = view.getInt32(8, true);
		this.team = view.getInt32(16, true);
		this.gameRank = view.getInt32(24, true);
		this.progRank = view.getInt32(32, true);
		this.copRole = view.getInt32(40, true);
		this.copWeapons = view.getInt32(48, true);
		this.copClothing = view.getInt32(56, true);
		this.copTattoos = view.getInt32(64, true);
		this.copEmote = view.getInt32(72, true);
		this.copVehicle = view.getInt32(80, true);
		this.copAbilities = view.getInt32(88, true);
		this.crookRole = view.getInt32(96, true);
		this.crookWeapons = view.getInt32(104, true);
		this.crookClothing = view.getInt32(112, true);
		this.crookTattoos = view.getInt32(120, true);
		this.crookEmote = view.getInt32(128, true);
		this.crookVehicle = view.getInt32(136, true);
		this.crookAbilities = view.getInt32(144, true);
		this.endReason = view.getInt32(152, true);
		this.joinFrom = view.getInt32(160, true);
		this.copSlot = view.getInt32(168, true);
		this.crookSlot = view.getInt32(176, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(184));
	}
}