import { getStringFromDataView } from "../predef";

export class AvailableSaveData {
	public readonly totalProgressMadeInSp: number;
	public readonly numberOfChars: number;
	public readonly lastchar: number;
	public readonly gamerName: string;
	public readonly gamerHandle: string;
	public readonly pvc: string;
	public readonly evc: string;
	public readonly bank: string;
	public readonly wallet: string[];
	public readonly xp: number[];
	public readonly isactive: number[];

	constructor(view: DataView) {
		if (view.byteLength !== 504) {
			throw new Error('Invalid view size');
		}
		this.totalProgressMadeInSp = view.getFloat32(0, true);
		this.numberOfChars = view.getInt32(8, true);
		this.lastchar = view.getInt32(16, true);
		this.gamerName = getStringFromDataView(view, 24, 87);
		this.gamerHandle = getStringFromDataView(view, 88, 151);
		this.pvc = getStringFromDataView(view, 152, 215);
		this.evc = getStringFromDataView(view, 216, 279);
		this.bank = getStringFromDataView(view, 280, 343);
		this.wallet = [getStringFromDataView(view, 344, 407), getStringFromDataView(view, 408, 471)];
		this.xp = [view.getInt32(472, true), view.getInt32(480, true)];
		this.isactive = [view.getInt32(488, true), view.getInt32(496, true)];
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(504));
	}
}