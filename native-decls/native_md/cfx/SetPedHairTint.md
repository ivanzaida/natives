---
ns: CFX
aliases: ["_SET_PED_HAIR_COLOR"]
apiset: server
---
## SET_PED_HAIR_TINT

```c
void SET_PED_HAIR_TINT(Ped ped, int colorID, int highlightColorID);
```

Sets the tint index for the hair on the specified ped.
```
NativeDB Introduced: v323
```

**This is the server-side RPC native equivalent of the client native [SET\_PED\_HAIR\_TINT](?_0x4CFFC65454C93A49).**

## Parameters
* **ped**: The Ped whose hair tint is to be set.
* **colorID**: The tint index for the primary hair color.
* **highlightColorID**: The tint index for the hair highlight color.

