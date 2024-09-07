---
ns: CFX
apiset: server
---
## APPLY_FORCE_TO_ENTITY

```c
void APPLY_FORCE_TO_ENTITY(Entity entity, int forceType, float x, float y, float z, float offX, float offY, float offZ, int boneIndex, BOOL isDirectionRel, BOOL ignoreUpVec, BOOL isForceRel, BOOL p12, BOOL p13);
```

Applies a force to the specified entity.
**List of force types (p1)**:
```
public enum ForceType
{
MinForce = 0,
MaxForceRot = 1,
MinForce2 = 2,
MaxForceRot2 = 3,
ForceNoRot = 4,
ForceRotPlusForce = 5
}
```
Research/documentation on the gtaforums can be found [here](https://gtaforums.com/topic/885669-precisely-define-object-physics/) and [here](https://gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/).

**This is the server-side RPC native equivalent of the client native [APPLY\_FORCE\_TO\_ENTITY](?_0xC5F68BE9613E2D18).**

## Parameters
* **entity**: The entity you want to apply a force on
* **forceType**: See native description above for a list of commonly used values
* **x**: Force amount (X)
* **y**: Force amount (Y)
* **z**: Force amount (Z)
* **offX**: Rotation/offset force (X)
* **offY**: Rotation/offset force (Y)
* **offZ**: Rotation/offset force (Z)
* **boneIndex**: (Often 0) Entity bone index
* **isDirectionRel**: (Usually false) Vector defined in local (body-fixed) coordinate frame
* **ignoreUpVec**: (Usually true)
* **isForceRel**: (Usually true) When true, force gets multiplied with the objects mass and different objects will have the same acceleration
* **p12**: (Usually false)
* **p13**: (Usually true)

