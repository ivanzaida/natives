export class FloatPtr {
    private readonly _view: DataView;
    
    constructor(dataView: DataView) {
        this._view = dataView;
    }

    public get value(): number {
        return this._view.getFloat32(0, true);
    }
}