export class BusinessUtilBreakdown {
	public readonly bunkerFees: number;
	public readonly weedFees: number;
	public readonly methFees: number;
	public readonly docForgeFees: number;
	public readonly fakeCashFees: number;
	public readonly cocaineFees: number;
	public readonly hangarFees: number;
	public readonly nightclubFees: number;
	public readonly nightclubStaff: number;
	public readonly execOfficeFees: number;
	public readonly execAssistantFees: number;
	public readonly smallWhouseFees: number;
	public readonly mediumWhouseFees: number;
	public readonly largeWhouseFees: number;
	public readonly arcadeFees: number;
	public readonly autoShopFees: number;
	public readonly fixerAgencyFees: number;

	constructor(view: DataView) {
		if (view.byteLength !== 136) {
			throw new Error('Invalid view size');
		}
		this.bunkerFees = view.getInt32(0, true);
		this.weedFees = view.getInt32(8, true);
		this.methFees = view.getInt32(16, true);
		this.docForgeFees = view.getInt32(24, true);
		this.fakeCashFees = view.getInt32(32, true);
		this.cocaineFees = view.getInt32(40, true);
		this.hangarFees = view.getInt32(48, true);
		this.nightclubFees = view.getInt32(56, true);
		this.nightclubStaff = view.getInt32(64, true);
		this.execOfficeFees = view.getInt32(72, true);
		this.execAssistantFees = view.getInt32(80, true);
		this.smallWhouseFees = view.getInt32(88, true);
		this.mediumWhouseFees = view.getInt32(96, true);
		this.largeWhouseFees = view.getInt32(104, true);
		this.arcadeFees = view.getInt32(112, true);
		this.autoShopFees = view.getInt32(120, true);
		this.fixerAgencyFees = view.getInt32(128, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(136));
	}
}