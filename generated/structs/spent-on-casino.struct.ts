export class SpentOnCasino {
	public readonly masterBedroom: number;
	public readonly masterBedroomAmount: number;
	public readonly lounge: number;
	public readonly loungeAmount: number;
	public readonly spa: number;
	public readonly spaAmount: number;
	public readonly barParty: number;
	public readonly barPartyAmount: number;
	public readonly dealer: number;
	public readonly dealerAmount: number;
	public readonly extraBedroom: number;
	public readonly extraBedroomAmount: number;
	public readonly extraBedroom2: number;
	public readonly extraBedroom2Amount: number;
	public readonly mediaRoom: number;
	public readonly mediaRoomAmount: number;
	public readonly garage: number;
	public readonly garageAmount: number;
	public readonly colour: number;
	public readonly colourAmount: number;
	public readonly graphics: number;
	public readonly graphicsAmount: number;
	public readonly office: number;
	public readonly officeAmount: number;
	public readonly preset: number;
	public readonly presetAmount: number;

	constructor(view: DataView) {
		if (view.byteLength !== 208) {
			throw new Error('Invalid view size');
		}
		this.masterBedroom = view.getInt32(0, true);
		this.masterBedroomAmount = view.getInt32(8, true);
		this.lounge = view.getInt32(16, true);
		this.loungeAmount = view.getInt32(24, true);
		this.spa = view.getInt32(32, true);
		this.spaAmount = view.getInt32(40, true);
		this.barParty = view.getInt32(48, true);
		this.barPartyAmount = view.getInt32(56, true);
		this.dealer = view.getInt32(64, true);
		this.dealerAmount = view.getInt32(72, true);
		this.extraBedroom = view.getInt32(80, true);
		this.extraBedroomAmount = view.getInt32(88, true);
		this.extraBedroom2 = view.getInt32(96, true);
		this.extraBedroom2Amount = view.getInt32(104, true);
		this.mediaRoom = view.getInt32(112, true);
		this.mediaRoomAmount = view.getInt32(120, true);
		this.garage = view.getInt32(128, true);
		this.garageAmount = view.getInt32(136, true);
		this.colour = view.getInt32(144, true);
		this.colourAmount = view.getInt32(152, true);
		this.graphics = view.getInt32(160, true);
		this.graphicsAmount = view.getInt32(168, true);
		this.office = view.getInt32(176, true);
		this.officeAmount = view.getInt32(184, true);
		this.preset = view.getInt32(192, true);
		this.presetAmount = view.getInt32(200, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(208));
	}
}