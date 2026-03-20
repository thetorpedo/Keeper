import type { Ability } from "../interface.ts";

export const magicianAbilities: Ability[] = [
    {
        "id": "magician_magic_tricks",
        "role": "Magician",
        "path": "Misdirection",
        "name": "Magic Tricks",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You produce a tiny magical effect to surprise, delight, or confuse those around you. Choose any combination of these effects each time you use this ability: \n\n**Light.** You create a harmless display of light, like a flickering flame or a pattern of sparks. You can also snuff out or ignite small light sources like torches. \n\n**Sound.** You create a small, brief sound effect, like a wind chime, an audience clapping, or someone whispering. \n\n**Smell.** You conjure a smell of any kind, like a freshly baked pie or a cesspool. \n\n**Touch.** You give one or more nearby creatures a gentle physical sensation, like someone tapping them on the shoulder, a chill breeze, or the feeling of goosebumps."
            }
        ]
    },
    {
        "id": "magician_mesmerize",
        "role": "Magician",
        "path": "Misdirection",
        "name": "Mesmerize",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You dazzle a nearby commoner or minion with an optical illusion. (The creature must be able to see.) Until you leave the area, the creature cannot move, take actions, or respond to conversation. The spell ends if the creature is harmed."
            }
        ]
    },
    {
        "id": "magician_overthere",
        "role": "Magician",
        "path": "Misdirection",
        "name": "Overthere",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You make a suggestive gesture, redirecting a nearby creature that is currently hostile toward you. The target redirects its anger toward a different adversary. (The spell does not work if the target has no other enemies nearby.) This effect is canceled if you harm the creature."
            }
        ]
    },
    {
        "id": "magician_mirage",
        "role": "Magician",
        "path": "Misdirection",
        "name": "Mirage",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You conjure a major illusion no larger than 100 meters in any dimension. The illusion can be of anything that fits within the space, and you can program it with looping mechanics. For instance, you can create the illusion of an oasis, a pile of treasure, or a lumbering giant guarding their territory. \n\nIf a creature touches or passes through the illusion, they will no longer see it. Creatures with the ability to detect magic may discover the deception."
            }
        ]
    },
    {
        "id": "magician_invisibility",
        "role": "Magician",
        "path": "Misdirection",
        "name": "Invisibility",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You make a nearby creature or object invisible for the next minute. If it is a creature, everything they are wearing and carrying also becomes invisible. If a creature attacks while invisible, they reappear."
            },
            {
                "cost": "X",
                "description": "Add 1 AP for each creature or object you target with the spell beyond the first."
            }
        ]
    },
    {
        "id": "magician_splitting_image",
        "role": "Magician",
        "path": "Mannequins",
        "name": "Splitting Image",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You vanish momentarily, reappearing with two illusory duplicates at your side. Your duplicates travel alongside you and perfectly mimic all of your movements. \n\nIf a creature attempts to target you, the Guide must flip a coin. If it turns up “heads,” you are targeted; on “tails” one of your duplicates is targeted. If one of your duplicates takes damage, it disappears."
            }
        ]
    },
    {
        "id": "magician_phantom_menace",
        "role": "Magician",
        "path": "Mannequins",
        "name": "Phantom Menace",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You read the mind of a nearby NPC and produce an illusion of a creature they find extremely irritating. Only you and the target of the spell can see and hear the illusion. \n\nFor the next 10 minutes, the illusion relentlessly mocks and taunts your target, provoking their full attention. \n\nYou may control the illusion directly and have it manipulate small objects. For example, you can have it steal an item from the target and lead them on a chase. Or you may let the illusion go wild, allowing the Guide to narrate its behavior."
            }
        ]
    },
    {
        "id": "magician_illusory_creature",
        "role": "Magician",
        "path": "Mannequins",
        "name": "Illusory Creature",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "Imagine a creature. You create a convincing illusion of it that appears nearby. It looks, moves, and sounds like the creature you imagined. It even feels real to the touch. The illusion has 6 HP and vanishes at 0 HP. \n\nThe illusion can behave independently and travel away from you. You can program the illusion’s routines. For example, you may have it clean a house, patrol an area, pretend to be busy, or give it a combination of tasks and behaviors. You can also set rules for it, like “Don’t harm anyone for any reason” or “Don’t let anyone pass through this door.” \n\nYou share a telepathic bond with the illusion when it is nearby, and you can control it directly during your turn. You can make it move, act, and speak your lines. It can hold and use weapons to make basic attacks. \n\nAfter 1 day, the illusion will automatically travel out of sight of other creatures and then vanish.\n\n"
            },
            {
                "cost": 4,
                "description": "This spell costs 4 AP instead if you use it to create an illusion of a creature that already exists. You create a perfect double of the creature that looks and sounds like them. It can fool everyone but the creature’s closest friends and family."
            }
        ]
    },
    {
        "id": "magician_magic_eye",
        "role": "Magician",
        "path": "Clairvoyance",
        "name": "Magic Eye",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You briefly gain the ability to see beyond physical reality. For the next hour, you are able to see the following: \n\n**Magic.** A faint aura surrounds any person or object currently affected by magic. \n\n**Illusion.** Any illusory creature or object slightly flickers, but you do not see its true form."
            }
        ]
    },
    {
        "id": "magician_whisper",
        "role": "Magician",
        "path": "Clairvoyance",
        "name": "Whisper",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You telepathically send a message to a nearby creature. They know you are speaking from within their mind, but they hear you as if you were speaking out loud."
            },
            {
                "cost": 1,
                "description": "You create a link with the creature that allows them to respond to your whisper. If they respond, you may have a telepathic conversation with them for the next minute."
            }
        ]
    },
    {
        "id": "magician_message",
        "role": "Magician",
        "path": "Clairvoyance",
        "name": "Message",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "Choose a creature you have met before. You must know the general area where they are presently located. You may communicate with each other telepathically for up to 1 minute."
            },
            {
                "cost": 4,
                "description": "You can create the telepathic link, even if you do not know where the creature is located. They can be anywhere."
            }
        ]
    },
    {
        "id": "magician_interpret",
        "role": "Magician",
        "path": "Clairvoyance",
        "name": "Interpret",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You enter the mind of a nearby creature and temporarily learn their language for the next 10 minutes. \n\nWhen you cast this spell, you may also attempt to permanently learn the creature’s language by playing a game of charades. (This happens at the table out of character.) The Guide will write down a word or phrase on a piece of paper and then secretly give it to you. \n\nStart a timer. You have 1 minute to silently act out the word or phrase. If another player correctly guesses the word or phrase, the spell is successful."
            }
        ]
    },
    {
        "id": "magician_insight",
        "role": "Magician",
        "path": "Clairvoyance",
        "name": "Insight",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You gaze into the mind of a nearby creature, discovering a prominent intention. Choose one effect each time you cast this spell: \n\n• You learn something the creature intends to do in the next 10 minutes. \n• You learn something the creature intends to accomplish over a long period of time. \n• You learn something they intend to do to a specific creature of your choice."
            }
        ]
    },
    {
        "id": "magician_little_bird",
        "role": "Magician",
        "path": "Conjuration",
        "name": "Little Bird",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You summon an illusory bird somewhere nearby that keeps watch over an area that it can see. It remains there until you dismiss it. You may only have one Little Bird at a time. \n\nYou share a telepathic link with the bird. It will message you when it witnesses something you specify, like a specific creature entering a room or a door opening. The bird will wake you up to tell you what it sees if you are sleeping."
            }
        ]
    },
    {
        "id": "magician_helens_fantastic_feast",
        "role": "Magician",
        "path": "Conjuration",
        "name": "Helen’s Fantastic Feast",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "Imagine an elaborate feast of any culinary style. You summon food and drink, your choice of furniture (if necessary), and your choice of dinnerware and table decorations. You may summon enough to feed a party of up to 20 people. Consuming the meal restores 4 hit points."
            }
        ]
    },
    {
        "id": "magician_monitor",
        "role": "Magician",
        "path": "Conjuration",
        "name": "Monitor",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You summon a small illusory servant that hovers over your shoulder and follows you around for the remainder of your play session. The Monitor looks like a blooming flower with an eye in the center, and it’s invisible except to creatures you designate. You can deploy the Monitor to places just beyond your sight. For instance, you can send it searching around a corner into another room. \n\nThe Monitor can tell you how many creatures are in a space, but not what kinds. It also gives you a rudimentary mental map of spaces it travels through. For instance, if you send it into an adjacent room, you will know the rough size and shape of the room and any major features, like pillars or open pits."
            }
        ]
    },
    {
        "id": "magician_shadow_haven",
        "role": "Magician",
        "path": "Conjuration",
        "name": "Shadow Haven",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 5,
                "description": "Place your hand on a dwelling in the worldly plane. You instantly duplicate its interior inside of a shadow plane. The duplication looks and feels real to the touch, but it is an illusion; you cannot take its illusory parts out of the shadow plane. \n\nThe dwelling can be as small as a shed or as large as a mansion or castle. The physical entrance to the dwelling in the worldly plane doubles as a secret portal to the shadow haven. You can grant or revoke access to anyone at any time. A creature that is aware of the haven and has permission to enter may choose to open the door to the portal by wishing it. Otherwise, the door functions normally as the entrance to the dwelling in the worldly plane. \n\nThe shadow haven lasts permanently until it is dispelled, you dismiss it, or the spell is cast again. Any creatures inside when the spell ends are instantly expelled through the portal into the worldly plane."
            }
        ]
    },
    {
        "id": "magician_bamboozle",
        "role": "Magician",
        "path": "Mind Control",
        "name": "Bamboozle",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You make a nearby creature mildly confused about a specific subject until you leave the area. For example, you could make a merchant confused about the value of their goods, a guard confused about who is authorized to pass, or a dog confused about whether he is a good boy.The confusion is lifted if you push the deception too far, like trying to trade a rock for a priceless item."
            }
        ]
    },
    {
        "id": "magician_wrens_delightful_dream",
        "role": "Magician",
        "path": "Mind Control",
        "name": "Wren’s Delightful Dream",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You whisper and wave your hand at a nearby creature. The next time the creature falls asleep, they experience a deeply comforting dream. They wake up feeling beloved and forget all of their grudges for the next week."
            }
        ]
    },
    {
        "id": "magician_perky_profanation",
        "role": "Magician",
        "path": "Mind Control",
        "name": "Perky Profanation",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You curse a nearby creature for the next 10 minutes. The curse is lifted if the creature is harmed. Choose one: \n\n**Laughter.** They double over in sustained laughter and can’t move. Everything they hear sounds hilarious to them. \n\n**Dance.** They hear their favorite tune and start dancing like their life depends on it. \n\n**Mimicry.** They begin to mimic a creature of your choice. For example, you can make them behave like housecats.\n\n"
            },
            {
                "cost": 4,
                "description": "You curse any number of commoners nearby."
            }
        ]
    },
    {
        "id": "magician_fear",
        "role": "Magician",
        "path": "Mind Control",
        "name": "Fear",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 4,
                "description": "You breach the mind of a nearby creature to seek their worst fear."
            }
        ],
        "rollTable": [
            {
                "value": 20,
                "description": "You learn the creature’s worst fear. They become permanently haunted by it in every waking moment. Over time, their personality is destroyed, and they become unresponsive to others."
            },
            {
                "value": "11-19",
                "description": "You learn the creature’s worst fear. You may then conjure the image of this fear in their mind’s eye, paralyzing them with dread for the next 10 minutes. They cannot act, except to flee danger."
            },
            {
                "value": "6-10",
                "description": "You learn the creature’s worst fear, but they reject you from their mind before you can conjure the fear."
            },
            {
                "value": "2-5",
                "description": "You learn the creature’s worst fear, but it paralyzes you with dread for the next 10 minutes. During this time, you are unable to use abilities."
            },
            {
                "value": 1,
                "description": "When confronting the creature’s fear, you become permanently haunted by it. You must choose an additional character flaw. You can only lift the fear by having the Liberate spell cast on you."
            }
        ]
    },
    {
        "id": "magician_scintillate",
        "role": "Magician",
        "path": "Mayhem",
        "name": "Scintillate",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 0,
                "description": "You extend your fingers outward, and a streaking bolt of sparks shoots toward a target you can see. Roll the die to see if it hits the target successfully. \n\nYou may make the bolt explode on contact with crackling energy, hitting the target for 2 HP. Or you can make the bolt a harmless firework that explodes in the air, creating a pattern of any shape and color."
            }
        ]
    },
    {
        "id": "magician_bedazzle",
        "role": "Magician",
        "path": "Mayhem",
        "name": "Bedazzle",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You summon four prismatic bolts that sparkle brilliantly. You may direct each bolt toward any target you can see. \n\nThe bolts each hit for 2 HP. If all four hit a single creature, the creature is affected by your Mesmerize ability."
            }
        ]
    },
    {
        "id": "magician_loosen",
        "role": "Magician",
        "path": "Mayhem",
        "name": "Loosen",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You twirl your finger as if you are unwinding a spool of yarn. Starting with a single creature nearby that you can see, you create a cascading wave of magic mischief that loosens anything fastened or tightened around nearby creatures. For example: \n\n• Bags become unclasped and spill out their contents. \n• Shoelaces become untied, belts unbuckled, and shirts unbuttoned. \n• Pets become unleashed."
            }
        ]
    },
    {
        "id": "magician_chaos_ball",
        "role": "Magician",
        "path": "Mayhem",
        "name": "Chaos Ball",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You summon a cherry-sized elastic ball in your hand. When you throw the ball, it bounces off everything it touches, avoiding creatures. Each time the ball bounces, it accelerates slightly, traveling faster and faster until it escapes into the atmosphere after 1 minute. \n\nThe ball’s brief reign of terror shatters pottery, glass, light furniture, and most other fragile things in your scene. What a shame."
            }
        ]
    },
    {
        "id": "magician_control",
        "role": "Magician",
        "path": "Legendary",
        "name": "Control",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 8,
                "description": "You dominate the mind of a nearby creature for the next hour. The creature will do anything you verbally command them to do without exception or hesitation. When the spell ends, they remember everything that happened. \n\nThis spell is cursed. If you use Control to harm another creature, you permanently forfeit your character and they become an NPC boss. \n\nThe Guide will now play your character as a villain in the story. The Guide will inform you if your use of the spell will cause your character to become an NPC before you cast it; you must agree to forfeit your character, otherwise you may not cast Control to harm another creature."
            }
        ]
    },
    {
        "id": "magician_peerless_pilot",
        "role": "Magician",
        "path": "Legendary",
        "name": "Peerless Pilot",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 5,
                "description": "You conjure a fantastic hot air balloon from another dimension that can fit you and your party. You must be outdoors and standing in a clearing with room for the balloon to form. \n\nThe balloon is 30 meters tall and can look like anything you want. It’s piloted by a small, illusory creature that can talk to you and your crew and take instructions. (The standard creature is a red panda wearing goggles, but you may choose any similarly sized creature you want.) The pilot remembers you and where you’ve been if you cast the spell again. \n\nThe balloon is powered by a flaming sphere above the carriage that adjusts its intensity based on your commands. The balloon can soar as high as the tallest mountain peaks and move at up to 30 kilometers an hour. The carriage has 40 hit points, and the balloon has 10 hit points. \n\nYou may dismiss the balloon at any time; it vanishes with its pilot and returns home."
            }
        ]
    },
    {
        "id": "magician_perfect_gift",
        "role": "Magician",
        "path": "Legendary",
        "name": "Perfect Gift",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You glimpse the mind of a nearby creature, discovering what stirs their heart. Then, you conjure an emotionally priceless gift for them. \n\nYou choose how the gift makes the creature feel once it is received. Choose one: \n\n• They come to terms with the loss of a loved one, finding peace. \n• They decide to repair a broken relationship in their life. \n• They become exuberantly happy for the next month. \n• They become obsessed with the gift, refusing to part with it for any reason. \n• They love you as an intimate friend and seek a closer relationship. \n\nThe Guide chooses the form of the gift to match the effect with the creature."
            }
        ]
    },
    {
        "id": "magician_invasion",
        "role": "Magician",
        "path": "Legendary",
        "name": "Invasion",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 5,
                "description": "You touch a sleeping NPC (the host) and enter its dream. You may take any willing party members who are nearby with you. Those invading the dream enter a trance. They cannot sense anything outside of the dream, even if they are harmed. \n\nYou choose how you and your companions appear in the dream. You may impersonate others while in the dream world. Once you enter, you create a new dream in the host’s mind. The dream has two scenes. \n\nThe Suggestion. In the first scene, you meet the host and speak with them. You choose the setting. \n\nHere, you may try to convince the host to do something. For example, you might ask them to abandon a serious pursuit, to cut their family ties, or to give away their wealth. \n\nThe Trial. In the second dream sequence, the host’s greatest fear manifests as a monster that seeks to kill them. The Guide will choose a monster that is proportionate to the severity of your suggestion. If you are trying to dramatically alter the host’s life, the Guide may choose a monster of terrifying power. \n\nThe rules for this fight are the same as outside of the dream, but you cannot die here. All players entering the dream have full health and 10 AP to use. You exit the dream immediately if you reach 0 HP. \n\nIf you defeat the monster, the target will later wake up believing the dream was a revelation. They will set out to do what you suggested. \n\nIf the monster kills the host in the dream, the spell ends. Everyone, including the host, wakes up. \n\nYou may use your abilities within the dream the same way you use them in the outside world, but the effects are fictional and cannot leave the dream world. Any AP that you spend inside of the dream is recovered when you exit."
            }
        ]
    }
]