---
ns: CFX
apiset: server
---
## _SET_PED_HEAD_OVERLAY_COLOR

```c
void _SET_PED_HEAD_OVERLAY_COLOR(Ped ped, int overlayID, int colorType, int colorID, int secondColorID);
```

```
Used for freemode (online) characters.
Called after SET_PED_HEAD_OVERLAY().
```
**Note:**
You may need to call [`SetPedHeadBlendData`](#\_0x9414E18B9434C2FE) prior to calling this native in order for it to work.

**This is the server-side RPC native equivalent of the client native [\_SET\_PED\_HEAD\_OVERLAY\_COLOR](?_0x497BF74A7B9CB952).**

## Parameters
* **ped**: The ped entity
* **overlayID**: An integer representing the overlay id
* **colorType**: 1 for eyebrows, beards, and chest hair; 2 for blush and lipstick; and 0 otherwise, though not called in those cases.
* **colorID**: An integer representing the primary color id
* **secondColorID**: An integer representing the secondary color id

