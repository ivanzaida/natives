import { getStringFromDataView } from "../predef";

export class SavemigrationAccount {
	public readonly accountId: number;
	public readonly statusCount: number;
	public readonly available: boolean;
	public readonly platform: string;
	public readonly gamerName: string;
	public readonly gamerHandle: string;
	public readonly errorCode: string;

	constructor(view: DataView) {
		if (view.byteLength !== 280) {
			throw new Error('Invalid view size');
		}
		this.accountId = view.getInt32(0, true);
		this.statusCount = view.getInt32(8, true);
		this.available = view.getInt8(16) === 1;
		this.platform = getStringFromDataView(view, 24, 87);
		this.gamerName = getStringFromDataView(view, 88, 151);
		this.gamerHandle = getStringFromDataView(view, 152, 215);
		this.errorCode = getStringFromDataView(view, 216, 279);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(280));
	}
}