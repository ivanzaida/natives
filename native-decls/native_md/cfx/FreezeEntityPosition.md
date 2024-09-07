---
ns: CFX
apiset: server
---
## FREEZE_ENTITY_POSITION

```c
void FREEZE_ENTITY_POSITION(Entity entity, BOOL toggle);
```

Freezes or unfreezes an entity preventing its coordinates to change by the player if set to `true`. You can still change the entity position using [`SET_ENTITY_COORDS`](#\_0x06843DA7060A026B).

**This is the server-side RPC native equivalent of the client native [FREEZE\_ENTITY\_POSITION](?_0x428CA6DBD1094446).**

## Parameters
* **entity**: The entity to freeze/unfreeze.
* **toggle**: Freeze or unfreeze entity.

