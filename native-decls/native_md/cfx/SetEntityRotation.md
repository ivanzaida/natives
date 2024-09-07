---
ns: CFX
apiset: server
---
## SET_ENTITY_ROTATION

```c
void SET_ENTITY_ROTATION(Entity entity, float pitch, float roll, float yaw, int rotationOrder, BOOL bDeadCheck);
```

Sets the rotation of a specified entity in the game world.
```
NativeDB Introduced: v323
```

**This is the server-side RPC native equivalent of the client native [SET\_ENTITY\_ROTATION](?_0x8524A8B0171D5E07).**

## Parameters
* **entity**: The entity to rotate.
* **pitch**: The pitch (X-axis) rotation in degrees.
* **roll**: The roll (Y-axis) rotation in degrees.
* **yaw**: The yaw (Z-axis) rotation in degrees.
* **rotationOrder**: Specifies the order in which yaw, pitch, and roll are applied, see [`GET_ENTITY_ROTATION`](#\_0xAFBD61CC738D9EB9) for the available rotation orders.
* **bDeadCheck**: Usually set to `true`. Determines whether to check if the entity is dead before applying the rotation.

