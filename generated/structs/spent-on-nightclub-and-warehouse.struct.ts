export class SpentOnNightclubAndWarehouse {
	public readonly location: number;
	public readonly locationAmount: number;
	public readonly dj: number;
	public readonly djAmount: number;
	public readonly style: number;
	public readonly styleAmount: number;
	public readonly tint: number;
	public readonly tintAmount: number;
	public readonly lighting: number;
	public readonly lightingAmount: number;
	public readonly staff: number;
	public readonly staffAmount: number;
	public readonly security: number;
	public readonly securityAmount: number;
	public readonly equipment: number;
	public readonly equipmentAmount: number;
	public readonly whGarage2: number;
	public readonly whGarage2Amount: number;
	public readonly whGarage3: number;
	public readonly whGarage3Amount: number;
	public readonly whGarage4: number;
	public readonly whGarage4Amount: number;
	public readonly whGarage5: number;
	public readonly whGarage5Amount: number;
	public readonly whBasement2: number;
	public readonly whBasement2Amount: number;
	public readonly whBasement3: number;
	public readonly whBasement3Amount: number;
	public readonly whBasement4: number;
	public readonly whBasement4Amount: number;
	public readonly whBasement5: number;
	public readonly whBasement5Amount: number;
	public readonly whTechnician2: number;
	public readonly whTechnician2Amount: number;
	public readonly whTechnician3: number;
	public readonly whTechnician3Amount: number;
	public readonly whTechnician4: number;
	public readonly whTechnician4Amount: number;
	public readonly whTechnician5: number;
	public readonly whTechnician5Amount: number;
	public readonly name: number;
	public readonly nameAmount: number;
	public readonly podium: number;
	public readonly podiumAmount: number;
	public readonly dryice: number;
	public readonly dryiceAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 368) {
			throw new Error('Invalid view size');
		}
		this.location = view.getInt32(0, true);
		this.locationAmount = view.getInt32(8, true);
		this.dj = view.getInt32(16, true);
		this.djAmount = view.getInt32(24, true);
		this.style = view.getInt32(32, true);
		this.styleAmount = view.getInt32(40, true);
		this.tint = view.getInt32(48, true);
		this.tintAmount = view.getInt32(56, true);
		this.lighting = view.getInt32(64, true);
		this.lightingAmount = view.getInt32(72, true);
		this.staff = view.getInt32(80, true);
		this.staffAmount = view.getInt32(88, true);
		this.security = view.getInt32(96, true);
		this.securityAmount = view.getInt32(104, true);
		this.equipment = view.getInt32(112, true);
		this.equipmentAmount = view.getInt32(120, true);
		this.whGarage2 = view.getInt32(128, true);
		this.whGarage2Amount = view.getInt32(136, true);
		this.whGarage3 = view.getInt32(144, true);
		this.whGarage3Amount = view.getInt32(152, true);
		this.whGarage4 = view.getInt32(160, true);
		this.whGarage4Amount = view.getInt32(168, true);
		this.whGarage5 = view.getInt32(176, true);
		this.whGarage5Amount = view.getInt32(184, true);
		this.whBasement2 = view.getInt32(192, true);
		this.whBasement2Amount = view.getInt32(200, true);
		this.whBasement3 = view.getInt32(208, true);
		this.whBasement3Amount = view.getInt32(216, true);
		this.whBasement4 = view.getInt32(224, true);
		this.whBasement4Amount = view.getInt32(232, true);
		this.whBasement5 = view.getInt32(240, true);
		this.whBasement5Amount = view.getInt32(248, true);
		this.whTechnician2 = view.getInt32(256, true);
		this.whTechnician2Amount = view.getInt32(264, true);
		this.whTechnician3 = view.getInt32(272, true);
		this.whTechnician3Amount = view.getInt32(280, true);
		this.whTechnician4 = view.getInt32(288, true);
		this.whTechnician4Amount = view.getInt32(296, true);
		this.whTechnician5 = view.getInt32(304, true);
		this.whTechnician5Amount = view.getInt32(312, true);
		this.name = view.getInt32(320, true);
		this.nameAmount = view.getInt32(328, true);
		this.podium = view.getInt32(336, true);
		this.podiumAmount = view.getInt32(344, true);
		this.dryice = view.getInt32(352, true);
		this.dryiceAmount = view.getInt32(360, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(368));
	}
}