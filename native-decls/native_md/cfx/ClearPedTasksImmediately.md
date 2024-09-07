---
ns: CFX
apiset: server
---
## CLEAR_PED_TASKS_IMMEDIATELY

```c
void CLEAR_PED_TASKS_IMMEDIATELY(Ped ped);
```

Immediately stops the pedestrian from whatever it's doing. The difference between this and [CLEAR_PED_TASKS](#\_0xE1EF3C1216AFF2CD) is that this one teleports the ped but does not change the position of the ped.

**This is the server-side RPC native equivalent of the client native [CLEAR\_PED\_TASKS\_IMMEDIATELY](?_0xAAA34F8A7CB32098).**

## Parameters
* **ped**: Ped id.

