---
ns: CFX
apiset: server
---
## TASK_HANDS_UP

```c
void TASK_HANDS_UP(Ped ped, int duration, Ped facingPed, int p3, BOOL p4);
```

```
In the scripts, p3 was always -1.
p3 seems to be duration or timeout of turn animation.
Also facingPed can be 0 or -1 so ped will just raise hands up.
```

**This is the server-side RPC native equivalent of the client native [TASK\_HANDS\_UP](?_0xF2EAB31979A7F910).**

## Parameters
* **ped**: 
* **duration**: 
* **facingPed**: 
* **p3**: 
* **p4**: 

