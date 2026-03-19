import type { Ability } from '@/data/interface.ts';

export const uncommonItems: Ability[] = [
    {
        "id": "item_albatross_pendant",
        "role": "Uncommon",
        "path": "Item",
        "name": "Albatross pendant",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a magic communication device that receives a dispatch once a day from the Albatross Press. The pendant emits a pulsating glow when it has a new dispatch. When the pendant’s switch is activated, it emits an audible message with the top recent news headlines."
            }
        ]
    },
    {
        "id": "item_archive",
        "role": "Uncommon",
        "path": "Item",
        "name": "Archive",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "The archive is a talking crystal ball that is programmed to recall information stored inside. When held by a creature, they can telepathically transmit information to the ball. That information can then be retrieved by anybody who queries the ball. The archive imprints the creator’s voice and thoughts, but it can only repeat what it is told when it is asked a question."
            }
        ]
    },
    {
        "id": "item_atlas_incognito",
        "role": "Uncommon",
        "path": "Item",
        "name": "Atlas incognito",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a book of 10 magic stamps produced by various underground organizations. When a stamp is removed from the book and placed on a map of a town or city, it reveals on the map the name and location of one of each of the following: • An underground marketplace where stolen goods are traded. • A popular safe house for criminals. • A popular establishment where illegal services are offered."
            }
        ]
    },
    {
        "id": "item_blink_blade",
        "role": "Uncommon",
        "path": "Item",
        "name": "Blink blade",
        "damage": 2,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a magic sword with an incantation engraved in its fuller. (The Guide will tell you what the engraving says.) When someone speaks the incantation while the sword is nearby, it instantly teleports into their hand."
            }
        ]
    },
    {
        "id": "item_brells_boat_in_a_box",
        "role": "Uncommon",
        "path": "Item",
        "name": "Brell’s boat in a box",
        "slots": 1,
        "effects": [
            {
                "cost": 2,
                "description": "A small wooden box containing a paper model of a sloop. When you set the boat in water with enough clearance around it to fully expand, you can activate it to transform into a real, working sloop. You may have the boat return to its paper model form at any time by patting the boat on the side and giving it some words of encouragement."
            }
        ]
    },
    {
        "id": "item_brells_charismatic_couture",
        "role": "Uncommon",
        "path": "Item",
        "name": "Brell’s charismatic couture",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "Brell’s Charismatic Couture is a line of magical shapeshifting garments that automatically find a perfect fit for their wearer. With the tug of an interior ribbon, these garments can also instantly transform slightly to express variations on their design and appearance. Authentic versions bear a shimmering magical B symbol on their interior lining that is said to be impossible to counterfeit."
            }
        ]
    },
    {
        "id": "item_brells_limitless_ledger",
        "role": "Uncommon",
        "path": "Item",
        "name": "Brell’s limitless ledger",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A magical networked codex that duplicates entries from linked journals. When an entry is made on a page in one of the linked journals, it automatically appears in the others."
            }
        ]
    },
    {
        "id": "item_brells_magnificent_morsels",
        "role": "Uncommon",
        "path": "Item",
        "name": "Brell’s magnificent morsels",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A tin of 10 delightful little candies, each with a touch of magic. The flavor of each candy is a surprise. Be careful: some creatures find them literally irresistible."
            }
        ]
    },
    {
        "id": "item_brells_tent_in_a_tin",
        "role": "Uncommon",
        "path": "Item",
        "name": "Brell’s tent in a tin",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A colorful tin canister that’s magically pressurized. When you unlock the canister and set it on the ground, the lid blows off a few moments later, deploying a large magic tent that can fit 30 people. Sound cannot escape the inside of the tent. A switch on the side of the tin teleports the tent back inside and closes the lid."
            }
        ]
    },
    {
        "id": "item_dim_grimoire",
        "role": "Uncommon",
        "path": "Item",
        "name": "Dim grimoire",
        "slots": 1,
        "rollTheDie": true,
        "effects": [
            {
                "cost": 4,
                "description": "This is a notebook belonging to a student of magic. It contains poorly written notes and unintelligible magical incantations. Roll the die and spend 4 AP to read the book."
            }
        ],
        "rollTable": [
            {
                "value": 20,
                "description": "20: Well, it turns out the author of this book was actually a genius. You learn a legendary ability of the Guide’s choice from either The Magician or The Wizard. The book’s power fades and cannot be used again."
            },
            {
                "value": "17-19",
                "description": "17 to 19: You learn the location of a legendary magic item."
            },
            {
                "value": "14-16",
                "description": "14 to 16: You accidentally turn yourself into a sheep for the next hour. You retain your current hit points but can’t speak or use abilities."
            },
            {
                "value": "11-13",
                "description": "11 to 13: The book releases a deafening shockwave, shattering all glass objects within 1 kilometer."
            },
            {
                "value": "8-10",
                "description": "8 to 10: You hear the howling of demons in your mind. The book’s real owner senses your location. They are coming for you..."
            },
            {
                "value": "5-7",
                "description": "5 to 7: You glimpse ultimate horror and are overcome with dread when the Dim Grimoire is nearby. You can’t use your abilities when the book is near."
            },
            {
                "value": "2-4",
                "description": "2 to 4: You accidentally absorb an NPC spirit that was imprisoned in the book. It cannot control you, but it can speak to you in your mind and witness everything you do. It can only be removed with the Banish ability."
            },
            {
                "value": 1,
                "description": "1: The book explodes in brilliant prismatic fire and is destroyed, dealing 4 damage to every creature nearby."
            }
        ]
    },
    {
        "id": "item_discretion",
        "role": "Uncommon",
        "path": "Item",
        "name": "Discretion",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a common-looking leather scabbard that can hold bladed weapons. Whenever a weapon is seated inside of the scabbard, the weapon becomes invisible, making the scabbard appear empty. When the weapon is removed, it becomes visible."
            }
        ]
    },
    {
        "id": "item_field_monitor",
        "role": "Uncommon",
        "path": "Item",
        "name": "Field monitor",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "Field Monitors are magic maps produced by a guild of cartographers. Each map is designed to provide information about a specific region of the world. You can ask the map questions about major towns, cities, and landmarks in the region it covers. Magic ink then appears on the map, showing information about your request. You can ask the map for any of the following: • The location and a brief description of a popular landmark or monument. • The name and location of a highly rated lodging and dining establishment, and the specialty it’s known for. • An interesting piece of trivia about a town, city, or region. • The location of any fine establishment where Field Monitor gear is sold."
            }
        ]
    },
    {
        "id": "item_friend_flute",
        "role": "Uncommon",
        "path": "Item",
        "name": "Friend flute",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a small magic whistle that knows who your friends are. When you blow in the whistle, only your friends nearby can hear its sound."
            }
        ]
    },
    {
        "id": "item_glitter_bomb",
        "role": "Uncommon",
        "path": "Item",
        "name": "Glitter bomb",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a single-use pouch of magic glitter that tingles the hands of anyone who touches it. When thrown, the pouch explodes on contact, sending a cloud of glitter in the air that touches everything nearby. The glitter dispels invisibility on any creature or object it touches, instantly revealing them. Anything revealed by the glitter bomb sparkles for the next day."
            }
        ]
    },
    {
        "id": "item_goat_simulator",
        "role": "Uncommon",
        "path": "Item",
        "name": "Goat simulator",
        "slots": 1,
        "effects": [
            {
                "cost": 1,
                "description": "This is a magic stuffed toy goat with a bell collar. When you place the bell collar on the toy, a life-sized illusion of a goat appears somewhere random nearby. The goat looks, smells, and feels real to the touch. It has 4 HP and vanishes at 0 HP. The illusion immediately acts with the kind of chaotic mischief typical of genuine goats. Keep away from small children."
            }
        ]
    },
    {
        "id": "item_healing_potion",
        "role": "Uncommon",
        "path": "Item",
        "name": "Healing potion",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a small vial of clear, odorless magic liquid. Each vial contains one use, and drinking it restores 4 HP. It tastes foul. If you drink more than one potion in a single day, you become permanently resistant to its effects, and drinking healing potions in the future will only restore 2 HP."
            }
        ]
    },
    {
        "id": "item_kiln_gauze",
        "role": "Uncommon",
        "path": "Item",
        "name": "Kiln gauze",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A container of magic gauze that can be used to repair broken metal weapons like swords. When the gauze is wrapped around a severed weapon, it welds the weapon back together in a flash. There is enough gauze in each container to repair one weapon."
            }
        ]
    },
    {
        "id": "item_light_trap",
        "role": "Uncommon",
        "path": "Item",
        "name": "Light trap",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "The Light Trap is a magic glass orb that instantly captures and stores nearby light when it is squeezed. Each time the orb is squeezed, the new capture overwrites the old one. When placed on the ground, the orb creates an illusion that overlays the real world nearby. When standing inside this illusion, you can see the light field the orb captured, as if you are standing in a photograph."
            }
        ]
    },
    {
        "id": "item_lying_lyre",
        "role": "Uncommon",
        "path": "Item",
        "name": "Lying lyre",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This magic lyre guides its user’s hands to produce a beautiful song, lying to its audiences about its owner’s musical talent. It only knows one song."
            }
        ]
    },
    {
        "id": "item_magic_potion",
        "role": "Uncommon",
        "path": "Item",
        "name": "Magic potion",
        "slots": 1,
        "rollTheDie": true,
        "effects": [
            {
                "cost": 0,
                "description": "A vial filled with one dose of viscous liquid that has unpredictable effects. Roll the die to use."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "20: You are instantly affected by the Restore ability." },
            { "value": "15-19", "description": "15 to 19: Your hit points are fully restored." },
            { "value": 14, "description": "14: You can use the Whisper ability at will with no AP cost for 1 hour." },
            { "value": 13, "description": "13: You are affected by the Calcify spell for 1 day." },
            { "value": 12, "description": "12: You grow gills on your neck and can breathe underwater for 1 day." },
            { "value": 11, "description": "11: You are affected by the Pegasus Cloak spell for 1 day." },
            { "value": 10, "description": "10: You can use the Blink ability at will for no AP cost for 1 hour." },
            { "value": 9, "description": "9: You become invisible for 1 hour, and the invisibility does not fade if you attack." },
            { "value": 8, "description": "8: All of your footsteps become completely silent for 1 day." },
            { "value": 7, "description": "7: You speak your thoughts out loud uncontrollably for the next hour." },
            { "value": 6, "description": "6: You forget languages for 1 day." },
            { "value": "4-5", "description": "4 to 5: You are affected by the Nox spell for 1 hour. The Guide chooses the effects." },
            { "value": "2-3", "description": "2 to 3: You are hit for 6 hit points." },
            { "value": 1, "description": "1: Your maximum HP is reduced by 2 until the Restore spell is cast on you." }
        ]
    },
    {
        "id": "item_mischievous_marbles",
        "role": "Uncommon",
        "path": "Item",
        "name": "Mischievous marbles",
        "slots": 1,
        "effects": [
            {
                "cost": 1,
                "description": "When the bag is opened, the marbles spill out. They roll around, seeking out any creatures nearby who they might trip. The marbles are especially interested in people who are carrying things, like servers carrying a meal, or children holding ice cream cones."
            }
        ]
    },
    {
        "id": "item_not_a_pipe",
        "role": "Uncommon",
        "path": "Item",
        "name": "Not a pipe",
        "slots": 1,
        "effects": [
            {
                "cost": 2,
                "description": "This is a pipe... When you use the pipe to smoke something (the pipe does not mind what you put in it), it begins to rapidly produce a thick magic fog centered on you, filling the air nearby within seconds. Creatures inside the fog cannot see beyond their reach. The fog disperses after 10 minutes or if the area is affected by strong winds."
            }
        ]
    },
    {
        "id": "item_permanent_solution",
        "role": "Uncommon",
        "path": "Item",
        "name": "Permanent solution",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a small glass dropper filled with a gray magic liquid. There is enough liquid inside to dispense 6 bead-sized drops. A single drop is enough to permanently bond two things together within 10 seconds. For example, by placing a drop of Permanent Solution inside a weapon’s scabbard and then putting the weapon back inside, you can make it impossible to remove the weapon from the scabbard. There is no limit to the size of the things you can bond, but the solution does not make them stronger; if enough force is applied, the bonded objects may break around the point of contact where they are bonded. The bond can only be broken with the Undo spell."
            }
        ]
    },
    {
        "id": "item_portable_potent_potable_probe",
        "role": "Uncommon",
        "path": "Item",
        "name": "Portable potent potable probe",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "The Portable Potent Potable Probe is a small box with a magic dish inside that can be used to detect poison. When liquid is placed in the dish, the box briefly conjures an illusory servant nearby. If there is no poison, the servant nods at you and vanishes. If poison is detected, the servant pretends to cough and die. The servant is not a trained actor, and its peformance is a little much."
            }
        ]
    },
    {
        "id": "item_quiplasher",
        "role": "Uncommon",
        "path": "Item",
        "name": "Quiplasher",
        "damage": 3,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a sentient magic whip that is always listening to what’s said nearby. In its default position, it is locked in a stiff coil. If the whip hears a witty one-liner, it relaxes, and you can use it to make an attack on a nearby creature. Once the whip strikes a creature, it becomes rigid again."
            }
        ]
    },
    {
        "id": "item_ramification",
        "role": "Uncommon",
        "path": "Item",
        "name": "Ramification",
        "slots": 1,
        "effects": [
            {
                "cost": 3,
                "description": "This is a small magic battering ram with two handles that can be used by a single person. When you activate the ram, you can use it to hit and break a wooden door of any size. The door shatters into tiny splinters."
            }
        ]
    },
    {
        "id": "item_registrar",
        "role": "Uncommon",
        "path": "Item",
        "name": "Registrar",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "The Registrar is a magic book that automatically senses and records the most commonly used name of a creature that passes nearby and the time and date of their passage. (For example, if a creature known by a nickname passes by, it records the nickname.)"
            }
        ]
    },
    {
        "id": "item_repeater",
        "role": "Uncommon",
        "path": "Item",
        "name": "Repeater",
        "damage": 4,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a compact magic crossbow that straps to the user’s forearm. The Repeater has an internal magazine of four magically guided bolts. When fired on a target in range, all four bolts are released rapidly, dealing 4 damage (1 per bolt). The bolts are guided magically to the target. You cannot use it again until it is reloaded."
            },
            {
                "cost": 2,
                "description": "The Repeater reloads itself and can be used again."
            }
        ]
    },
    {
        "id": "item_silvery_horn",
        "role": "Uncommon",
        "path": "Item",
        "name": "Silvery horn",
        "slots": 1,
        "effects": [
            {
                "cost": 2,
                "description": "This enchanted, pocket-sized horn can send messages far and wide. You speak into the horn. It has the same effects of the Aura’s Silvery Broadcast spell."
            }
        ]
    },
    {
        "id": "item_skycaller_amulets",
        "role": "Uncommon",
        "path": "Item",
        "name": "Skycaller amulets",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A pair of magic amulets that allow their owners to communicate with each other at any distance within the same world. When held in the hand, the amulets allow the bearers to communicate with each other telepathically by wishing for the link to be created. Each pair of amulets can only communicate with each other and can only be activated up to three times a day. Each time the link is activated, the wearers may communicate for up to 5 minutes."
            }
        ]
    },
    {
        "id": "item_the_catcher",
        "role": "Uncommon",
        "path": "Item",
        "name": "The catcher",
        "slots": 1,
        "effects": [
            {
                "cost": 1,
                "description": "This is a single heavy metal gauntlet that has an abrasive pad on the palm. While wearing the gauntlet, you can grab a bladed weapon that is about to strike you. Grabbing the blade prevents an enemy from hitting you, even if their attack was successful. You may take the weapon from them."
            }
        ]
    },
    {
        "id": "item_the_howdy_doodat",
        "role": "Uncommon",
        "path": "Item",
        "name": "The howdy doodat",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a magic candle that makes a noisy fizzling sound when lit and sheds light nearby. When light from the candle touches an illusion, the surface of the illusion begins to sparkle. If the source of the illusion is nearby, like the caster of an illusion spell, they also begin to sparkle from the candle’s light. The candle has enough wax to burn for 1 hour."
            }
        ]
    },
    {
        "id": "item_the_lagniappe",
        "role": "Uncommon",
        "path": "Item",
        "name": "The lagniappe",
        "slots": 1,
        "effects": [
            {
                "cost": 3,
                "description": "A weapon with a little extra. The Guide chooses its form. (It might be a sword, a bow, a staff, or something else.)"
            }
        ]
    },
    {
        "id": "item_the_left_handed_smoke_shifter",
        "role": "Uncommon",
        "path": "Item",
        "name": "The left-handed smoke shifter",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "The words “left-handed smoke shifter” are etched on the surface of this otherwise plain metal rod. The rod is enchanted with a curse that affects anyone who is currently holding it. Any commoner or minion holding the rod is amenable to accepting impossible quests. For example, if you send them on an errand to retrieve an item that does not exist, they will begin to pursue it with relentless zeal. This effect ends if they stop holding the rod."
            }
        ]
    },
    {
        "id": "item_the_sure_shot",
        "role": "Uncommon",
        "path": "Item",
        "name": "The sure shot",
        "slots": 1,
        "effects": [
            {
                "cost": 2,
                "description": "The Sure Shot is a magic bow that aids the user with their aim by gently guiding their arms to align with a target in their mind’s eye. As long as there are no enemies within reach while using the bow, you can upgrade a failure to a tough choice and a catastrophe to a failure."
            }
        ]
    },
    {
        "id": "item_tricky_ticket",
        "role": "Uncommon",
        "path": "Item",
        "name": "Tricky ticket",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "In its default form, this is a sheet of 6 silvery magic tickets that have no markings. When you tear a ticket from the sheet when a ticket collector is nearby, it senses what they want to see and transforms into a forgery of a real ticket. The forgery shows all of the relevant information required to make it seem authentic."
            }
        ]
    },
    {
        "id": "item_untamed_magic_broom",
        "role": "Uncommon",
        "path": "Item",
        "name": "Untamed magic broom",
        "slots": 1,
        "rollTheDie": true,
        "effects": [
            {
                "cost": 0,
                "description": "When you straddle this broom, you may ask it to let you fly."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "20: The broom accepts you, becoming a Tamed Magic Broom. You can now safely activate it for 2 AP whenever you want, allowing you to fly with it for 1 hour." },
            { "value": "11-19", "description": "11 to 19: The broom decides it is in the mood to fly and lets you ride and direct it for the next 10 minutes." },
            { "value": "6-10", "description": "6 to 10: The broom thinks you want it to clean something. It begins floating around, sweeping up any loose bits into piles." },
            { "value": "2-5", "description": "2 to 5: The broom decides it is in the mood to fly, but not with you. It shoots up into the air, ejecting you forcefully, and pursues its own agenda for the next hour before returning to you." },
            { "value": 1, "description": "1: The broom tires of you and your games. It flies off into the distance. You don’t know if it will return to you." }
        ]
    },
    {
        "id": "item_the_true_witness",
        "role": "Uncommon",
        "path": "Item",
        "name": "The true witness",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a set of magic glasses that are linked to each other. One pair is called The True Witness, and the other is called The Receiver. When a creature is wearing The True Witness, they broadcast what they are seeing to The Receiver. When a creature wears The Receiver, they see exactly what The True Witness is looking at in real time."
            }
        ]
    },
    {
        "id": "item_wraithfire_bomb",
        "role": "Uncommon",
        "path": "Item",
        "name": "Wraithfire bomb",
        "damage": 4,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "A dark crystal orb, the size of an orange, that contains a volatile magical charge. When thrown, it explodes in a small radius on contact, igniting anything within a few meters of the impact in searing, ethereal flame. Creatures touched by the flame take 4 damage and writhe in agony."
            }
        ]
    }
];