---
ns: CFX
apiset: server
---
## CLEAR_PED_TASKS

```c
void CLEAR_PED_TASKS(Ped ped);
```

Clear a ped's tasks. Stop animations and other tasks created by scripts.

**This is the server-side RPC native equivalent of the client native [CLEAR\_PED\_TASKS](?_0xE1EF3C1216AFF2CD).**

## Parameters
* **ped**: Ped id. Use PlayerPedId() for your own character.

