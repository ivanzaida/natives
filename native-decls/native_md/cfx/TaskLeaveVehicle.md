---
ns: CFX
apiset: server
---
## TASK_LEAVE_VEHICLE

```c
void TASK_LEAVE_VEHICLE(Ped ped, Vehicle vehicle, int flags);
```

```
Flags from decompiled scripts:
0 = normal exit and closes door.
1 = normal exit and closes door.
16 = teleports outside, door kept closed.  (This flag does not seem to work for the front seats in buses, NPCs continue to exit normally)
64 = normal exit and closes door, maybe a bit slower animation than 0.
256 = normal exit but does not close the door.
4160 = ped is throwing himself out, even when the vehicle is still.
262144 = ped moves to passenger seat first, then exits normally
Others to be tried out: 320, 512, 131072.
```

**This is the server-side RPC native equivalent of the client native [TASK\_LEAVE\_VEHICLE](?_0xD3DBCE61A490BE02).**

## Parameters
* **ped**: 
* **vehicle**: 
* **flags**: 

