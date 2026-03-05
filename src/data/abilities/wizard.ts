// src/data/bookAbilities.ts

import type { Ability } from "../interface.ts";


export const bookAbilities: Ability[] = [
    // ==========================================
    // PATH: EVOCATION
    // ==========================================
    {
        id: "wiz_magic_strike",
        role: "Wizard",
        path: "Evocation",
        name: "Magic Strike",
        rollTheDie: true,
        effects: [
            {
                name: "Option A",
                cost: 0,
                description: "You must be holding a pointed object like a wand, staff, or sword to use this spell. You use it to shoot a shimmering missile of force in a straight line at a target you can see, dealing 2 damage."
            },
            {
                name: "Option B",
                cost: 2,
                description: "You overload the missile, increasing its damage to 4 and hitting the target automatically. You do not need to roll the die if you overload the spell."
            }
        ]
    },
    {
        id: "wiz_test",
        role: "Wizard",
        path: "Evocation",
        name: "Test",
        rollTheDie: true,
        description: "This is the general description of the ability, it is not connected to an AP cost. ",
        effects: [
            {
                cost: 0,
                description: "This is the description of the first effect in this ability. Lorem ipsum dolor amet."
            },
            {
                cost: 2,
                description: "This is the description of the second. effect in this ability. Lorem ipsum dolor amet.",
            }

        ],
        rollTable: [
            {
                value: 20,
                description: "This is the effect that would happen if you rolled a 20."
            },
            {
                value: 10,
                description: "This is the effect that would happen if you rolled a 10."
            }
        ]
    },
    {
        id: "wiz_test2",
        role: "Wizard",
        path: "Evocation",
        name: "Test2",
        rollTheDie: true,
        description: "This is the general description of the ability, it is not connected to an AP cost. ",
        effects: [
            {
                cost: 0,
                description: "This is the description of the first effect in this ability. Lorem ipsum dolor amet."
            },
            {
                cost: 2,
                description: "This is the description of the second. effect in this ability. Lorem ipsum dolor amet.",
            }

        ],
        rollTable: [
            {
                value: 20,
                description: "This is the effect that would happen if you rolled a 20."
            },
            {
                value: 10,
                description: "This is the effect that would happen if you rolled a 10."
            }
        ]
    },
    {
        id: "wiz_test2",
        role: "Wizard",
        path: "Evocatiosn",
        name: "Test2",
        rollTheDie: true,
        description: "This is the general description of the ability, it is not connected to an AP cost. ",
        effects: [
            {
                cost: 0,
                description: "This is the description of the first effect in this ability. Lorem ipsum dolor amet."
            },
            {
                cost: 2,
                description: "This is the description of the second. effect in this ability. Lorem ipsum dolor amet.",
            }

        ],
        rollTable: [
            {
                value: 20,
                description: "This is the effect that would happen if you rolled a 20."
            },
            {
                value: 10,
                description: "This is the effect that would happen if you rolled a 10."
            }
        ]
    }
];