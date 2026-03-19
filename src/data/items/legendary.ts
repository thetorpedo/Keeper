import type { Ability } from '@/data/interface.ts';

export const legendaryItems: Ability[] = [
    {
        "id": "item_a_magicians_key",
        "role": "Legendary",
        "path": "Item",
        "name": "A magician’s key",
        "slots": 1,
        "effects": [
            {
                "cost": 5,
                "description": "This is an obsidian skeleton key with a simple tooth that can fit inside a door’s lock. Whenever you hold the key, you catch a fleeting feeling, as if someone is visiting your mind. You turn the key in a door’s lock, creating a Shadow Haven of the dwelling the door leads to. You control it."
            }
        ]
    },
    {
        "id": "item_ancient_rangers_pouch",
        "role": "Legendary",
        "path": "Item",
        "name": "Ancient ranger’s pouch",
        "slots": 1,
        "rollTheDie": true,
        "effects": [
            {
                "cost": 0,
                "description": "This is a pouch whose leather hide is so old that it is nearly fossilized. The pouch is filled with seeds. (Roll the die when you first receive the pouch. The result is how many seeds are inside.) When you plant one of the seeds, it grows into a full-sized sentient tree creature within one week. The tree knows who you are and considers you a friend for life."
            }
        ]
    },
    {
        "id": "item_bane",
        "role": "Legendary",
        "path": "Item",
        "name": "Bane",
        "slots": 1,
        "effects": [
            {
                "cost": 2,
                "description": "Bane is a magical dagger once wielded by a jealous lover. Once it is picked up, the dagger attunes itself to its owner. When the dagger is unsheathed, it may try to charm a nearby creature that can see it, except for members of the party. The Guide will ask you to roll the die when Bane tries to charm a creature. On a success, the creature is charmed: they covet the dagger, and it becomes their greatest worldly desire. Any creature affected in this way will regard the dagger’s owner as their mortal enemy, and for the next week, they will relentlessly pursue their destruction at any personal cost. All damage dealt by the weapon has a corrupting effect that permanently decreases the target’s hit point maximum by the amount of damage dealt."
            }
        ]
    },
    {
        "id": "item_blood_pact",
        "role": "Legendary",
        "path": "Item",
        "name": "Blood pact",
        "damage": 4,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "The Blood Pact is a sentient blade that curses whoever picks it up. The blade demands that those cursed by it kill a creature at least once per day. While holding the blade, the wielder feels intense pleasure from drawing blood with it. If those cursed by the blade do not kill a creature by the end of each day, the blade steals 1 HP from their hit point maximum. (This effect cannot bring a player below 1 max HP.) The maximum HP is returned when the cursed creature quenches the blade’s thirst. The curse can only be lifted by destroying the sword, and the sword can only be destroyed by killing the spirit creature who is linked to it — wherever they are."
            }
        ]
    },
    {
        "id": "item_cloak_of_a_hundred_billion_stars",
        "role": "Legendary",
        "path": "Item",
        "name": "Cloak of a hundred billion stars",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a shimmering blue cloak that drifts in and out of material form as it is stroked by an ethereal cosmic breeze. Any creature that looks at the cloak is momentarily transfixed and feels humbled by the incomprehensible expanse of the omniverse. When worn by an Invoker, the wearer can use the Invoke ability at will for no AP cost."
            }
        ]
    },
    {
        "id": "item_conways_comrades",
        "role": "Legendary",
        "path": "Item",
        "name": "Conway’s comrades",
        "slots": 1,
        "effects": [
            {
                "cost": 4,
                "description": "This is a set of 9 magic toy figurines in a beautifully carved wooden box. A golden plaque inside the box reads: “Fine Company In Case Of Catastrophe.” When the figurines are placed on the floor in a battle formation, you can speak a magic command to activate them. They instantly transform into a group of life-sized soldiers armed with swords and bows. (The group is treated as a single powerful creature with 10 HP and 4 Attack.) The soldiers are not conscious and do nothing except for what they are told. You may command the soldiers to perform actions in unison on your turn. If the soldiers are reduced to 0 HP, they revert to their form as toy figurines."
            }
        ]
    },
    {
        "id": "item_cosmic_purse",
        "role": "Legendary",
        "path": "Item",
        "name": "Cosmic purse",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a magic bag with a golden tie whose silky fabric looks like the glimmering surface of the night sky. The bag’s dinner plate-sized opening is a portal to its own private shadow plane where an unlimited number of items may be stored and sorted in secret. When you reach into the bag, your hand will grasp any stored item that you are currently imagining. Items stored in the bag do not count against your inventory limit. If the bag is ripped or destroyed, all of its contents are tossed out of the opening as its shadow plane closes."
            }
        ]
    },
    {
        "id": "item_creightons_fascinators",
        "role": "Legendary",
        "path": "Item",
        "name": "Creighton’s fascinators",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This pair of tall black boots is adorned with wondrous stitching and a permanent shine. They fill the wearer with a robust feeling of confidence and make them feel as if they’re walking on clouds. While wearing these boots, you cast an aura of leadership. Commoners nearby will listen to you speak if you try to grab their attention. If they are not hostile toward you, they will join a cause you earnestly espouse, like backing a new leader or supporting a civic proposal. The wearer of these boots will often find themselves invited to exclusive places."
            },
            {
                "cost": 5,
                "description": "While wearing the boots, you can recruit a dutiful companion according to the rules of the Attendant ability. You may only have one recruit at a time."
            }
        ]
    },
    {
        "id": "item_echo",
        "role": "Legendary",
        "path": "Item",
        "name": "Echo",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "Echo was a ring belonging to a legendary assassin who hunted magic users across planes of existence. Whenever a harmful spell successfully takes effect on its wearer, the ring automatically duplicates the spell, immediately casting it on the spell’s source."
            }
        ]
    },
    {
        "id": "item_fable",
        "role": "Legendary",
        "path": "Item",
        "name": "Fable",
        "damage": 3,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a weapon that has been found again and again by heroes throughout time. It presents itself differently in appearance and form to match the style of each hero who finds it. When you pick it up, it binds itself to you until your death. If you and the weapon ever part, you can have it blink back into your hands simply by wishing it to return. Fable is indestructible. It cannot be dinged, damaged, or undone in any way. Until your death, all of your deeds are observed by the weapon and recorded by a central ledger of heroic deeds, somewhere in the omniverse."
            }
        ]
    },
    {
        "id": "item_guile",
        "role": "Legendary",
        "path": "Item",
        "name": "Guile",
        "slots": 1,
        "effects": [
            {
                "cost": 1,
                "description": "Guile is a cameo brooch crafted by a powerful magician. After the wearer of Guile encounters a creature and has a conversation with them, the embossed visage on the brooch transforms into the face of the creature the wearer was speaking to. The item stores the likeness of each creature the wearer speaks to. On command, Guile projects an illusion, giving the wearer the appearance of a creature it has stored."
            }
        ]
    },
    {
        "id": "item_gungroxs_coin",
        "role": "Legendary",
        "path": "Item",
        "name": "Gungrox’s coin",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a smooth platinum coin from an unknown dimension whose embossed symbols have nearly been worn into oblivion. Whoever picks the coin up becomes attuned to it and begins to feel its presence on their person, developing an urge to constantly turn it over in their pocket with their hands. Once per game session, you may flip a coin at the table. If the coin lands on heads, nothing happens. If it lands on tails, you may harness the coin’s interdimensional power and randomize your role. If you randomize your role, take your cards and put them back in a Quest Core Deck. Then, shuffle the deck, and draw cards equal to the number you put in. You may use these abilities for the remainder of the game session."
            }
        ]
    },
    {
        "id": "item_harmony",
        "role": "Legendary",
        "path": "Item",
        "name": "Harmony",
        "slots": 1,
        "effects": [
            {
                "cost": 5,
                "description": "This is a weathered wooden lute whose rosette is a magical singularity that resonates across the vastness of the omniverse. A short music sheet is etched into the neck. You play the lute’s song, opening a two-way portal nearby that leads to a random place in the omniverse where great music is currently being performed. The portal remains open until you use the lute to play the song again."
            }
        ]
    },
    {
        "id": "item_harpers_haven",
        "role": "Legendary",
        "path": "Item",
        "name": "Harper’s haven",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is a small stone figurine of a Naturalist holding a blooming flower. Once per game session, when Harper’s Haven is placed on the ground, moss begins to spread out from the figurine. The moss covers all surfaces until the area nearby looks like a forest oasis. Creatures inside of this area hear the calming ambient sounds of the forest and they receive the benefit of a full rest while regrouping here."
            },
            {
                "cost": 10,
                "description": "You activate the figurine, awakening its ancient magic. This has the effect of the World Wish spell. The figurine is consumed by the spell instead of the user."
            }
        ]
    },
    {
        "id": "item_junes_blanket",
        "role": "Legendary",
        "path": "Item",
        "name": "June’s blanket",
        "slots": 1,
        "effects": [
            {
                "cost": 1,
                "description": "Option A: You whisper “be with them” to the blanket when draping it on another creature. If the creature is sad or suffering, they feel the weight of their troubles lift. They do not forget anything, but they are left with a feeling of peace, calm, and confidence for the next week."
            },
            {
                "cost": 4,
                "description": "Option B: If you instead whisper “be with them, for they are forgiven,” they feel the weight of their troubles lift and are also affected by the Forgive spell."
            }
        ]
    },
    {
        "id": "item_lorelais_wand",
        "role": "Legendary",
        "path": "Item",
        "name": "Lorelai’s wand",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This wand once belonged to one of the omniverse’s most powerful wizards, before they were lost on a journey to The Beyond. You may choose to bind yourself to the wand’s energy by holding it and verbally inviting its power. Upon making the bond, you feel the wand’s power coarse through every part of your body — a painful but exciting sensation. The wand is now yours: it cannot bind to others until you die. When you are holding the wand, your activated abilities now cost 1 AP less to activate, but cannot cost less than 1 AP. Additionally, the wand overloads your spells, causing any harmful spells to deal 50 percent more damage, rounding up. However, you may now only know up to 10 abilities. If you know more than 10, when binding yourself to the wand, you must immediately choose abilities to forget until you are left with 10 or fewer. If you have 10 abilities and choose to learn a new one, you must forget another ability."
            }
        ]
    },
    {
        "id": "item_lorens_luminous_starglass",
        "role": "Legendary",
        "path": "Item",
        "name": "Loren’s luminous starglass",
        "slots": 1,
        "effects": [
            {
                "cost": 3,
                "description": "Option A: This is a finely polished brass telescope forged in the fires of creation. When you look into the eyepiece, it shows a pristine view of space in the direction you are pointing it. (The telescope ignores anything that would obscure the view, like objects, atmospheres, or daylight.) When you turn a switch on the side of the telescope, it shows you the nearest planet where life is present."
            },
            {
                "cost": 9,
                "description": "Option B: By turning the switch forward an extra notch, the telescope opens a two-way portal nearby that leads to the most recent planet it has identified. The portal remains open until you turn the switch to its original position."
            }
        ]
    },
    {
        "id": "item_multivious_map",
        "role": "Legendary",
        "path": "Item",
        "name": "Multivious map",
        "slots": 1,
        "effects": [
            {
                "cost": 1,
                "description": "A sentient map of the stars that loves to pontificate about possibility. You ask the map for help. It will suggest the most promising courses of action for the party. (This is effectively like asking the Guide for useful hints about where to go next.)"
            }
        ]
    },
    {
        "id": "item_nightmare",
        "role": "Legendary",
        "path": "Item",
        "name": "Nightmare",
        "damage": 3,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "Nightmare is a two-handed greatsword that appears to be impossibly black. On a triumph, the sword gives its target a waking nightmare for the next minute, rendering it completely unable to act. This effect is dispelled if the victim of the nightmare takes damage. If the wielder scores a catastrophe on an attack with the sword, they receive the nightmare instead."
            }
        ]
    },
    {
        "id": "item_prismatic_circlet",
        "role": "Legendary",
        "path": "Item",
        "name": "Prismatic circlet",
        "slots": 1,
        "effects": [
            {
                "cost": 3,
                "description": "This crystal crown sparkles with prismatic colors. When the crown is placed on the ground, it can be activated to project a major illusion. You set the circlet on the ground, creating an illusion of your choice. Use the rules for the Mirage spell when creating this illusion."
            }
        ]
    },
    {
        "id": "item_resplendent_plate",
        "role": "Legendary",
        "path": "Item",
        "name": "Resplendent plate",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This indomitable breastplate made of an unknown metal draws the attention of most who see it. If you wear this in populated areas, commoners may crowd you, attempting to touch the plate. The wearer of this armor becomes resistant to physical attacks and only takes half damage from them. When the armor is hit by weapons, they inexplicably fail to leave a scratch or dent. The plate is reactive to shadow planes. It appears to wither when in a shadow plane and loses its resistive effect until it leaves."
            }
        ]
    },
    {
        "id": "item_rebellion",
        "role": "Legendary",
        "path": "Item",
        "name": "Rebellion",
        "slots": 1,
        "effects": [
            {
                "cost": 4,
                "description": "This is an ancient bronze shield with an etching that depicts commoners rising up against their rulers in a great battle. You close your eyes and squeeze the shield’s handle, activating its ancient power. The shield releases a reverberating sound like a giant bell being rung. If any nearby commoners hear Rebellion’s call, they stop what they are doing and feel the fires of independence ignite in their hearts. Then, they take action against whatever or whoever is keeping them down. Each person’s protest is their own; the consequences of using Rebellion are often unpredictable."
            }
        ]
    },
    {
        "id": "item_shadow",
        "role": "Legendary",
        "path": "Item",
        "name": "Shadow",
        "damage": 0,
        "slots": 1,
        "effects": [
            {
                "cost": 3,
                "description": "Shadow is a magic shortblade forged by a malevolent god. Whenever the blade kills a creature, that creature’s soul is transported to a hellish shadow plane where it is tormented for eternity. Each time a creature is killed by the blade, its wielder experiences a glimpse of the slain creature’s torment, dealing them 1 damage."
            }
        ]
    },
    {
        "id": "item_the_cosmic_cruiser",
        "role": "Legendary",
        "path": "Item",
        "name": "The cosmic cruiser",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "The Cosmic Cruiser is a magic starship that can travel through space with a crew of up to 10 creatures. The vessel can also travel between planes, The Rift, and other parallel universes. The party can pool their adventure points to activate the ship’s travel features. In its default form, the Cruiser is a galleon in a crystal sphere. When it enters a new region of the omniverse, it can detect the nature and style of that region’s technology, and change its form to fit in among it. Regardless of its form, the Cruiser always has personal quarters for each crew member, a bridge where the ship can be controlled, a galley, an armory, and a common area. It can support its own livable atmosphere and conjure food and drink for its crew."
            },
            {
                "cost": 3,
                "description": "Option A: Teleport to The Rift."
            },
            {
                "cost": 9,
                "description": "Option B: Teleport to any known location, or a random location."
            }
        ]
    },
    {
        "id": "item_the_toll",
        "role": "Legendary",
        "path": "Item",
        "name": "The toll",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This is an iridescent coin with a hole in the middle that always feels warm to the touch. Holding this coin on your person makes everything you have seem slightly heavier. If you die while possessing The Toll, you wake up in a lush field under an unknown star, surrounded by natural paradise. You carry nothing from your prior life, except for the coin, which appears in your hand. When you wake, an astral guardian approaches you and asks for The Toll. If you give it to them, you return to your mortal body completely restored — giving you a second chance on life. If you keep the coin instead, the guardian leaves, never to return. You remain alive in this paradise — forever alone."
            }
        ]
    },
    {
        "id": "item_unity",
        "role": "Legendary",
        "path": "Item",
        "name": "Unity",
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "Unity is a magic pin once worn by a great diplomat. While nearby the pin, creatures become able to comprehend the languages of any and all other creatures also nearby the pin and can communicate with them."
            }
        ]
    },
    {
        "id": "item_vol",
        "role": "Legendary",
        "path": "Item",
        "name": "Vol",
        "damage": 3,
        "slots": 1,
        "effects": [
            {
                "cost": 0,
                "description": "This magic spear, once belonging to a demigod, is attuned to nature and begins vibrating when a lightning storm will form within the next day. If you roll a 20 while throwing the spear, it becomes a bolt of lightning that streaks between up to 3 nearby targets of your choice, dealing them each 6 HP of damage. If you roll a 1, you are shocked by the spear and hit for 2 HP."
            }
        ]
    }
]