export class Arcade {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly garage: number;
	public readonly garageAmount: number;
	public readonly sleepingQuarter: number;
	public readonly sleepingQuarterAmount: number;
	public readonly droneStation: number;
	public readonly droneStationAmount: number;
	public readonly businessManagement: number;
	public readonly businessManagementAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly mural: number;
	public readonly muralAmount: number;
	public readonly floor: number;
	public readonly floorAmount: number;
	public readonly neonArt: number;
	public readonly neonArtAmount: number;
	public readonly highscoreScreen: number;
	public readonly highscoreScreenAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 160) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.garage = view.getInt32(16, true);
		this.garageAmount = view.getInt32(24, true);
		this.sleepingQuarter = view.getInt32(32, true);
		this.sleepingQuarterAmount = view.getInt32(40, true);
		this.droneStation = view.getInt32(48, true);
		this.droneStationAmount = view.getInt32(56, true);
		this.businessManagement = view.getInt32(64, true);
		this.businessManagementAmount = view.getInt32(72, true);
		this.style = view.getInt32(80, true);
		this.styleAmount = view.getInt32(88, true);
		this.mural = view.getInt32(96, true);
		this.muralAmount = view.getInt32(104, true);
		this.floor = view.getInt32(112, true);
		this.floorAmount = view.getInt32(120, true);
		this.neonArt = view.getInt32(128, true);
		this.neonArtAmount = view.getInt32(136, true);
		this.highscoreScreen = view.getInt32(144, true);
		this.highscoreScreenAmount = view.getInt32(152, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(160));
	}
}