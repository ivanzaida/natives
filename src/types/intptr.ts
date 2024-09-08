export class IntPtr {
    private readonly _view: DataView;
    constructor(dataView: DataView) {
        this._view = dataView;
    }

    public get value(): number {
        return this._view.getInt32(0, true);
    }
}