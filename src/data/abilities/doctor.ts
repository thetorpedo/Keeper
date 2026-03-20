import type { Ability } from "../interface.ts";

export const doctorAbilities: Ability[] = [
    {
        "id": "doctor_mend",
        "role": "Doctor",
        "path": "Healing",
        "name": "Mend",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You gently touch a creature, immediately restoring 5 HP and mending minor wounds like cuts and bruises. The spell does not remove impairments, heal permanent wounds, or cure disease. You cannot use this spell during combat."
            }
        ]
    },
    {
        "id": "doctor_relieve",
        "role": "Doctor",
        "path": "Healing",
        "name": "Relieve",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You say something comforting to a nearby creature, alleviating them of anxiety, pain, and discomfort for one hour. In this state, the creature cannot be affected by fear or confusion. For a brief time, they feel better than they have ever felt before."
            }
        ]
    },
    {
        "id": "doctor_heal",
        "role": "Doctor",
        "path": "Healing",
        "name": "Heal",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You embrace a creature with a caring touch, restoring all of their hit points. After a short time, the creature is relieved of any shortterm impairments. The spell does not remove permanent conditions. If you are using Heal on another member of the party, they may contribute any amount of their own AP to help pay for the spell."
            }
        ]
    },
    {
        "id": "doctor_restore",
        "role": "Doctor",
        "path": "Healing",
        "name": "Restore",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 7,
                "description": "You touch a living creature, completely restoring them to their normal state over the next few minutes. (You cannot cast this spell while in combat.) The spell restores all hit points and removes any harm or damage. If you are using Restore on another member of the party, they may contribute any amount of their own AP to help pay for the spell."
            }
        ]
    },
    {
        "id": "doctor_sleep",
        "role": "Doctor",
        "path": "Alteration",
        "name": "Sleep",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You whisper a brief lullaby, putting any number of nearby commoners to sleep for up to one hour. You can write your own lullaby or borrow one from another author. Read it at the table. Creatures affected by the spell collapse and enter a dreamful state, but wake up immediately if they are harmed."
            },
            {
                "cost": "X",
                "description": "You can intensify the spell to affect nearby minions. Add 1 AP for each minion you wish to put to sleep."
            }
        ]
    },
    {
        "id": "doctor_calcify",
        "role": "Doctor",
        "path": "Alteration",
        "name": "Calcify",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You touch a creature within range, causing its surface to swell and harden. During this time, they feel numb to external pain. Their hardened shell absorbs up to 2 HP from physical hits. Any damage dealt in excess of 2 HP hits the creature normally. The creature’s skin returns to normal after 1 minute."
            }
        ]
    },
    {
        "id": "doctor_feign_death",
        "role": "Doctor",
        "path": "Alteration",
        "name": "Feign Death",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You place up to six nearby creatures in suspended animation for up to an hour. (You may only cast the spell on yourself or willing allies.) Creatures in this state cannot see, feel, speak, or move, but they remain semiconscious and can hear what is happening around them. \n\nAffected creatures become cold to the touch, and their pulse is undetectable, appearing to be dead to onlookers. Only magic can reveal the ruse.  Affected creatures wake immediately if they are harmed and may choose to wake at any time."
            }
        ]
    },
    {
        "id": "doctor_reshape",
        "role": "Doctor",
        "path": "Alteration",
        "name": "Reshape",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You touch a creature, reshaping their facial appearance. You can make them look older, younger, or like a completely different person. If you are making them look like a specific person, you must be able to see a reference of their face while you are casting the spell. \n\nThe transformation is permanent and can only be reversed with the Restore spell or by casting Reshape again."
            }
        ]
    },
    {
        "id": "doctor_lifelink",
        "role": "Doctor",
        "path": "Alteration",
        "name": "Lifelink",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You entwine the life-force of two nearby creatures. Choose one each time you use this ability: \n\n**Two-way link:** When either of the linked creatures is dealt damage, the damage is also dealt to the other creature. This does not include damage that hits the creatures simultaneously (like an area-of-effect spell). \n\n**One-way link:** Choose one of the linked creatures. Any time damage is dealt to this creature, it is also dealt to the other. \n\n**Leyline:** When either of the linked creatures is healed, the other creature receives the same amount of healing."
            }
        ]
    },
    {
        "id": "doctor_deathsense",
        "role": "Doctor",
        "path": "Necromancy",
        "name": "Deathsense",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You naturally sense whether any remnants of the dead (spirit creatures) are nearby, but not their positions. The Guide will notify you when this sense is triggered."
            },
            {
                "cost": 1,
                "description": "You sense whether any sentient creatures have died nearby and how long ago they died. You can sense the location where any creatures died, as well as the general nature of their death; you sense if they were killed by natural causes, an accident, or foul play."
            },
            {
                "cost": 1,
                "description": "You extend your vision, allowing you to see spirit creatures who are invisible. This effect lasts until you leave the area."
            }
        ]
    },
    {
        "id": "doctor_commune_with_the_dead",
        "role": "Doctor",
        "path": "Necromancy",
        "name": "Commune with the Dead",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "If you are aware of one or more spectral creatures nearby (like ghosts), you may communicate with them. You do not need to be able to see a spirit as long as you have sensed its presence, like with the Deathsense spell. \n\nYou may have a conversation with the spirits for up to a minute, and you communicate with them telepathically. You must share a language to understand each other. Spirits must want to respond; if they choose not to speak to you, your adventure point is refunded."
            }
        ]
    },
    {
        "id": "doctor_reanimate",
        "role": "Doctor",
        "path": "Necromancy",
        "name": "Reanimate",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You animate a nearby corpse or skeleton, making it your thrall. It can move around, but it cannot leave your scene. The spell ends when you leave the scene. You control the creature telepathically. It is not conscious, and it only follows your commands. The creature has 3 HP and can attack for 1 HP."
            }
        ]
    },
    {
        "id": "doctor_reinstate_the_dead",
        "role": "Doctor",
        "path": "Necromancy",
        "name": "Reinstate the Dead",
        "rollTheDie": false,
        "description": "You touch a living creature and make it the host for a nearby spirit. Choose one:",
        "effects": [
            {
                "cost": 5,
                "description": "**Dark passenger.** You merge the creatures. The spirit creature becomes a permanent passenger in the living host’s mind. The passenger can’t control the body, but it can experience its senses and talk to the host telepathically."
            },
            {
                "cost": 7,
                "description": "**Steal host.** The host creature’s consciousness fades away. The spirit inhabits and takes full control of the host’s body. Fragments of the host creature’s memory remain and will occasionally arise in thought. (This can only be used on bosses if they have less than 20 percent of their total HP remaining.)"
            }
        ]
    },
    {
        "id": "doctor_corrupt",
        "role": "Doctor",
        "path": "Harm",
        "name": "Corrupt",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You grip an organic creature within reach and create a necrotizing wound. The wound turns flesh black-green and branches out from where you touched them. The spell hits for 1 HP immediately, and again at the beginning of the target’s next turn. (A total of 2 damage.) Affected creatures can only recover these hit points with the Restore spell."
            }
        ]
    },
    {
        "id": "doctor_nox",
        "role": "Doctor",
        "path": "Harm",
        "name": "Nox",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You touch a creature, giving them a combination of effects for the next hour. You may choose up to three effects from this list: \n\nWakefulness, alertness, increased confidence, euphoria, laughter, vivid sensations, relaxedness, sweating, nausea, chills, or irritability."
            }
        ]
    },
    {
        "id": "doctor_afflict",
        "role": "Doctor",
        "path": "Harm",
        "name": "Afflict",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 3,
                "description": "You touch a creature, cursing them with an affliction that lasts up to 1 month. Choose a symptom each time you use this ability: \n\n**The Sillies.** The creature acts completely out-of-character in a silly and carefree way. This may change their goals. \n\n**Clumsy.** The creature’s extremities feel awkward to use. They are unable to wield weapons effectively and they drop things constantly. \n\n**Blighted.** The creature can’t recover HP. If you roll a failure, the affliction becomes contagious, rapidly spreading to any creature that touches your target. On a catastrophe, you also become afflicted."
            }
        ]
    },
    {
        "id": "doctor_wither",
        "role": "Doctor",
        "path": "Harm",
        "name": "Wither",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You touch a creature and cause their body to wither. Their lifespan does not change, but they experience some of the effects of advanced age. They begin to feel as if death is approaching on the horizon — a condition that may change the creature’s behavior and goals."
            }
        ]
    },
    {
        "id": "doctor_heartkill",
        "role": "Doctor",
        "path": "Harm",
        "name": "Heartkill",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 6,
                "description": "You touch a commoner or minion and curse their heart. (This spell only works on creatures with a heart.) You may choose to instantly cause their heart to explode, killing them. Or you may turn their heart into a time bomb that explodes after a delay of up to 1 year. \n\nIf you use this spell on a boss, it acts like a tripwire. If the boss is reduced to 20 percent or less of its maximum hit points while cursed, its heart explodes and it dies instantly."
            }
        ]
    },
    {
        "id": "doctor_modulate",
        "role": "Doctor",
        "path": "Perception",
        "name": "Modulate",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You alter the nature and intensity of a nearby creature’s physical sensations for up to 1 hour. Choose one effect each time you use this spell: \n\n**Temperature.** The creature feels a relaxing sensation of inner warmth or a cool external breeze. Or you can make them feel too hot or too cold. \n\n**Nourishment.** The creature either sees food and drink as revolting, feels an insatiable hunger and thirst, or feels perfectly fed and hydrated. \n\n**Comfort.** The creature either feels relaxed wherever they sit or lay, or they cannot find comfort however they arrange their body."
            }
        ]
    },
    {
        "id": "doctor_shape_senses",
        "role": "Doctor",
        "path": "Perception",
        "name": "Shape Senses",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You touch a creature and manipulate their perception of color. For instance, you may make a target creature see green as purple. Or you may combine multiple colors, perhaps making the target see yellow and green as blue. You can also cause the target to see oversaturated colors, undersaturated colors, or give them monochromatic vision. You can choose any number of changes and combinations as long as they do not overlap."
            },
            {
                "cost": 2,
                "description": "You touch a commoner or minion, transporting one of their senses to a random part of the omniverse for the next day. You may choose to transport a single sense: feeling, sight, hearing, smell, or taste. The creature will experience its new surroundings as if they were actually there."
            }
        ]
    },
    {
        "id": "doctor_false_sense",
        "role": "Doctor",
        "path": "Perception",
        "name": "False Sense",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You touch a creature, causing it to perceive a specific thing or a category of things falsely. For example, you might have them see the town mayor as a clown or all wolves as puppies. Or you might have them think that freshly baked bread smells like fire. The spell lasts until you cancel it or until the creature is harmed by the effects of the deception."
            }
        ]
    },
    {
        "id": "doctor_forget",
        "role": "Doctor",
        "path": "Perception",
        "name": "Forget",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You touch a creature, erasing its memory by up to 1 month in the past from the present day. This ability only works on sleeping creatures."
            },
            {
                "cost": "X",
                "description": "You may extend the memory loss by spending additional AP on the spell. Each AP you spend increases the effect by up to 1 additional year."
            }
        ]
    },
    {
        "id": "doctor_examine_the_dead",
        "role": "Doctor",
        "path": "Examination",
        "name": "Examine the Dead",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You evaluate a corpse within reach. The corpse must be intact enough for you to look at it. (It cannot be completely obliterated.) After a minute of inspection, you are able to determine the creature’s exact cause of death. You are also able to determine the time and date of its death."
            }
        ]
    },
    {
        "id": "doctor_diagnose",
        "role": "Doctor",
        "path": "Examination",
        "name": "Diagnose",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 0,
                "description": "You touch a creature, extending your senses to diagnose a mysterious affliction, like a disease, spell, or curse. You must correctly guess the entire name of the affliction. If your guess is wrong, the spell fails and you must spend 1 AP to try again. \n\nThe Guide will give you blanks to fill in that show how many words are in the name and how many letters are in each word. You may start by guessing letters that appear in the name. If you guess a letter correctly, the Guide will reveal everywhere that letter appears in the name. If you guess incorrectly 6 times, the spell fails. \n\nOnce you have diagnosed an affliction, you can automatically identify it in the future by touching a creature."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "The guide fills in half of the letters in the name." },
            { "value": "11-19", "description": "The guide fills in one vowel and two consonants." },
            { "value": "1-10", "description": "The guide fills in one consonant." }
        ]
    },
    {
        "id": "doctor_curious_case",
        "role": "Doctor",
        "path": "Examination",
        "name": "Curious Case",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "If your scene contains something overtly suspicious, like a dead body or blood on the walls, you may investigate by considering things that seem familiar to you. You must pontificate about your past experience at the table to explain what is familiar to you. \n\nChoose three details you already know about your scene. If you need more detail, ask the Guide what you sense. \n\nYou can then begin your short speech by saying something like, “This reminds me of the curious case of __________.” Explain where you have seen the details in your scene before. \n\nWhen you are finished, the Guide will reveal a useful clue about your scene to you. The Guide will choose one of these clues: \n\n• The motive of the perpetrator who was involved in the scene. \n• The nearby location of a hidden message, symbol, or other detail that reveals the name or affiliation of someone who was involved in the scene. \n• Where someone who was involved in the scene might be headed next."
            }
        ]
    },
    {
        "id": "doctor_genesis_command",
        "role": "Doctor",
        "path": "Legendary",
        "name": "Genesis Command",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 6,
                "description": "You touch a creature, reversing or accelerating its development to a stage of life of your choosing. (This can only be used on bosses if they have less than 20 percent of their total HP remaining.) For example, you may revert an adult creature into a child, giving it the opportunity to grow old again. \n\nThe creature retains all of its memories, unless you revert it to infancy. The creature obtains the basic physical capabilities appropriate for its state of development."
            }
        ]
    },
    {
        "id": "doctor_banish",
        "role": "Doctor",
        "path": "Legendary",
        "name": "Banish",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You banish a nearby spirit creature to a random shadow plane for the next hour. You do not know its destination. When its imprisonment is up, it reappears at its previous location."
            },
            {
                "cost": 5,
                "description": "You permanently banish a nearby spirit creature to a random shadow plane. (This can only be used on bosses if they have less than 20 percent of their total HP remaining.)"
            }
        ]
    },
    {
        "id": "doctor_eternal_slumber",
        "role": "Doctor",
        "path": "Legendary",
        "name": "Eternal Slumber",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You touch a creature within reach, placing them in a permanent and peaceful sleep. \n\nYou may choose to tie the spell to a trigger that can cause it to end; for example, cursing them to sleep until they are embraced by a family member, or tying it to an object that must be destroyed to end the spell. \n\nYou can end the spell at any time you choose. You can only maintain this spell on one creature at a time; if you cast it again, the previous spell ends, freeing the creature from stasis. \n\n(This can only be used on bosses if they have less than 20 percent of their total HP remaining.)"
            }
        ]
    },
    {
        "id": "doctor_the_bitter_gift",
        "role": "Doctor",
        "path": "Legendary",
        "name": "The Bitter Gift",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 9,
                "description": "You touch a creature without self-awareness and bestow them with the bitter gift of selfhood. You must recite a statement at the table about what it means to be alive. It can be a passage from a book, a poem, or something else that expresses ideas about the meaning of life. \n\nThe target of the spell falls unconscious for the next minute as their body rapidly experiences 1 million years of evolution toward self-awareness. The evolutionary process alters the animal’s physical features and capabilities in ways you may not expect. \n\nThe new creature is thrown into the world with competency in one language, a sense of self-identity, and a vague awareness of its past life, including a few specific memories of significant moments. Another way of putting it: they are now a person like you. \n\nThe creature knows you gave it life."
            }
        ]
    }
]