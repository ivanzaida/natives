import { NetworkGetGamerStatusResultStruct } from "./network-get-gamer-status-result-struct.struct";

export class NetworkGetGamerStatusResultsStruct {
	public readonly aGamers: NetworkGetGamerStatusResultStruct[];

	constructor(view: DataView) {
		if (view.byteLength !== 11200) {
			throw new Error('Invalid view size');
		}
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(11200));
	}
}