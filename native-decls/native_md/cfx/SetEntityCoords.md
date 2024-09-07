---
ns: CFX
apiset: server
---
## SET_ENTITY_COORDS

```c
void SET_ENTITY_COORDS(Entity entity, float xPos, float yPos, float zPos, BOOL alive, BOOL deadFlag, BOOL ragdollFlag, BOOL clearArea);
```

Sets the coordinates (world position) for a specified entity, offset by the radius of the entity on the Z axis.

**This is the server-side RPC native equivalent of the client native [SET\_ENTITY\_COORDS](?_0x06843DA7060A026B).**

## Parameters
* **entity**: The entity to change coordinates for.
* **xPos**: The X coordinate.
* **yPos**: The Y coordinate.
* **zPos**: The Z coordinate, ground level.
* **alive**: Unused by the game, potentially used by debug builds of GTA in order to assert whether or not an entity was alive.
* **deadFlag**: Whether to disable physics for dead peds, too, and not just living peds.
* **ragdollFlag**: A special flag used for ragdolling peds.
* **clearArea**: Whether to clear any entities in the target area.

