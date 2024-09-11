export class FloatPtr {
    public readonly dataView: DataView;
    
    constructor() {
        this.dataView = new DataView(new ArrayBuffer(8));
    }

    public get value(): number {
        return this.dataView.getFloat32(0, true);
    }

    public static fromValue(value: number): FloatPtr {
        const ptr = new FloatPtr();
        ptr.dataView.setFloat32(0, value, true);
        return ptr;
    }
}