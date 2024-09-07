---
ns: CFX
apiset: server
---
## REMOVE_WEAPON_FROM_PED

```c
void REMOVE_WEAPON_FROM_PED(Ped ped, Hash weaponHash);
```

```
This native removes a specified weapon from your selected ped.
Weapon Hashes: pastebin.com/0wwDZgkF
Example:
C#:
Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
C++:
WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);
The code above removes the knife from the player.
```

**This is the server-side RPC native equivalent of the client native [REMOVE\_WEAPON\_FROM\_PED](?_0x4899CB088EDF59B8).**

## Parameters
* **ped**: 
* **weaponHash**: 

