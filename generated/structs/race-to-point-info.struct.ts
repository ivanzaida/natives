import { Vector3 } from "../predef";

export class RaceToPointInfo {
	public readonly locationHash: number;
	public readonly matchId: number;
	public readonly numPlayers: number;
	public readonly raceWon: boolean;
	public readonly raceStartPos: Vector3;
	public readonly raceEndPos: Vector3;

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.locationHash = view.getInt32(0, true);
		this.matchId = view.getInt32(8, true);
		this.numPlayers = view.getInt32(16, true);
		this.raceWon = view.getInt8(24) === 1;
		this.raceStartPos = new Vector3(view.getFloat32(32, true), view.getFloat32(40, true), view.getFloat32(48, true));
		this.raceEndPos = new Vector3(view.getFloat32(56, true), view.getFloat32(64, true), view.getFloat32(72, true));
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}