import type { Ability } from '@/data/interface.ts';

export const weaponItems: Ability[] = [
    {
        "id": "weapon_sword",
        "role": "Weapons",
        "path": "Item",
        "name": "Sword",
        "damage": 2,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A reliable common sword, balanced for offense and defense."
            }
        ]
    },
    {
        "id": "weapon_bow",
        "role": "Weapons",
        "path": "Item",
        "name": "Bow",
        "damage": 2,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A common bow for ranged attacks. Requires an additional item slot for ammunition."
            }
        ]
    },
    {
        "id": "weapon_crossbow",
        "role": "Weapons",
        "path": "Item",
        "name": "Crossbow",
        "damage": 2,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A mechanical common crossbow. Powerful and precise. Requires an additional item slot for ammunition."
            }
        ]
    },
    {
        "id": "weapon_spear",
        "role": "Weapons",
        "path": "Item",
        "name": "Spear",
        "damage": 2,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A common spear, excellent for keeping enemies at a distance."
            }
        ]
    },
    {
        "id": "weapon_hammer",
        "role": "Weapons",
        "path": "Item",
        "name": "Hammer",
        "damage": 2,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A heavy common hammer, perfect for crushing armor and obstacles."
            }
        ]
    },
    {
        "id": "weapon_knife",
        "role": "Weapons",
        "path": "Item",
        "name": "Knife",
        "damage": 2,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A small common knife or dagger, easily concealed and quick to draw."
            }
        ]
    },
    {
        "id": "weapon_staff",
        "role": "Weapons",
        "path": "Item",
        "name": "Staff",
        "damage": 2,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A sturdy common wooden staff, useful for both defense and blunt strikes."
            }
        ]
    },
    {
        "id": "weapon_ammunition",
        "role": "Weapons",
        "path": "Item",
        "name": "Ammunition",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A bundle of arrows, bolts, or stones. Required to use ranged weapons. You don’t need to keep track of how much ammunition you have, but you might run out if you lose equipment."
            }
        ]
    }
]