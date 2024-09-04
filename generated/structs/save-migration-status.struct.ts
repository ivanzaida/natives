import { getStringFromDataView } from "../predef";

export class SaveMigrationStatus {
	public readonly inProgress: boolean;
	public readonly state: string;
	public readonly transactionId: number;

	constructor(view: DataView) {
		if (view.byteLength !== 80) {
			throw new Error('Invalid view size');
		}
		this.inProgress = view.getInt8(0) === 1;
		this.state = getStringFromDataView(view, 8, 71);
		this.transactionId = view.getInt32(72, true);
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(80));
	}
}