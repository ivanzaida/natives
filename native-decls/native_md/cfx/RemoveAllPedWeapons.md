---
ns: CFX
apiset: server
---
## REMOVE_ALL_PED_WEAPONS

```c
void REMOVE_ALL_PED_WEAPONS(Ped ped, BOOL p1);
```

Parameter `p1` does not seem to be used or referenced in game binaries.\
**Note:** When called for networked entities, a `CRemoveAllWeaponsEvent` will be created per request.

**This is the server-side RPC native equivalent of the client native [REMOVE\_ALL\_PED\_WEAPONS](?_0xF25DF915FA38C5F3).**

## Parameters
* **ped**: The ped entity
* **p1**: 

