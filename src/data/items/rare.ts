import type { Ability } from '@/data/interface.ts';

export const rareItems: Ability[] = [
    {
        "id": "item_abdellahis_scepter",
        "role": "Rare",
        "path": "Item",
        "name": "Abdellahi’s scepter",
        "damage": 2,
        "slots": 1,

        "description": "This magic scepter feels cold to the touch. When picked up, it curses its owner with a chill aura until the scepter is destroyed. The owner can cast the Freeze spell at will."

    },
    {
        "id": "item_abyssal_brand",
        "role": "Rare",
        "path": "Item",
        "name": "Abyssal brand",
        "damage": 2,
        "slots": 1,


        "description": "The Abyssal Brand is an edged weapon forged by a conniving demon. On a triumph, the target hears dark whispers from the demon, causing it to take 4 additional damage. Once picked up, the weapon curses its owner. At any time, the demon who forged the weapon can whisper thoughts into the cursed owner’s mind."

    },
    {
        "id": "item_accursed_band",
        "role": "Rare",
        "path": "Item",
        "name": "Accursed band",
        "slots": 1,

        "description": "This is a translucent magic bracelet that can detect spirits. When a spirit creature is nearby, a glowing blue rune appears on the bracelet. A similar rune appears for each spirit creature nearby. The band lets the wearer use the Commune With the Dead spell at will for no AP cost."

    },
    {
        "id": "item_big_belt_of_strong_strength",
        "role": "Rare",
        "path": "Item",
        "name": "Big belt of strong strength",
        "slots": 1,
        "description": "This is an unusually large belt. When you wear it, you feel unusually strong.",
        "effects": [
            {
                "cost": 1,
                "description": " You channel the belt’s magic power, granting you the ability to lift things as heavy as elephants for the next 10 seconds."
            }
        ]
    },
    {
        "id": "item_bonebreaker",
        "role": "Rare",
        "path": "Item",
        "name": "Bonebreaker",
        "damage": 2,
        "slots": 1,

        "description": "This giant hammer has been imbued with magic force that accelerates the weapon as it is swung toward a creature, sending reverberating shockwaves through its body. On a triumph, the weapon completely shatters the creature’s bones, if it has any."

    },
    {
        "id": "item_chaos_pearls",
        "role": "Rare",
        "path": "Item",
        "name": "Chaos pearls",
        "slots": 1,
        "rollTheDie": true,

        "description": "A bag of luminescent magic pearls. (When you first find the bag, roll the die. The result is the number of pearls inside.) When you throw one of the pearls nearby, it explodes with invisible magic force, releasing a shockwave that knocks down all creatures nearby, damages weak objects, and sends small things flying about the scene."

    },
    {
        "id": "item_dawnbringer",
        "role": "Rare",
        "path": "Item",
        "name": "Dawnbringer",
        "damage": 2,
        "slots": 1,
        "description": "This greathammer is imbued with radiant light by an archmage who worshipped their world’s north star.",
        "effects": [
            {
                "cost": 2,
                "description": "You raise the hammer in the sky and utter the phrase: “Day unto dark, dark unto day: I call for the light from on high.” When activated, the hammer emits the blinding light of a star. Any creature that can see the light of the hammer and has their eyes open is blinded for the next minute."
            }
        ]
    },
    {
        "id": "item_death_adder",
        "role": "Rare",
        "path": "Item",
        "name": "Death adder",
        "slots": 1,
        "description": "This is a small, golden, magic tally counter that can count as high as 7 digits. Whenever a person dies nearby, the counter automatically increases by 1.",
        "effects": [
            {
                "cost": 1,
                "description": " The Death Adder reveals the cause of death for its most recent tally."
            }
        ]
    },
    {
        "id": "item_defiance",
        "role": "Rare",
        "path": "Item",
        "name": "Defiance",
        "damage": 2,
        "slots": 1,

        "description": "This silvered short blade grants the wielder immunity against magic that affects the mind. But this protection has a cost. Defiance curses its owner with overconfidence, rendering them unable to rationally evaluate danger. While cursed, you are unable to perceive whether situations pose real danger to you."

    },
    {
        "id": "item_draconis",
        "role": "Rare",
        "path": "Item",
        "name": "Draconis",
        "damage": 2,
        "slots": 1,

        "description": "Draconis is a longsword said to have been forged in the flame of a dragon’s breath. When the sword is unsheathed, it begins to glow red-hot, as if it just emerged from a forge. On a triumph, the sword’s blade roars and explodes in flame, dealing 4 additional damage."

    },
    {
        "id": "item_dress_of_many_pockets",
        "role": "Rare",
        "path": "Item",
        "name": "Dress of many pockets",
        "slots": 1,

        "description": "This magic dress deceptively appears to have no pockets. In fact, it has many.\n\nWhen wearing the dress, you may press an item against it that you wish to stash. A seam silently opens, creating a portal to a pocket-sized shadow plane. When the item you wish to pocket is deposited, the seam closes. The seam reopens any time you wish to retrieve the item. You may store up to 10 items in the dress, and these items do not count against your inventory limit. \n\nIf the dress is ripped apart or destroyed, any items stored inside immediately fall out."

    },
    {
        "id": "item_gideons_shroud",
        "role": "Rare",
        "path": "Item",
        "name": "Gideon’s shroud",
        "slots": 1,

        "description": "A knee-length flowing black cloak that appears to glisten under moonlight. The shroud makes the wearer undetectable by clairvoyance magic. Any being attempting to spy on the wearer of the shroud feels confused and gains misleading information."

    },
    {
        "id": "item_lichblade",
        "role": "Rare",
        "path": "Item",
        "name": "Lichblade",
        "damage": 2,
        "slots": 1,

        "description": "The weapon of a banished lich, this withering sword feels chill to the touch and casts a malevolent aura felt by all creatures nearby. The sword’s user recovers 1 HP each time it deals damage to a creature, as the sword devours the life force of its victim. The sword’s original owner can sense its presence from afar and wants it back."

    },
    {
        "id": "item_masterwork",
        "role": "Rare",
        "path": "Item",
        "name": "Masterwork",
        "damage": 3,
        "slots": 1,

        "description": "This is a weapon of incredible quality that still bears its maker’s mark. There are only a handful of copies like it."

    },
    {
        "id": "item_needful_gift_box",
        "role": "Rare",
        "path": "Item",
        "name": "Needful gift box",
        "slots": 1,

        "description": "This is a small wooden box with nothing inside. When the owner of the box is negotiating a trade, the box can sense an object of value that the other party desires. A convincing illusion of the object then appears inside the box that feels real to the touch. The illusion permanently disappears if it spends 1 minute outside of the box."

    },
    {
        "id": "item_perspicacious_pot",
        "role": "Rare",
        "path": "Item",
        "name": "Perspicacious pot",
        "slots": 1,

        "description": "This is a large magic pot made of fine silver. When the lid is closed, a portal to an unknown shadow plane opens inside, and the pot’s contents are temporarily devoured. One minute later, the contents are spit back into the pot, returning slimier than when they entered. When the contents return after being devoured, a recipe for how to create the item, including its ingredients or parts, appears etched on the side of the pot."

    },
    {
        "id": "item_portal_chalk",
        "role": "Rare",
        "path": "Item",
        "name": "Portal chalk",
        "slots": 1,

        "description": "This is a brilliant stick of chalk that flickers as if a candle is inside of it. You can use the chalk to draw a closed shape. As soon as you close the drawing, the area within the shape becomes a portal that teleports anything that passes through it. \n\nYou must draw a second portal for the first one to become active. When you have two portals, they become a gateway to one another. The chalk crumbles to dust as soon as the two portals become active."

    },
    {
        "id": "item_professor_prims_mind_exploder",
        "role": "Rare",
        "path": "Item",
        "name": "Professor Prim’s mind exploder",
        "slots": 1,

        "description": "This is a bitter magic tablet that dissolves in a glass of water. When you consume the drink, you forget an ability you already know, and learn a new one of your choice."

    },
    {
        "id": "item_scintillating_wand",
        "role": "Rare",
        "path": "Item",
        "name": "Scintillating wand",
        "slots": 1,

        "description": "This colorful wooden wand makes you feel giddy with mischievous thoughts when you hold it in your hand. You can use the wand to cast the Scintillate spell at will."

    },
    {
        "id": "item_scrying_sphere",
        "role": "Rare",
        "path": "Item",
        "name": "Scrying sphere",
        "slots": 1,
        "description": "This is a magic crystal ball that’s the size of an apple. Scrying spheres are traditionally stored in velvet pouches and concealed by silken cloths. The sphere makes a noticeable and ongoing ringing sound that echoes nearby when it is uncovered.",
        "effects": [
            {
                "cost": 1,
                "description": "When you hold the sphere and gaze into it, you can use the Scry spell. You may only activate the sphere once per game session."
            }
        ]
    },
    {
        "id": "item_scion",
        "role": "Rare",
        "path": "Item",
        "name": "Scion",
        "slots": 1,

        "description": "Scion is a magic pincushion. When a pin coated with a creature’s blood is pressed into the pincushion, Scion audibly whispers the family names of the creature’s closest blood relatives."

    },
    {
        "id": "item_serpentine_staff",
        "role": "Rare",
        "path": "Item",
        "name": "Serpentine staff",
        "damage": 2,
        "slots": 1,
        "description": "The Serpentine Staff is a magic snakewood staff made by ancient druids. A golden ouroboros symbol is etched into the base.",
        "effects": [
            {
                "cost": 1,
                "description": "You whisper a magic word to the staff, causing it to transform into a viper. The viper is a magical illusion that you control. You share a telepathic bond with the viper and can command it to move, act, and attack. It has 4 hit points and its attacks deal 1 damage. You may have the viper transform back into its staff form at any time. If the viper is killed, it automatically transforms back into the staff."
            }
        ]
    },
    {
        "id": "item_spell_scroll",
        "role": "Rare",
        "path": "Item",
        "name": "Spell scroll",
        "slots": 1,

        "description": "These are scrolls bearing the signature or mark of a spellcaster that are enchanted with their knowledge of a single spell. Any person holding a spell scroll can read the words on it to activate the spell. Not all spell scrolls are clearly marked with their effects. The Sense Magic ability can be used to identify the spell contained in a scroll."

    },
    {
        "id": "item_spirit_trap",
        "role": "Rare",
        "path": "Item",
        "name": "Spirit trap",
        "slots": 1,

        "description": "This is a magic crystal orb that attracts spirit creatures nearby. Any spirit creature that comes within reach of the trap is automatically captured by it and imprisoned inside. (It cannot attract or capture bosses.) Each trap can only hold one spirit creature at a time. When a spirit is trapped inside, a hazy portrait of its corporeal form can be seen by gazing into the orb. Spirits can only be released from the orb by shattering it."

    },
    {
        "id": "item_the_bouncer",
        "role": "Rare",
        "path": "Item",
        "name": "The bouncer",
        "slots": 1,

        "description": "This is a magic buckler with a strap that feels like it always fits perfectly. If a foe within reach attacks you with a weapon and rolls a failure, you may have their attack bounce off of your buckler. They hit themselves with their attack instead, damaging them for 2 HP."

    },
    {
        "id": "item_the_compensator",
        "role": "Rare",
        "path": "Item",
        "name": "The compensator",
        "damage": 2,
        "slots": 1,

        "description": "In its normal state, this is a humble-looking broadsword with heavy signs of wear. Whenever the sword makes contact with another weapon, the blade instantly morphs to become twice as large as the weapon it touched."

    },
    {
        "id": "item_the_eager_edge",
        "role": "Rare",
        "path": "Item",
        "name": "The eager edge",
        "damage": 3,
        "slots": 1,

        "description": "This is a sentient magic sword that loves to be used. Every time a fight begins, nearby creatures can hear the sword excitedly say, “Here we go again!” Your first attack with the sword in a fight is automatically successful. But if you back down from a fight or avoid one altogether, the sword will loosen itself from your body, fall to the ground, and attempt to slide toward someone else nearby."

    },
    {
        "id": "item_the_miracle_sponge",
        "role": "Rare",
        "path": "Item",
        "name": "The miracle sponge",
        "slots": 1,

        "description": "This is an otherwise normal sponge, except for the fact that it is also a magic portal to a shadow plane. The shadow plane connected to the sponge acts as a reservoir, allowing the sponge to rapidly absorb enough liquid to fill a swimming pool or small pond. Squeezing the sponge releases the stored liquid at the rate a normal sponge would."

    }
]