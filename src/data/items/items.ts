
import type { Ability } from "../interface.ts";


export const bookItems: Ability[] = [
    {
        id: "item_1",
        role: "Useful",
        path: "items",
        name: "Magic Strike",
        slots: 10,
        damage: 3,
        rollTheDie: false,
        description: "this is an item wow....."
    },
    {
        id: "wiz_test",
        role: "Rare",
        path: "items",
        slots: 2,
        name: "Test",
        rollTheDie: true,
        description: "This is the general description of the ability, it is not connected to an AP cost. ",
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
        id: "repeater",
        role: "uncommon",
        path: "items",
        name: "Repeater",
        slots: 1,
        rollTheDie: false,
        damage: 4,
        description: "This is a compact magic crossbow that straps to the user's forearm. The Repeater has an internal magazine of four magically guided bolts.When fired on a target in range, all four bolts are released rapidly, dealing 4 damage (1 per bolt).The bolts are guided  magically to the target.You cannot useit again until it is reloaded.",
        effects: [
            {
                cost: 2,
                description: "The Repeater reloads itself and can be used again."
            }
        ]
    }
];