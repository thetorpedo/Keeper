import type { Ability } from '@/data/interface.ts';

export const bookItems: Ability[] = [
    // ---------------------------------------------------------
    // USEFUL ITEMS
    // ---------------------------------------------------------
    {
        id: 'item_lockpicks',
        role: 'Useful',
        path: 'Item',
        name: 'Lockpicks',
        slots: 1,
        effects: [
            { cost: 0, description: 'A set of 5 lockpicks that can be used to try to bypass doors and other things with simple locks.' }
        ]
    },
    {
        id: 'item_magic_rope',
        role: 'Useful',
        path: 'Item',
        name: 'Magic Rope',
        slots: 1,
        effects: [
            { cost: 0, description: 'A 50-foot rope that can automatically coil itself. It can also shrink to the size of a spool of yarn for easy carrying, and expand back to its normal size on its owner’s command.' }
        ]
    },
    {
        id: 'item_magic_flask',
        role: 'Useful',
        path: 'Item',
        name: 'Magic Flask',
        slots: 1,
        effects: [
            { cost: 0, description: 'A magic flask that automatically replenishes itself with a spirit of your choice. (Choose once.)' }
        ]
    },
    {
        id: 'item_magic_candle',
        role: 'Useful',
        path: 'Item',
        name: 'Magic Candle',
        slots: 1,
        effects: [
            { cost: 0, description: 'A powerful candle that can light itself and snuff itself out on its owner’s command. It drips wax but never seems to lose any.' }
        ]
    },
    {
        id: 'item_kiln_gauze_useful',
        role: 'Useful',
        path: 'Item',
        name: 'Kiln Gauze',
        slots: 1,
        effects: [
            { cost: 0, description: 'A container of magic gauze that can be used to repair broken metal weapons like swords. When the gauze is wrapped around a severed weapon, it welds the weapon back together in a flash. There is enough gauze in each container to repair one weapon.' }
        ]
    },
    {
        id: 'item_friend_flute_useful',
        role: 'Useful',
        path: 'Item',
        name: 'Friend Flute',
        slots: 1,
        effects: [
            { cost: 0, description: 'This is a small magic whistle that knows who your friends are. When you blow in the whistle, only your friends nearby can hear its sound.' }
        ]
    },
    {
        id: 'item_skycaller_amulets_useful',
        role: 'Useful',
        path: 'Item',
        name: 'Skycaller Amulets',
        slots: 1,
        effects: [
            { cost: 0, description: 'A pair of magic amulets that allow their owners to communicate with each other at any distance within the same world. When held in the hand, the amulets allow the bearers to communicate with each other telepathically by wishing for the link to be created. Each pair of amulets can only communicate with each other and can only be activated up to three times a day. Each time the link is activated, the wearers may communicate for up to 5 minutes.' }
        ]
    },
    {
        id: 'item_brells_tent_in_a_tin_useful',
        role: 'Useful',
        path: 'Item',
        name: "Brell's Tent in a Tin",
        slots: 1,
        effects: [
            { cost: 0, description: 'A colorful tin canister that’s magically pressurized. When you unlock the canister and set it on the ground, the lid blows off a few moments later, deploying a large magic tent that can fit 30 people. Sound cannot escape the inside of the tent. A switch on the side of the tin teleports the tent back inside and closes the lid.' }
        ]
    },

    // ---------------------------------------------------------
    // UNCOMMON ITEMS
    // ---------------------------------------------------------
    {
        id: 'item_albatross_pendant',
        role: 'Uncommon',
        path: 'Item',
        name: 'Albatross Pendant',
        slots: 1,
        effects: [
            { cost: 0, description: 'This is a magic communication device that receives a dispatch once a day from the Albatross Press. The pendant emits a pulsating glow when it has a new dispatch. When the pendant’s switch is activated, it emits an audible message with the top recent news headlines.' }
        ]
    },
    {
        id: 'item_archive',
        role: 'Uncommon',
        path: 'Item',
        name: 'Archive',
        slots: 1,
        effects: [
            { cost: 0, description: 'The archive is a talking crystal ball that is programmed to recall information stored inside. When held by a creature, they can telepathically transmit information to the ball. That information can then be retrieved by anybody who queries the ball. The archive imprints the creator’s voice and thoughts, but it can only repeat what it is told when it is asked a question.' }
        ]
    },
    {
        id: 'item_atlas_incognito',
        role: 'Uncommon',
        path: 'Item',
        name: 'Atlas Incognito',
        slots: 1,
        effects: [
            { cost: 0, description: 'This is a book of 10 magic stamps produced by various underground organizations. When a stamp is removed from the book and placed on a map of a town or city, it reveals on the map the name and location of one of each of the following: An underground marketplace where stolen goods are traded, a popular safe house for criminals, and a popular establishment where illegal services are offered.' }
        ]
    },
    {
        id: 'item_blink_blade',
        role: 'Uncommon',
        path: 'Item',
        name: 'Blink Blade',
        slots: 1,
        damage: 2,
        effects: [
            { cost: 0, description: 'This is a magic sword with an incantation engraved in its fuller. (The Guide will tell you what the engraving says.) When someone speaks the incantation while the sword is nearby, it instantly teleports into their hand.' }
        ]
    },
    {
        id: 'item_brells_boat_in_a_box',
        role: 'Uncommon',
        path: 'Item',
        name: "Brell's Boat in a Box",
        slots: 1,
        description: 'A small wooden box containing a paper model of a sloop.',
        effects: [
            { cost: 2, description: 'When you set the boat in water with enough clearance around it to fully expand, you can activate it to transform into a real, working sloop. You may have the boat return to its paper model form at any time by patting the boat on the side and giving it some words of encouragement.' }
        ]
    },
    {
        id: 'item_brells_charismatic_couture',
        role: 'Uncommon',
        path: 'Item',
        name: "Brell's Charismatic Couture",
        slots: 1,
        effects: [
            { cost: 0, description: 'A line of magical shapeshifting garments that automatically find a perfect fit for their wearer. With the tug of an interior ribbon, these garments can also instantly transform slightly to express variations on their design and appearance. Authentic versions bear a shimmering magical B symbol on their interior lining that is said to be impossible to counterfeit.' }
        ]
    },
    {
        id: 'item_brells_limitless_ledger',
        role: 'Uncommon',
        path: 'Item',
        name: "Brell's Limitless Ledger",
        slots: 1,
        effects: [
            { cost: 0, description: 'A magical networked codex that duplicates entries from linked journals. When an entry is made on a page in one of the linked journals, it automatically appears in the others.' }
        ]
    },
    {
        id: 'item_brells_magnificent_morsels',
        role: 'Uncommon',
        path: 'Item',
        name: "Brell's Magnificent Morsels",
        slots: 1,
        effects: [
            { cost: 0, description: 'A tin of 10 delightful little candies, each with a touch of magic. The flavor of each candy is a surprise. Be careful: some creatures find them literally irresistible.' }
        ]
    },
    {
        id: 'item_dim_grimoire',
        role: 'Uncommon',
        path: 'Item',
        name: 'Dim Grimoire',
        slots: 1,
        rollTheDie: true,
        description: 'This is a notebook belonging to a student of magic. It contains poorly written notes and unintelligible magical incantations.',
        effects: [
            { cost: 4, description: 'Roll the die to read the book.' }
        ],
        rollTable: [
            { value: 20, description: 'Well, it turns out the author of this book was actually a genius. You learn a legendary ability of the Guide’s choice from either The Magician or The Wizard. The book’s power fades and cannot be used again.' },
            { value: 17, description: '(17-19) You learn the location of a legendary magic item.' },
            { value: 14, description: '(14-16) You accidentally turn yourself into a sheep for the next hour. You retain your current hit points but can’t speak or use abilities.' },
            { value: 11, description: '(11-13) The book releases a deafening shockwave, shattering all glass objects within 1 kilometer.' },
            { value: 8, description: '(8-10) You hear the howling of demons in your mind. The book’s real owner senses your location. They are coming for you...' },
            { value: 5, description: '(5-7) You glimpse ultimate horror and are overcome with dread when the Dim Grimoire is nearby. You can’t use your abilities when the book is near.' },
            { value: 2, description: '(2-4) You accidentally absorb an NPC spirit that was imprisoned in the book. It cannot control you, but it can speak to you in your mind and witness everything you do. It can only be removed with the Banish ability.' },
            { value: 1, description: 'The book explodes in brilliant prismatic fire and is destroyed, dealing 4 damage to every creature nearby.' }
        ]
    },
    {
        id: 'item_discretion',
        role: 'Uncommon',
        path: 'Item',
        name: 'Discretion',
        slots: 1,
        effects: [
            { cost: 0, description: 'This is a common-looking leather scabbard that can hold bladed weapons. Whenever a weapon is seated inside of the scabbard, the weapon becomes invisible, making the scabbard appear empty. When the weapon is removed, it becomes visible.' }
        ]
    },
    {
        id: 'item_field_monitor',
        role: 'Uncommon',
        path: 'Item',
        name: 'Field Monitor',
        slots: 1,
        effects: [
            { cost: 0, description: 'Magic maps produced by a guild of cartographers. Each map provides info about a specific region. You can ask questions about major towns, cities, and landmarks, and magic ink appears. You can ask for: the location and a brief description of a popular landmark; the name and location of a highly rated lodging and dining establishment; an interesting piece of trivia; or the location of any establishment where Field Monitor gear is sold.' }
        ]
    },
    {
        id: 'item_glitter_bomb',
        role: 'Uncommon',
        path: 'Item',
        name: 'Glitter Bomb',
        slots: 1,
        effects: [
            { cost: 0, description: 'A single-use pouch of magic glitter that tingles the hands. When thrown, it explodes on contact, sending a cloud of glitter in the air. The glitter dispels invisibility on any creature or object it touches, instantly revealing them. Anything revealed sparkles for the next day.' }
        ]
    },
    {
        id: 'item_goat_simulator',
        role: 'Uncommon',
        path: 'Item',
        name: 'Goat Simulator',
        slots: 1,
        description: 'This is a magic stuffed toy goat with a bell collar.',
        effects: [
            { cost: 1, description: 'When you place the bell collar on the toy, a life-sized illusion of a goat appears somewhere random nearby. It looks, smells, and feels real, has 4 HP, and vanishes at 0 HP. The illusion immediately acts with chaotic mischief. Keep away from small children.' }
        ]
    },
    {
        id: 'item_healing_potion',
        role: 'Uncommon',
        path: 'Item',
        name: 'Healing Potion',
        slots: 1,
        effects: [
            { cost: 0, description: 'This is a small vial of clear, odorless magic liquid. Each vial contains one use, and drinking it restores 4 HP. It tastes foul. If you drink more than one potion in a single day, you become permanently resistant to its effects, and drinking healing potions in the future will only restore 2 HP.' }
        ]
    },
    {
        id: 'item_light_trap',
        role: 'Uncommon',
        path: 'Item',
        name: 'Light Trap',
        slots: 1,
        effects: [
            { cost: 0, description: 'A magic glass orb that instantly captures and stores nearby light when it is squeezed. Each time it is squeezed, the new capture overwrites the old one. When placed on the ground, the orb creates an illusion that overlays the real world nearby, showing the captured light field as if you are standing in a photograph.' }
        ]
    },
    {
        id: 'item_lying_lyre',
        role: 'Uncommon',
        path: 'Item',
        name: 'Lying Lyre',
        slots: 1,
        effects: [
            { cost: 0, description: 'This magic lyre guides its user’s hands to produce a beautiful song, lying to its audiences about its owner’s musical talent. It only knows one song.' }
        ]
    },
    {
        id: 'item_magic_potion',
        role: 'Uncommon',
        path: 'Item',
        name: 'Magic Potion',
        slots: 1,
        rollTheDie: true,
        description: 'A vial filled with one dose of viscous liquid that has unpredictable effects.',
        effects: [
            { cost: 0, description: 'Roll the die to use.' }
        ],
        rollTable: [
            { value: 20, description: 'You are instantly affected by the Restore ability.' },
            { value: 15, description: '(15-19) Your hit points are fully restored.' },
            { value: 14, description: 'You can use the Whisper ability at will with no AP cost for 1 hour.' },
            { value: 13, description: 'You are affected by the Calcify spell for 1 day.' },
            { value: 12, description: 'You grow gills on your neck and can breathe underwater for 1 day.' },
            { value: 11, description: 'You are affected by the Pegasus Cloak spell for 1 day.' },
            { value: 10, description: 'You can use the Blink ability at will for no AP cost for 1 hour.' },
            { value: 9, description: 'You become invisible for 1 hour, and the invisibility does not fade if you attack.' },
            { value: 8, description: 'All of your footsteps become completely silent for 1 day.' },
            { value: 7, description: 'You speak your thoughts out loud uncontrollably for the next hour.' },
            { value: 6, description: 'You forget languages for 1 day.' },
            { value: 4, description: '(4-5) You are affected by the Nox spell for 1 hour. The Guide chooses the effects.' },
            { value: 2, description: '(2-3) You are hit for 6 hit points.' },
            { value: 1, description: 'Your maximum HP is reduced by 2 until the Restore spell is cast on you.' }
        ]
    },
    {
        id: 'item_mischievous_marbles',
        role: 'Uncommon',
        path: 'Item',
        name: 'Mischievous Marbles',
        slots: 1,
        description: 'This is a bag of marbles that feels slippery to the touch.',
        effects: [
            { cost: 1, description: 'When the bag is opened, the marbles spill out. They roll around, seeking out any creatures nearby who they might trip. They are especially interested in people carrying things.' }
        ]
    },
    {
        id: 'item_not_a_pipe',
        role: 'Uncommon',
        path: 'Item',
        name: 'Not a Pipe',
        slots: 1,
        description: 'This is a pipe...',
        effects: [
            { cost: 2, description: 'When you use the pipe to smoke something, it begins to rapidly produce a thick magic fog centered on you, filling the air nearby within seconds. Creatures inside cannot see beyond their reach. The fog disperses after 10 minutes or if affected by strong winds.' }
        ]
    },
    {
        id: 'item_permanent_solution',
        role: 'Uncommon',
        path: 'Item',
        name: 'Permanent Solution',
        slots: 1,
        effects: [
            { cost: 0, description: 'A small glass dropper filled with gray magic liquid, containing 6 drops. A single drop permanently bonds two things together within 10 seconds. The solution does not make the objects stronger; they may break around the bond if forced. The bond can only be broken with the Undo spell.' }
        ]
    },
    {
        id: 'item_portable_potent_potable_probe',
        role: 'Uncommon',
        path: 'Item',
        name: 'Portable Potent Potable Probe',
        slots: 1,
        effects: [
            { cost: 0, description: 'A small box with a magic dish inside to detect poison. When liquid is placed in the dish, an illusory servant appears. If there is no poison, the servant nods and vanishes. If poison is detected, the servant pretends to cough and die (a very dramatic performance).' }
        ]
    },
    {
        id: 'item_quiplasher',
        role: 'Uncommon',
        path: 'Item',
        name: 'Quiplasher',
        slots: 1,
        damage: 3,
        effects: [
            { cost: 0, description: 'This is a sentient magic whip that is always listening. It is locked in a stiff coil. If it hears a witty one-liner, it relaxes, and you can use it to attack a nearby creature. Once it strikes, it becomes rigid again.' }
        ]
    },
    {
        id: 'item_ramification',
        role: 'Uncommon',
        path: 'Item',
        name: 'Ramification',
        slots: 1,
        description: 'This is a small magic battering ram with two handles that can be used by a single person.',
        effects: [
            { cost: 3, description: 'When you activate the ram, you can use it to hit and break a wooden door of any size. The door shatters into tiny splinters.' }
        ]
    },
    {
        id: 'item_registrar',
        role: 'Uncommon',
        path: 'Item',
        name: 'Registrar',
        slots: 1,
        effects: [
            { cost: 0, description: 'A magic book that automatically senses and records the most commonly used name of a creature that passes nearby, along with the time and date of their passage.' }
        ]
    },
    {
        id: 'item_repeater',
        role: 'Uncommon',
        path: 'Item',
        name: 'Repeater',
        slots: 1,
        damage: 4,
        description: 'A compact magic crossbow that straps to the forearm. It has an internal magazine of four magically guided bolts. When fired on a target in range, all four bolts are released rapidly, dealing 4 damage (1 per bolt). You cannot use it again until it is reloaded.',
        effects: [
            { cost: 2, description: 'The Repeater reloads itself and can be used again.' }
        ]
    },
    {
        id: 'item_silvery_horn',
        role: 'Uncommon',
        path: 'Item',
        name: 'Silvery Horn',
        slots: 1,
        description: 'This enchanted, pocket-sized horn can send messages far and wide.',
        effects: [
            { cost: 2, description: 'You speak into the horn. It has the same effects of the Aura’s Silvery Broadcast spell.' }
        ]
    },
    {
        id: 'item_the_catcher',
        role: 'Uncommon',
        path: 'Item',
        name: 'The Catcher',
        slots: 1,
        description: 'This is a single heavy metal gauntlet that has an abrasive pad on the palm.',
        effects: [
            { cost: 1, description: 'While wearing the gauntlet, you can grab a bladed weapon that is about to strike you. Grabbing the blade prevents an enemy from hitting you, even if their attack was successful. You may take the weapon from them.' }
        ]
    },
    {
        id: 'item_the_howdy_doodat',
        role: 'Uncommon',
        path: 'Item',
        name: 'The Howdy Doodat',
        slots: 1,
        effects: [
            { cost: 0, description: 'A magic candle that makes a noisy fizzling sound when lit. When its light touches an illusion, the surface of the illusion begins to sparkle. If the source of the illusion (like the caster) is nearby, they also begin to sparkle. Burns for 1 hour.' }
        ]
    },
    {
        id: 'item_the_lagniappe',
        role: 'Uncommon',
        path: 'Item',
        name: 'The Lagniappe',
        slots: 1,
        effects: [
            { cost: 3, description: 'A weapon with a little extra. The Guide chooses its form. (It might be a sword, a bow, a staff, or something else.)' }
        ]
    },
    {
        id: 'item_the_left_handed_smoke_shifter',
        role: 'Uncommon',
        path: 'Item',
        name: 'The Left-Handed Smoke Shifter',
        slots: 1,
        effects: [
            { cost: 0, description: 'A plain metal rod with its name etched on it. It curses anyone holding it. Any commoner or minion holding the rod becomes amenable to accepting impossible quests, pursuing them with relentless zeal until they stop holding the rod.' }
        ]
    },
    {
        id: 'item_the_sure_shot',
        role: 'Uncommon',
        path: 'Item',
        name: 'The Sure Shot',
        slots: 1,
        effects: [
            { cost: 2, description: 'A magic bow that aids aim by gently guiding your arms. As long as there are no enemies within reach while using the bow, you can upgrade a failure to a tough choice and a catastrophe to a failure.' }
        ]
    },
    {
        id: 'item_tricky_ticket',
        role: 'Uncommon',
        path: 'Item',
        name: 'Tricky Ticket',
        slots: 1,
        effects: [
            { cost: 0, description: 'A sheet of 6 silvery magic tickets. When torn from the sheet near a ticket collector, it senses what they want to see and transforms into a convincing forgery of a real ticket.' }
        ]
    },
    {
        id: 'item_untamed_magic_broom',
        role: 'Uncommon',
        path: 'Item',
        name: 'Untamed Magic Broom',
        slots: 1,
        rollTheDie: true,
        effects: [
            { cost: 0, description: 'When you straddle this broom, you may ask it to let you fly. Roll the die.' }
        ],
        rollTable: [
            { value: 20, description: 'The broom accepts you, becoming a Tamed Magic Broom. You can now safely activate it for 2 AP whenever you want, flying for 1 hour.' },
            { value: 11, description: '(11-19) The broom decides it is in the mood to fly and lets you ride and direct it for the next 10 minutes.' },
            { value: 6, description: '(6-10) The broom thinks you want it to clean something. It floats around, sweeping up loose bits into piles.' },
            { value: 2, description: '(2-5) The broom decides to fly, but not with you. It shoots into the air, ejecting you forcefully, and pursues its own agenda for an hour before returning.' },
            { value: 1, description: 'The broom tires of you. It flies off into the distance. You don’t know if it will return.' }
        ]
    },
    {
        id: 'item_the_true_witness',
        role: 'Uncommon',
        path: 'Item',
        name: 'The True Witness',
        slots: 1,
        effects: [
            { cost: 0, description: 'A set of linked magic glasses (The True Witness and The Receiver). The wearer of The True Witness broadcasts what they see in real time to whoever wears The Receiver.' }
        ]
    },
    {
        id: 'item_wraithfire_bomb',
        role: 'Uncommon',
        path: 'Item',
        name: 'Wraithfire Bomb',
        slots: 1,
        damage: 4,
        effects: [
            { cost: 0, description: 'A dark crystal orb that explodes on contact when thrown. It ignites anything within a few meters in searing, ethereal flame. Creatures touched by the flame take 4 damage and writhe in agony.' }
        ]
    },

    // ---------------------------------------------------------
    // RARE ITEMS
    // ---------------------------------------------------------
    {
        id: 'item_abdellahis_scepter',
        role: 'Rare',
        path: 'Item',
        name: "Abdellahi's Scepter",
        slots: 1,
        damage: 2,
        effects: [
            { cost: 0, description: 'This magic scepter feels cold to the touch. When picked up, it curses its owner with a chill aura until destroyed. The owner can cast the Freeze spell at will.' }
        ]
    },
    {
        id: 'item_abyssal_brand',
        role: 'Rare',
        path: 'Item',
        name: 'Abyssal Brand',
        slots: 1,
        damage: 2,
        effects: [
            { cost: 0, description: 'An edged weapon forged by a demon. On a triumph, the target hears dark whispers and takes 4 additional damage. It curses its owner when picked up, allowing the forging demon to whisper thoughts into the owner’s mind at any time.' }
        ]
    },
    {
        id: 'item_accursed_band',
        role: 'Rare',
        path: 'Item',
        name: 'Accursed Band',
        slots: 1,
        effects: [
            { cost: 0, description: 'A translucent magic bracelet that detects spirits by displaying a glowing blue rune for each spirit nearby. It allows the wearer to use the Commune With the Dead spell at will for no AP cost.' }
        ]
    },
    {
        id: 'item_big_belt_of_strong_strength',
        role: 'Rare',
        path: 'Item',
        name: 'Big Belt of Strong Strength',
        slots: 1,
        description: 'This is an unusually large belt. When you wear it, you feel unusually strong.',
        effects: [
            { cost: 1, description: 'You channel the belt’s magic power, granting you the ability to lift things as heavy as elephants for the next 10 seconds.' }
        ]
    },
    {
        id: 'item_bonebreaker',
        role: 'Rare',
        path: 'Item',
        name: 'Bonebreaker',
        slots: 1,
        damage: 2,
        effects: [
            { cost: 0, description: 'A giant hammer imbued with magic force that accelerates when swung, sending reverberating shockwaves. On a triumph, it completely shatters the creature’s bones, if it has any.' }
        ]
    },
    {
        id: 'item_chaos_pearls',
        role: 'Rare',
        path: 'Item',
        name: 'Chaos Pearls',
        slots: 1,
        effects: [
            { cost: 0, description: 'A bag of luminescent magic pearls. When you throw one nearby, it explodes with invisible magic force, releasing a shockwave that knocks down all creatures nearby, damages weak objects, and sends small things flying.' }
        ]
    },
    {
        id: 'item_dawnbringer',
        role: 'Rare',
        path: 'Item',
        name: 'Dawnbringer',
        slots: 1,
        damage: 2,
        description: 'A greathammer imbued with radiant light by an archmage who worshipped their world’s north star.',
        effects: [
            { cost: 2, description: 'Raise the hammer and speak its incantation to emit the blinding light of a star. Any creature that can see the light and has their eyes open is blinded for the next minute.' }
        ]
    },
    {
        id: 'item_death_adder',
        role: 'Rare',
        path: 'Item',
        name: 'Death Adder',
        slots: 1,
        description: 'A small, golden, magic tally counter that increases by 1 whenever a person dies nearby.',
        effects: [
            { cost: 1, description: 'The Death Adder reveals the cause of death for its most recent tally.' }
        ]
    },
    {
        id: 'item_defiance',
        role: 'Rare',
        path: 'Item',
        name: 'Defiance',
        slots: 1,
        damage: 2,
        effects: [
            { cost: 0, description: 'A silvered short blade that grants immunity against magic that affects the mind. However, it curses its owner with overconfidence, rendering them unable to rationally evaluate danger.' }
        ]
    },
    {
        id: 'item_draconis',
        role: 'Rare',
        path: 'Item',
        name: 'Draconis',
        slots: 1,
        damage: 2,
        effects: [
            { cost: 0, description: 'A longsword forged in dragon’s breath. When unsheathed, it glows red-hot. On a triumph, the blade roars and explodes in flame, dealing 4 additional damage.' }
        ]
    },
    {
        id: 'item_dress_of_many_pockets',
        role: 'Rare',
        path: 'Item',
        name: 'Dress of Many Pockets',
        slots: 1,
        effects: [
            { cost: 0, description: 'A dress that can store up to 10 items in a pocket-sized shadow plane. These items do not count against your inventory limit. If the dress is destroyed, all stored items fall out.' }
        ]
    },
    {
        id: 'item_gideons_shroud',
        role: 'Rare',
        path: 'Item',
        name: "Gideon's Shroud",
        slots: 1,
        effects: [
            { cost: 0, description: 'A black cloak that makes the wearer undetectable by clairvoyance magic. Anyone attempting to spy on the wearer feels confused and gains misleading information.' }
        ]
    },
    {
        id: 'item_lichblade',
        role: 'Rare',
        path: 'Item',
        name: 'Lichblade',
        slots: 1,
        damage: 2,
        effects: [
            { cost: 0, description: 'A withering sword that recovers 1 HP for its user each time it deals damage, devouring the victim’s life force. Its original owner (a banished lich) can sense its presence and wants it back.' }
        ]
    },
    {
        id: 'item_masterwork',
        role: 'Rare',
        path: 'Item',
        name: 'Masterwork',
        slots: 1,
        damage: 3,
        effects: [
            { cost: 0, description: 'A weapon of incredible quality bearing its maker’s mark. There are only a handful of copies like it.' }
        ]
    },
    {
        id: 'item_needful_gift_box',
        role: 'Rare',
        path: 'Item',
        name: 'Needful Gift Box',
        slots: 1,
        effects: [
            { cost: 0, description: 'A small wooden box that senses an object of value desired by another party during a trade negotiation. It creates a convincing illusion of that object inside. The illusion permanently disappears if it spends 1 minute outside the box.' }
        ]
    },
    {
        id: 'item_perspicacious_pot',
        role: 'Rare',
        path: 'Item',
        name: 'Perspicacious Pot',
        slots: 1,
        effects: [
            { cost: 0, description: 'A silver pot that temporarily devours its contents into a shadow plane. After 1 minute, the contents are returned slimier, and a recipe with ingredients on how to create the item appears etched on the side of the pot.' }
        ]
    },
    {
        id: 'item_portal_chalk',
        role: 'Rare',
        path: 'Item',
        name: 'Portal Chalk',
        slots: 1,
        effects: [
            { cost: 0, description: 'A stick of chalk used to draw closed shapes that become teleportation portals. You must draw two portals for them to become an active gateway. The chalk crumbles to dust once they become active.' }
        ]
    },
    {
        id: 'item_professor_prims_mind_exploder',
        role: 'Rare',
        path: 'Item',
        name: "Professor Prim's Mind Exploder",
        slots: 1,
        effects: [
            { cost: 0, description: 'A bitter magic tablet. When dissolved in water and consumed, you forget an ability you already know, and learn a new one of your choice.' }
        ]
    },
    {
        id: 'item_scintillating_wand',
        role: 'Rare',
        path: 'Item',
        name: 'Scintillating Wand',
        slots: 1,
        effects: [
            { cost: 0, description: 'A colorful wand that makes you feel giddy. You can use it to cast the Scintillate spell at will.' }
        ]
    },
    {
        id: 'item_scrying_sphere',
        role: 'Rare',
        path: 'Item',
        name: 'Scrying Sphere',
        slots: 1,
        description: 'A magic crystal ball that makes a ringing sound when uncovered.',
        effects: [
            { cost: 1, description: 'When you hold the sphere and gaze into it, you can use the Scry spell. You may only activate it once per game session.' }
        ]
    },
    {
        id: 'item_scion',
        role: 'Rare',
        path: 'Item',
        name: 'Scion',
        slots: 1,
        effects: [
            { cost: 0, description: 'A magic pincushion. When a pin coated with a creature’s blood is pressed into it, it audibly whispers the family names of the creature’s closest blood relatives.' }
        ]
    },
    {
        id: 'item_serpentine_staff',
        role: 'Rare',
        path: 'Item',
        name: 'Serpentine Staff',
        slots: 1,
        damage: 2,
        description: 'A magic snakewood staff made by ancient druids.',
        effects: [
            { cost: 1, description: 'Whisper a command to transform the staff into a magical illusion of a viper that you control telepathically (4 HP, attacks deal 1 damage). If killed, it reverts to the staff.' }
        ]
    },
    {
        id: 'item_spell_scroll',
        role: 'Rare',
        path: 'Item',
        name: 'Spell Scroll',
        slots: 1,
        effects: [
            { cost: 0, description: 'Scrolls enchanted with the knowledge of a single spell. Anyone holding it can read the words to activate the spell. The Sense Magic ability can identify unmarked scrolls.' }
        ]
    },
    {
        id: 'item_spirit_trap',
        role: 'Rare',
        path: 'Item',
        name: 'Spirit Trap',
        slots: 1,
        effects: [
            { cost: 0, description: 'A crystal orb that automatically captures one nearby spirit creature (not bosses). A hazy portrait of the spirit can be seen inside. Spirits can only be released by shattering the orb.' }
        ]
    },
    {
        id: 'item_the_bouncer',
        role: 'Rare',
        path: 'Item',
        name: 'The Bouncer',
        slots: 1,
        effects: [
            { cost: 0, description: 'A magic buckler. If a foe within reach attacks you with a weapon and rolls a failure, you may have their attack bounce off, hitting themselves for 2 HP instead.' }
        ]
    },
    {
        id: 'item_the_compensator',
        role: 'Rare',
        path: 'Item',
        name: 'The Compensator',
        slots: 1,
        damage: 2,
        effects: [
            { cost: 0, description: 'A humble broadsword. Whenever it makes contact with another weapon, the blade instantly morphs to become twice as large as the weapon it touched.' }
        ]
    },
    {
        id: 'item_the_eager_edge',
        role: 'Rare',
        path: 'Item',
        name: 'The Eager Edge',
        slots: 1,
        damage: 3,
        effects: [
            { cost: 0, description: 'A sentient magic sword that loves fighting. Your first attack with it in a fight is automatically successful. If you back down from a fight, it will loosen itself and slide toward someone else nearby.' }
        ]
    },
    {
        id: 'item_the_miracle_sponge',
        role: 'Rare',
        path: 'Item',
        name: 'The Miracle Sponge',
        slots: 1,
        effects: [
            { cost: 0, description: 'A sponge connected to a shadow plane reservoir, allowing it to rapidly absorb enough liquid to fill a swimming pool. Squeezing it releases the liquid at a normal rate.' }
        ]
    },

    // ---------------------------------------------------------
    // LEGENDARY ITEMS
    // ---------------------------------------------------------
    {
        id: 'item_a_magicians_key',
        role: 'Legendary',
        path: 'Item',
        name: "A Magician's Key",
        slots: 1,
        description: 'An obsidian skeleton key. Holding it gives a fleeting feeling of someone visiting your mind.',
        effects: [
            { cost: 5, description: 'Turn the key in a door’s lock to create a Shadow Haven of the dwelling the door leads to. You control it.' }
        ]
    },
    {
        id: 'item_ancient_rangers_pouch',
        role: 'Legendary',
        path: 'Item',
        name: "Ancient Ranger's Pouch",
        slots: 1,
        effects: [
            { cost: 0, description: 'A nearly fossilized pouch filled with seeds. When planted, a seed grows into a full-sized sentient tree creature within one week that considers you a friend for life.' }
        ]
    },
    {
        id: 'item_bane',
        role: 'Legendary',
        path: 'Item',
        name: 'Bane',
        slots: 1,
        rollTheDie: true,
        effects: [
            { cost: 2, description: 'When unsheathed, it may try to charm a nearby creature (except party members). On a success, the creature is charmed, covets the dagger, and will relentlessly hunt you for a week. Damage dealt by Bane permanently decreases the target’s max HP.' }
        ]
    },
    {
        id: 'item_blood_pact',
        role: 'Legendary',
        path: 'Item',
        name: 'Blood Pact',
        slots: 1,
        damage: 4,
        effects: [
            { cost: 0, description: 'A sentient blade that curses the owner, demanding a kill once per day. Failing to do so steals 1 max HP per day (until 1 HP). HP is returned when the blade’s thirst is quenched. Can only be destroyed by killing its linked spirit.' }
        ]
    },
    {
        id: 'item_cloak_of_a_hundred_billion_stars',
        role: 'Legendary',
        path: 'Item',
        name: 'Cloak of a Hundred Billion Stars',
        slots: 1,
        effects: [
            { cost: 0, description: 'A shimmering cloak that transfixes onlookers with the expanse of the omniverse. When worn by an Invoker, they can use the Invoke ability at will for no AP cost.' }
        ]
    },
    {
        id: 'item_conways_comrades',
        role: 'Legendary',
        path: 'Item',
        name: "Conway's Comrades",
        slots: 1,
        description: 'A set of 9 magic toy figurines in a box reading: "Fine Company In Case Of Catastrophe."',
        effects: [
            { cost: 4, description: 'Place them in battle formation and speak a command. They transform into soldiers (treated as a single creature with 10 HP and 4 Attack) that follow your orders. They revert to toys at 0 HP.' }
        ]
    },
    {
        id: 'item_cosmic_purse',
        role: 'Legendary',
        path: 'Item',
        name: 'Cosmic Purse',
        slots: 1,
        effects: [
            { cost: 0, description: 'A bag functioning as a portal to a private shadow plane with unlimited storage. Items inside don’t count against inventory limits. Reach in while imagining an item to retrieve it. If destroyed, all contents spill out.' }
        ]
    },
    {
        id: 'item_creightons_fascinators',
        role: 'Legendary',
        path: 'Item',
        name: "Creighton's Fascinators",
        slots: 1,
        description: 'Boots that project an aura of leadership. Commoners will listen to you and join earnest causes.',
        effects: [
            { cost: 5, description: 'While wearing the boots, you can recruit a dutiful companion according to the rules of the Attendant ability. Limit one.' }
        ]
    },
    {
        id: 'item_echo',
        role: 'Legendary',
        path: 'Item',
        name: 'Echo',
        slots: 1,
        effects: [
            { cost: 0, description: 'A ring that automatically duplicates any harmful spell that successfully takes effect on you, immediately casting it back on the spell’s source.' }
        ]
    },
    {
        id: 'item_fable',
        role: 'Legendary',
        path: 'Item',
        name: 'Fable',
        slots: 1,
        damage: 3,
        effects: [
            { cost: 0, description: 'An indestructible weapon that shapes its appearance to match its hero. It binds to you until death, can be summoned to your hands with a wish, and records your heroic deeds in a central omniverse ledger.' }
        ]
    },
    {
        id: 'item_guile',
        role: 'Legendary',
        path: 'Item',
        name: 'Guile',
        slots: 1,
        description: 'A brooch that stores the face of any creature you converse with.',
        effects: [
            { cost: 1, description: 'Projects an illusion giving you the appearance of any creature stored in the brooch.' }
        ]
    },
    {
        id: 'item_gungroxs_coin',
        role: 'Legendary',
        path: 'Item',
        name: "Gungrox's Coin",
        slots: 1,
        effects: [
            { cost: 0, description: 'Once per session, flip a coin. If tails, you may harness its power to randomize your role by swapping your current ability cards for a new random set from the deck.' }
        ]
    },
    {
        id: 'item_harmony',
        role: 'Legendary',
        path: 'Item',
        name: 'Harmony',
        slots: 1,
        description: 'A weathered lute that resonates across the omniverse.',
        effects: [
            { cost: 5, description: 'Play the lute’s song to open a two-way portal to a random place where great music is currently being performed. It remains open until you play the song again.' }
        ]
    },
    {
        id: 'item_harpers_haven',
        role: 'Legendary',
        path: 'Item',
        name: "Harper's Haven",
        slots: 1,
        description: 'Once per session, placing this figurine down creates a forest oasis where creatures receive the benefit of a full rest.',
        effects: [
            { cost: 10, description: 'Awaken its ancient magic to cast the World Wish spell, consuming the figurine instead of the user.' }
        ]
    },
    {
        id: 'item_junes_blanket',
        role: 'Legendary',
        path: 'Item',
        name: "June's Blanket",
        slots: 1,
        description: 'An impossibly soft blanket belonging to a legendary healer.',
        effects: [
            { cost: 1, description: 'Whisper "be with them" while draping it to lift a creature’s sadness, leaving them peaceful and confident for a week.' },
            { cost: 4, description: 'Whisper "be with them, for they are forgiven" to additionally apply the effects of the Forgive spell.' }
        ]
    },
    {
        id: 'item_lorelais_wand',
        role: 'Legendary',
        path: 'Item',
        name: "Lorelai's Wand",
        slots: 1,
        effects: [
            { cost: 0, description: 'Bind yourself to this wand (painful but exciting). Your activated abilities cost 1 AP less (minimum 1 AP) and harmful spells deal 50% more damage. However, you can only know a maximum of 10 abilities.' }
        ]
    },
    {
        id: 'item_lorens_luminous_starglass',
        role: 'Legendary',
        path: 'Item',
        name: "Loren's Luminous Starglass",
        slots: 1,
        description: 'A telescope that shows a pristine view of space, ignoring obstacles.',
        effects: [
            { cost: 3, description: 'Show the nearest planet where life is present.' },
            { cost: 9, description: 'Open a two-way portal to the most recent planet identified.' }
        ]
    },
    {
        id: 'item_multivious_map',
        role: 'Legendary',
        path: 'Item',
        name: 'Multivious Map',
        slots: 1,
        effects: [
            { cost: 1, description: 'A sentient map of the stars. Ask it for help, and it will suggest the most promising courses of action for the party (like asking the Guide for hints).' }
        ]
    },
    {
        id: 'item_nightmare',
        role: 'Legendary',
        path: 'Item',
        name: 'Nightmare',
        slots: 1,
        damage: 3,
        effects: [
            { cost: 0, description: 'An impossibly black greatsword. On a triumph, it gives the target a waking nightmare for a minute, rendering them unable to act. On a catastrophe, the wielder receives the nightmare.' }
        ]
    },
    {
        id: 'item_resplendent_plate',
        role: 'Legendary',
        path: 'Item',
        name: 'Resplendent Plate',
        slots: 1,
        effects: [
            { cost: 0, description: 'Armor that grants resistance to physical attacks (half damage) and never dents. Draws crowds in populated areas. It loses its resistive effect when in a shadow plane.' }
        ]
    },
    {
        id: 'item_rebellion',
        role: 'Legendary',
        path: 'Item',
        name: 'Rebellion',
        slots: 1,
        description: 'An ancient bronze shield depicting commoners rising against rulers.',
        effects: [
            { cost: 4, description: 'Releases a reverberating sound. Commoners who hear it feel the fires of independence and take unpredictable action against whoever is keeping them down.' }
        ]
    },
    {
        id: 'item_shadow',
        role: 'Legendary',
        path: 'Item',
        name: 'Shadow',
        slots: 1,
        effects: [
            { cost: 3, description: 'A shortblade forged by a malevolent god. Creatures killed by it have their souls sent to a hellish shadow plane for eternity. The wielder takes 1 damage from glimpsing their torment.' }
        ]
    },
    {
        id: 'item_the_cosmic_cruiser',
        role: 'Legendary',
        path: 'Item',
        name: 'The Cosmic Cruiser',
        slots: 1,
        description: 'A magic starship for 10 crew members. It adapts its appearance to fit the local technology. It provides quarters, a bridge, galley, armory, and life support.',
        effects: [
            { cost: 3, description: 'Teleport to The Rift (party can pool AP).' },
            { cost: 9, description: 'Teleport to any known or random location (party can pool AP).' }
        ]
    },
    {
        id: 'item_the_toll',
        role: 'Legendary',
        path: 'Item',
        name: 'The Toll',
        slots: 1,
        effects: [
            { cost: 0, description: 'An iridescent coin. If you die holding it, you wake in a paradise with an astral guardian. Give them the coin to return to life fully restored. Keep it to remain in paradise, forever alone.' }
        ]
    },
    {
        id: 'item_unity',
        role: 'Legendary',
        path: 'Item',
        name: 'Unity',
        slots: 1,
        effects: [
            { cost: 0, description: 'A magic pin that allows all creatures nearby it to comprehend and communicate with each other, regardless of language.' }
        ]
    },
    {
        id: 'item_vol',
        role: 'Legendary',
        path: 'Item',
        name: 'Vol',
        slots: 1,
        damage: 3,
        rollTheDie: true,
        description: 'A magic spear attuned to nature. It vibrates when a lightning storm will form within a day.',
        effects: [
            { cost: 0, description: 'If you roll a 20 when throwing it, it becomes a bolt of lightning hitting up to 3 targets for 6 damage each. If you roll a 1, you are shocked for 2 HP.' }
        ]
    },

    // ---------------------------------------------------------
    // SUPREME ITEMS
    // ---------------------------------------------------------
    {
        id: 'item_conservators_ring',
        role: 'Supreme',
        path: 'Item',
        name: "Conservator's Ring",
        slots: 1,
        effects: [
            { cost: 9, description: 'Teleport yourself and nearby creatures to another universe. Doing so completely destroys the universe you left behind (and its Rift anchor) in a prismatic conflagration. The ring records your deed and location to other ring bearers.' }
        ]
    },
    {
        id: 'item_cosmic_forge',
        role: 'Supreme',
        path: 'Item',
        name: 'Cosmic Forge',
        slots: 1,
        rollTheDie: true,
        description: 'An obsidian ring permanently attached to the bearer. Snap your fingers to conjure any object (except another Forge).',
        effects: [
            { cost: 0, description: 'Roll the die to conjure.' }
        ],
        rollTable: [
            { value: 20, description: 'You conjure the object. It is perfect in every way.' },
            { value: 11, description: '(11-19) You conjure the object, but the ring overheats, hitting you for 6 HP.' },
            { value: 6, description: '(6-10) You conjure the object, but it is cursed with a random effect.' },
            { value: 2, description: '(2-5) You conjure the object, but it appears in a random location in the omniverse.' },
            { value: 1, description: 'You crumble to dust and are destroyed.' }
        ]
    },
    {
        id: 'item_dubbins_dire_die',
        role: 'Supreme',
        path: 'Item',
        name: "Dubbin's Dire Die",
        slots: 1,
        effects: [
            { cost: 4, description: 'Bends fate. The next 10 rolls nearby use this spread: 1-9 (Catastrophe), 10 (Tough Choice), 11-20 (Triumph). If the owner rolls a 1 while active, it explodes dealing 4 damage to all creatures within 1,000 kilometers.' }
        ]
    },
    {
        id: 'item_it_whispers_to_you',
        role: 'Supreme',
        path: 'Item',
        name: 'It Whispers To You',
        slots: 1,
        effects: [
            { cost: 0, description: 'A ring that grants the ability to cast the Control spell permanently and irresistibly on a target. However, each use permanently reduces your max HP by 3. If used more than 3 times, you die.' }
        ]
    },
    {
        id: 'item_the_hand',
        role: 'Supreme',
        path: 'Item',
        name: 'The Hand',
        slots: 1,
        description: 'A pocketwatch with a single hand and no markings. It has two crown stops.',
        effects: [
            { cost: 3, description: 'First stop: Rotate clockwise to see the future of your surroundings, or counterclockwise for the past.' },
            { cost: 9, description: 'Second stop: Travel through time in the direction rotated. You don’t know exactly how far you will arrive until you stop rotating.' }
        ]
    },
    {
        id: 'item_wish_heart',
        role: 'Supreme',
        path: 'Item',
        name: 'Wish Heart',
        slots: 1,
        effects: [
            { cost: 0, description: 'A locket that turns thought into reality. State your wish to the visage inside. The wish comes true in an unpredictable manner chosen by the Guide, and the locket vanishes. The only safe wish is asking to be reunited with a loved one, which occurs without consequence.' }
        ]
    }
];