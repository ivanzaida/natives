import { getStringFromDataView } from "../predef";
import { EShopItemCategories, EShopItemStorage } from "../enums";

export class ScriptCatalogItem {
	public readonly key: string;
	public readonly textTag: string;
	public readonly name: string;
	public readonly category: EShopItemCategories;
	public readonly price: number;
	public readonly stathash: number;
	public readonly storagetype: EShopItemStorage;
	public readonly bitshift: number;
	public readonly bitsize: number;
	public readonly statenumvalue: number;
	public readonly statvalue: number;

	constructor(view: DataView) {
		if (view.byteLength !== 208) {
			throw new Error('Invalid view size');
		}
		this.key = getStringFromDataView(view, 0, 63);
		this.textTag = getStringFromDataView(view, 64, 79);
		this.name = getStringFromDataView(view, 80, 143);
		this.category = view.getInt32(144, true);
		this.price = view.getInt32(152, true);
		this.stathash = view.getInt32(160, true);
		this.storagetype = view.getInt32(168, true);
		this.bitshift = view.getInt32(176, true);
		this.bitsize = view.getInt32(184, true);
		this.statenumvalue = view.getInt32(192, true);
		this.statvalue = view.getInt32(200, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(208));
	}
}