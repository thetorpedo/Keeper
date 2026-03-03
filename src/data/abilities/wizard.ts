// src/data/bookAbilities.ts

export interface AbilityEffect {
    name?: string;
    cost: number | string;
    description: string;
}

export interface Ability {
    id: string;
    role: string;
    path: string;
    name: string;
    description?: string;
    rollTheDie?: boolean; // <-- Adicionado aqui!
    effects: AbilityEffect[];
}

export const bookAbilities: Ability[] = [
    // ==========================================
    // PATH: EVOCATION
    // ==========================================
    {
        id: "wiz_magic_strike",
        role: "Wizard",
        path: "Evocation",
        name: "Magic Strike",
        rollTheDie: true, // <-- Marcado como true
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
        id: "wiz_kindle",
        role: "Wizard",
        path: "Evocation",
        name: "Kindle",
        effects: [
            {
                cost: 0,
                description: "You rub your hands together, causing a flammable object you can see nearby to ignite in flame. The spell can ignite textiles, wood, paper, and other combustible material. This spell cannot be used directly on creatures, but it can be used to ignite flammable things they are wearing or carrying. Igniting something on a creature deals 1 damage to them."
            }
        ]
    },
    {
        id: "wiz_clap",
        role: "Wizard",
        path: "Evocation",
        name: "Clap",
        effects: [
            {
                cost: 2,
                description: "You clap your hands, creating a thunderous wave of force in the direction you are facing. The wave hits up to 3 nearby creatures for 2 HP. If affected creatures are the size of a horse or smaller, they are also knocked to the ground."
            }
        ]
    },
    {
        id: "wiz_telekinesis",
        role: "Wizard",
        path: "Evocation",
        name: "Telekinesis",
        description: "You move a nearby creature or object using only your mind.",
        effects: [
            {
                cost: 1,
                description: "You may move an object or creature no larger than an elephant. If you move it gently, you can control it for up to 10 seconds. Or you may forcefully throw it up to 5 meters away and hit it for 2 HP."
            },
            {
                cost: "X",
                description: "You may increase the power of this ability by spending additional AP. For each AP you spend, you may increase the distance you can throw the creature by 5 meters, and the damage they take by 2 HP. (For example, if you spend 5 AP, you can throw a target 25 meters and deal 10 damage.)"
            }
        ]
    },
    {
        id: "wiz_last_light",
        role: "Wizard",
        path: "Evocation",
        name: "Last Light",
        description: "You must be holding a pointed object like a wand, staff, or sword to use this spell. The beam created by Last Light can be deflected by mirrors.",
        effects: [
            {
                name: "Option A",
                cost: 3,
                description: "You momentarily channel a blinding beam of focused light in a straight line at a target you can see, dealing 6 damage. The light ignites anything flammable that it touches, melts a hole in steel objects, and sears organic matter."
            },
            {
                name: "Option B",
                cost: 5,
                description: "You overload the beam. It instantly kills commoners and minions and deals 12 damage to bosses. If Last Light kills the target, it disintegrates into ash."
            }
        ]
    },

    // ==========================================
    // PATH: CONJURATION
    // ==========================================
    {
        id: "wiz_familiar",
        role: "Wizard",
        path: "Conjuration",
        name: "Familiar",
        effects: [
            {
                cost: 2,
                description: "You summon a tiny spectral creature, like a bird, a lizard, a butterfly, or anything else of a comparable size. The familiar is the avatar of a random spirit creature from your world. It becomes your ally and will follow your instructions. The Guide chooses the creature’s background and personality, and speaks for them. The familiar may choose to leave you if they are mistreated. The familiar cannot move out of your sight. It can pick up and move objects no larger than a coin purse and no heavier than 10 pounds. It can’t attack. Your familiar has 4 HP. It is invulnerable to non-magical harm. If it is reduced to 0 HP, it vanishes, and your bond is broken. You may only have one familiar at a time."
            }
        ]
    },
    {
        id: "wiz_pegasus_cloak",
        role: "Wizard",
        path: "Conjuration",
        name: "Pegasus Cloak",
        effects: [
            {
                cost: 3,
                description: "You bestow any number of nearby creatures with illusory feather cloaks for the next hour. Affected creatures hover 1 meter above the ground and can move by gliding in the direction they want to travel. They will also fall gently until they are hovering 1 meter above ground."
            }
        ]
    },
    {
        id: "wiz_force_field",
        role: "Wizard",
        path: "Conjuration",
        name: "Force Field",
        effects: [
            {
                cost: 3,
                description: "You create a paper-thin wall of force capable of preventing non-magical creatures and objects from passing through. You may choose whether the field blocks passage on one or both sides. The field can be in any shape you want, but it must fit inside of a cube that’s 10 meters on all sides. The force field has 20 hit points and dissolves at 0 HP. You can make the field stationary or move it telepathically. (For example, you might create an invisible platform that glides beneath you as you walk.)"
            }
        ]
    },
    {
        id: "wiz_conjure",
        role: "Wizard",
        path: "Conjuration",
        name: "Conjure",
        effects: [
            {
                cost: 3,
                description: "You imagine an object, causing it to appear somewhere nearby. You can summon any object that meets these guidelines: It can’t be larger than an elephant. It can’t have magical effects. You must tell the Guide which object you want to summon. Then, the Guide thinks of a related object and gives you its name in secret. Set a timer. You have 1 minute to draw the secret object. When time is up, show it to your party. Your friends can discuss what they see, but they can only submit one guess. Don’t give the party clues. If they guess correctly, the item appears. If they guess closely but not exactly, the item appears, but it has a defect. If they’re totally wrong, a random misshapen item appears."
            }
        ]
    },

    // ==========================================
    // PATH: PLANESHIFTING
    // ==========================================
    {
        id: "wiz_blink",
        role: "Wizard",
        path: "Planeshifting",
        name: "Blink",
        effects: [
            {
                cost: 1,
                description: "You teleport to a location of your choice nearby. You vanish, leaving behind a gentle gust of wind and then instantaneously reappear nearby."
            }
        ]
    },
    {
        id: "wiz_gate",
        role: "Wizard",
        path: "Planeshifting",
        name: "Gate",
        effects: [
            {
                name: "Bind",
                cost: 1,
                description: "You bind yourself to the room you are currently in. It must belong to you or a member of the party. This is your Circle. You may only bind yourself to one at a time."
            },
            {
                name: "Gate",
                cost: 3,
                description: "Snap your fingers. Any willing party members nearby are instantly teleported to your Circle."
            }
        ]
    },
    {
        id: "wiz_portal",
        role: "Wizard",
        path: "Planeshifting",
        name: "Portal",
        effects: [
            {
                cost: 3,
                description: "You conjure a portal of any shape and orientation that is no larger than a door. It appears at a location of your choice nearby. The portal looks like a window to whatever is on the other side, and its edges crackle and spark with energy. When you cast the spell again, the new portal automatically connects to the previous one. The portals remain open until you choose to close them. Anyone that can fit may pass through them."
            }
        ]
    },
    {
        id: "wiz_dark_door",
        role: "Wizard",
        path: "Planeshifting",
        name: "Dark Door",
        effects: [
            {
                cost: 2,
                description: "You knock on a door, making it a temporary portal to a specific shadow plane. You must be aware of the shadow plane’s existence to create a door to it. When you open the door, you can see inside the plane, and you and your allies may enter it. If the door is closed, the portal vanishes. (If the door closes behind you, you become trapped in the shadow plane and must escape with other means, like with Gate.)"
            }
        ]
    },
    {
        id: "wiz_teleport",
        role: "Wizard",
        path: "Planeshifting",
        name: "Teleport",
        description: "Snap your fingers. You and any willing creatures nearby vanish instantly, leaving behind a small shockwave of air in your wake, and are teleported to any place you choose.",
        rollTheDie: true, // <-- Marcado como true
        effects: [
            {
                cost: 5,
                description: "20: Everyone arrives safely. You recover the spell’s full AP cost. 11-19: You all arrive safely. 6-10: You all arrive. Choose one: you take 7 damage from turbulence, or a magic item you are carrying is destroyed. 2-5: The party arrives safely, but nobody else does. You don’t know where they went. You lose an item you are carrying. 1: The spell fails. Party members are lacerated by an arcane explosion and are each hit for 5 HP. All other travelers are torn apart in a gruesome spectacle."
            }
        ]
    },

    // ==========================================
    // PATH: MAGECRAFT
    // ==========================================
    {
        id: "wiz_no",
        role: "Wizard",
        path: "Magecraft",
        name: "No",
        description: "By uttering the word 'no', you attempt to neutralize a spell that you see an NPC casting nearby. You must declare you are using this ability before the Guide describes the consequences of the spell.",
        rollTheDie: true, // <-- Marcado como true
        effects: [
            {
                cost: 2,
                description: "20: The spell is violently canceled and its caster is hit for 1 AP. 11-19: The spell is stopped before it is cast. 6-10: The spell misses and hits another nearby creature or target. 2-5: The spell takes effect normally. 1: You accidentally amplify the spell. If it is a harmful spell, the damage is doubled."
            }
        ]
    },
    {
        id: "wiz_reflect",
        role: "Wizard",
        path: "Magecraft",
        name: "Reflect",
        description: "You produce a counterspell, reflecting a spell that targets you. You must declare that you are reflecting the spell as soon as the Guide says that you are being targeted by a spell.",
        rollTheDie: true, // <-- Marcado como true
        effects: [
            {
                cost: 3,
                description: "11-20: The caster is hit by their own spell, instead of you. 6-10: The spell reflects off of you but misses its caster. 1-5: The spell reflects off of you but hits a nearby party member instead."
            }
        ]
    },
    {
        id: "wiz_enscroll",
        role: "Wizard",
        path: "Magecraft",
        name: "Enscroll",
        effects: [
            {
                cost: 2,
                description: "You create a Spell Scroll that can be used to produce a spell that you know. You must add the AP cost of the spell you are inscribing to the cost of Enscroll. For example, if you create a magic scroll that can produce your Teleport spell, you must spend 7 AP. You must spend a short time in a safe and quiet place to prepare the scroll. You decide what is written on it. The user of the scroll must read the words aloud to activate the spell it contains."
            }
        ]
    },
    {
        id: "wiz_spellsteal",
        role: "Wizard",
        path: "Magecraft",
        name: "Spellsteal",
        effects: [
            {
                cost: 3,
                description: "After you observe a creature nearby casting a spell, you may briefly enter their mind to glimpse its nature. You learn the spell and can produce it once. Your theft gives you the minimum know-how to produce the spell, but you have not mastered it. The Guide may not fully reveal the effects or potential consequences of some stolen spells. Once you cast or Enscroll the stolen spell, you forget the spell and cannot use it again."
            }
        ]
    },

    // ==========================================
    // PATH: PROJECTION
    // ==========================================
    {
        id: "wiz_sense_magic",
        role: "Wizard",
        path: "Projection",
        name: "Sense Magic",
        effects: [
            {
                name: "Option A",
                cost: 0,
                description: "You get a gentle tingling feeling in your bones whenever you are near a powerful source of magic. You’re aware that magic is in the area, but not its location or nature."
            },
            {
                name: "Option B",
                cost: 1,
                description: "You discern the location of nearby magic and its general nature. For instance, the Guide may reveal that you sense a magic sword, a cursed door, or an illusion."
            },
            {
                name: "Option C",
                cost: 2,
                description: "You study the precise nature of nearby magic, learning its specific effects. If you use this ability to study a mysterious magic item, its name and effects are revealed."
            }
        ]
    },
    {
        id: "wiz_auras_silvery_broadcast",
        role: "Wizard",
        path: "Projection",
        name: "Aura’s Silvery Broadcast",
        effects: [
            {
                cost: 2,
                description: "You broadcast a message up to 20 words in length. Each creature within 1 kilometer hears the message clearly in a voice that sounds pleasant to them. The sound seems to originate from every direction and background noises are muted for the duration."
            }
        ]
    },
    {
        id: "wiz_scry",
        role: "Wizard",
        path: "Projection",
        name: "Scry",
        effects: [
            {
                cost: 1,
                description: "Once per game session, you may flash forward in time to glimpse your actions in the near future. For the next hour, you can avert failure by redoing a roll of the die. You must take the result of the new roll. Or you may ask the Guide to reveal a situation you are likely to encounter based on the current trajectory of your choices. You may ask the Guide questions about what you sense from this glimpse of the future, but the answers may be vague."
            }
        ]
    },
    {
        id: "wiz_see",
        role: "Wizard",
        path: "Projection",
        name: "See",
        effects: [
            {
                cost: 4,
                description: "For the next hour, you can see through all magical deceptions. See reveals the world to you in several ways: You see anything that’s invisible. You know if something is an illusion. You may see the true form of anything that has been altered by magic."
            }
        ]
    },
    {
        id: "wiz_find",
        role: "Wizard",
        path: "Projection",
        name: "Find",
        effects: [
            {
                name: "Find",
                cost: 3,
                description: "You close your eyes and attempt to locate any object you have held before, as long as it is in your current universe. You discover its exact location."
            },
            {
                name: "Recall",
                cost: 3,
                description: "Immediately after you have used Find to locate an item, you may recall it for an additional 3 AP. The item instantly vanishes from its present location and appears in your hands."
            }
        ]
    },

    // ==========================================
    // PATH: TRICKERY
    // ==========================================
    {
        id: "wiz_speak",
        role: "Wizard",
        path: "Trickery",
        name: "Speak",
        effects: [
            {
                cost: 1,
                description: "For the next minute, you may speak silently into the mind of a nearby creature. Your lips move normally as if you were speaking aloud, but no sound comes out. Instead, the target of the spell hears your voice inside their head. The creature can tell that your voice is inside their mind."
            }
        ]
    },
    {
        id: "wiz_pinch",
        role: "Wizard",
        path: "Trickery",
        name: "Pinch",
        effects: [
            {
                cost: 2,
                description: "You imbue your fingers with supernatural strength. For the next minute, you can effortlessly pick up and move objects of any weight, as long as you can reasonably handle their size and shape. For instance, you might pinch the shirt of a bully and raise them up in the air or casually move a giant anvil."
            }
        ]
    },
    {
        id: "wiz_stretch",
        role: "Wizard",
        path: "Trickery",
        name: "Stretch",
        effects: [
            {
                name: "Option A",
                cost: 2,
                description: "Choose a nearby creature or object that is no smaller than an ant and no larger than a horse. You cause it to instantly enlarge or shrink. It can grow up to twice its size or shrink up to half of its size. The target’s weight increases or decreases proportionally, but its hit points do not change. You cannot enlarge something beyond the confines of the space it’s in."
            },
            {
                name: "Option B",
                cost: 4,
                description: "You may stretch an object no smaller than an ant and no larger than an elephant."
            }
        ]
    },
    {
        id: "wiz_undo",
        role: "Wizard",
        path: "Trickery",
        name: "Undo",
        description: "You speak a word of power, reversing the fate of a nearby object. The spell cannot be used to affect living things. The thing you are undoing must be the discrete result of another creature’s effort.",
        effects: [
            {
                name: "Option A",
                cost: 1,
                description: "Up to 1 minute of effort."
            },
            {
                name: "Option B",
                cost: 2,
                description: "Up to 1 day of effort."
            },
            {
                name: "Option C",
                cost: 3,
                description: "Up to 1 week of effort."
            },
            {
                name: "Option D",
                cost: 4,
                description: "Any amount of effort."
            }
        ]
    },

    // ==========================================
    // PATH: LEGENDARY
    // ==========================================
    {
        id: "wiz_rift",
        role: "Wizard",
        path: "Legendary",
        name: "Rift",
        effects: [
            {
                cost: 5,
                description: "You summon a magnificent gateway that contains a portal to your current universe’s nexus in The Rift. Each universe’s gateway is unique; it might be a stone archway, an iron gate, a humble wooden door, or something else. The Guide imagines what this gateway looks like. This is an extraordinarily difficult portal to maintain, and it only remains open for 1 minute. Once opened, any creatures or objects that can fit through the portal may pass through it. While you may summon access to the gateway anywhere, the exit point remains in the same location in The Rift."
            }
        ]
    },
    {
        id: "wiz_transcendence",
        role: "Wizard",
        path: "Legendary",
        name: "Transcendence",
        description: "You embark on an incredible quest for knowledge within living things. For the next minute, you enter a trance as your consciousness expands, touching all sentient beings within 1,000 kilometers of you. The ordeal is staggering. You immediately sense time and personal identity at a scale beyond your normal understanding. You absorb the simultaneous experiences of others — possibly from billions of beings. Your knowledge quest must be limited to a subject that you could reasonably come to understand by seeing through the eyes of others. Beware. Entering the minds of others is risky. You may experience unforeseen consequences...",
        effects: [
            {
                cost: 5,
                description: "Activate Trance. You cannot use the spell for things that one mind could not reasonably possess."
            }
        ]
    },
    {
        id: "wiz_planecraft",
        role: "Wizard",
        path: "Legendary",
        name: "Planecraft",
        description: "You conjure a shadow plane. Its contents are completely illusory and cannot leave the plane. You can fill it with anything you can imagine, except sentient beings. The things inside may look and feel real, but they are ultimately mirages. Creatures cannot be harmed by things you put in this plane.",
        effects: [
            {
                name: "Option A",
                cost: 2,
                description: "You conjure a tiny plane no larger than a mansion or castle."
            },
            {
                name: "Option B",
                cost: 4,
                description: "You conjure a plane no larger than the size of a village."
            },
            {
                name: "Option C",
                cost: 6,
                description: "You conjure a plane with no size limit."
            },
            {
                name: "Option D",
                cost: 8,
                description: "You conjure a plane with no size limit and no safeguards. Creatures can now be harmed by the things you put in the plane. (That includes you.)"
            }
        ]
    },
    {
        id: "wiz_create",
        role: "Wizard",
        path: "Legendary",
        name: "Create",
        effects: [
            {
                cost: 5,
                description: "You tap raw magic, converting its energy into a single, non-magical, inanimate object that fits inside a cube no larger than 5 meters in any dimension. You create the object perfectly and it is real in every sense. You may create anything that fits in the space, including precious gems, flawless weapons, or exact replicas of other objects. This spell requires perfection and is extremely taxing on your ability as a Wizard. Keep track of how many times you have cast the spell on your inventory sheet. The spell’s cost increases by 1 AP each time you use it."
            }
        ]
    }
];