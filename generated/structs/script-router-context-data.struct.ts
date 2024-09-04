export class ScriptRouterContextData {

	constructor(view: DataView) {
		if (view.byteLength !== 0) {
			throw new Error('Invalid view size');
		}
	}

	public static get dataView(): DataView {
		return new DataView(new ArrayBuffer(0));
	}
}