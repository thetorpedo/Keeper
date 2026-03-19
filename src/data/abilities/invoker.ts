import type { Ability } from "../interface.ts";

export const invokerAbilities: Ability[] = [
    {
        "id": "invoker_declare",
        "role": "Invoker",
        "path": "Invocation",
        "name": "Declare",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "Once per scene, you may declare a reason for intervening in a matter, steeling your resolve. The reason should be based on your ideal and the scene’s context. For example, if you believe in order, you might tell highway robbers they’re breaking the law. Or if you believe in honor, you might say there’s no honor among thieves. Choose one result: • You immediately make a successful basic attack on a nearby foe. • You compel an NPC to explain what they are doing (they may lie to you). • You convince commoners to leave."
            }
        ]
    },
    {
        "id": "invoker_petition",
        "role": "Invoker",
        "path": "Invocation",
        "name": "Petition",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "When you regroup, you may close your eyes and calm your body. You recite a short petition and receive a boon. You must recite a petition at the table that contains all of these parts: • An address line, like “in the name of the gods” or “for the love of wisdom.” • A request, like “I ask for strength.” • An adulation, like “for I am your humble servant” or “for you are the truth.” When you are finished reciting the petition, all of your hit points are restored."
            }
        ]
    },
    {
        "id": "invoker_invoke",
        "role": "Invoker",
        "path": "Invocation",
        "name": "Invoke",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You leave your worldly body behind and create an astral projection of yourself. You must be in a quiet place with no other creatures around to begin the ritual. While in this trance, you can only vaguely sense if there is danger around your mortal body. You may exit the trance at any time. Your mind enters a liminal plane of existence. You experience this place like a dreamworld in the stars; it might be a lush paradise in a nebula, an idyllic homestead, or a temple in the fires of creation. If you have an allegiance to a deity, you meet with their avatar. If you hold no allegiance to a deity or if your deity is merely a figment of your character’s imagination, you meet with an avatar of supernatural wisdom. Set a timer. You may speak to the avatar for 1 minute about anything you like. If you ask any of these questions, the Guide will give you a truthful answer: • Am I on the right path to (fill in the blank)? • Is (fill in the blank) who they say they are? • Am I living up to my ideal? • Have my actions unknowingly caused anyone harm? • How can I redeem myself?"
            }
        ]
    },
    {
        "id": "invoker_vow",
        "role": "Invoker",
        "path": "Invocation",
        "name": "Vow",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You create a vow that permanently binds you in service of an ideal. You may only do this once. There is no turning back. You can express this bond as devotion to a deity, a people, a cause, or something else that represents or is served by your ideal. (You may use an ideal you chose when creating a character, or choose a new one.) You must be in a safe and quiet place to make the vow, and it must include: • Something you promise to actively do in service of your ideal, like helping the sick. • A person, place, or group you promise to protect when nearby. • A wrong from your past that you pledge to make amends for someday. Once the vow is created, you receive these ongoing benefits: • You can now use your Invoke ability once per game session for no AP cost. • The healing effect of your Petition ability now affects nearby party members in addition to you. • Your eyes now have a faint glow. You have a sacred obligation to fulfill the promises you have made. Each time you betray the promises of your vow in a serious way, you feel a sharp pain in your heart, and your maximum HP decreases by 1. You cannot be reduced below 5 maximum HP from this effect."
            }
        ]
    },
    {
        "id": "invoker_soul_gaze",
        "role": "Invoker",
        "path": "Inquiries",
        "name": "Soul Gaze",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 1,
                "description": "Your eyes turn black, like shimmering gateways to eternity, as you peer into the eyes of a nearby creature. They become momentarily transfixed on your gaze."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "You learn the creature’s ideal and flaw. You also learn the worst and best thing they have ever done." },
            { "value": "11-19", "description": "You learn their ideal and flaw." },
            { "value": "6-10", "description": "You learn their ideal and flaw, but one is false." },
            { "value": "1-5", "description": "They resist your invasion and briefly glimpse your recent thoughts." }
        ]
    },
    {
        "id": "invoker_impression",
        "role": "Invoker",
        "path": "Inquiries",
        "name": "Impression",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You brush against a creature for a fleeting moment, feeling its desires. The Guide chooses and reveals to you something specific that the creature routinely craves. You become cursed to also crave that thing and cannot use Impression again until you fulfill the desire. When you fulfill it once, the curse is lifted."
            }
        ]
    },
    {
        "id": "invoker_evil_eye",
        "role": "Invoker",
        "path": "Inquiries",
        "name": "Evil Eye",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You pause, closing your eyes and quieting your mind. You sense the worst thing that ever happened nearby. The Guide will describe to you the type of thing that happened and what the people involved look like. For example, you might learn that someone was murdered, a curse was created, or an evil vow was taken."
            }
        ]
    },
    {
        "id": "invoker_shadowseek",
        "role": "Invoker",
        "path": "Inquiries",
        "name": "Shadowseek",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 3,
                "description": "You seek the location of a specific creature or object by projecting your consciousness into a shadow plane. You must know what your target looks like."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "You glimpse the target in real time and can see its nearby surroundings. If it is a creature, you may speak to them for 1 minute. They cannot see you, but they hear you in their mind. If you touch them, they feel a faint sensation, as if a breeze passes through them." },
            { "value": "11-19", "description": "You glimpse the target in real time, can see its surroundings, and may watch it for the next minute." },
            { "value": "6-10", "description": "You briefly glimpse the target and can see its surroundings, and may watch it for the next minute." },
            { "value": "2-5", "description": "You walk the shadow plane for 1 minute, finding only darkness." },
            { "value": 1, "description": "You walk in darkness. If you were searching for an enemy, they see you instead, learning your exact location." }
        ]
    },
    {
        "id": "invoker_inspire",
        "role": "Invoker",
        "path": "Verdicts",
        "name": "Inspire",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You inspire a nearby NPC by reciting a meaningful statement to them. You may invent a famous quote or proverb, or borrow one from the real world. The creature must be able to hear and understand you, and cannot currently be hostile toward you. Until the end of the day, the NPC shapes their behavior around their ideal, and cannot fall victim to their flaw."
            }
        ]
    },
    {
        "id": "invoker_compel_truth",
        "role": "Invoker",
        "path": "Verdicts",
        "name": "Compel Truth",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 1,
                "description": "Your eyes glow like blue flames as you look into the eyes of a nearby creature and grip their mind."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "The target is compelled to answer all questions truthfully for the next 5 minutes. You may set a real timer." },
            { "value": "11-19", "description": "The target is compelled to answer three questions truthfully." },
            { "value": "6-10", "description": "The target is compelled to answer one question truthfully." },
            { "value": "2-5", "description": "The target resists your invasion and senses you tried to manipulate them." },
            { "value": 1, "description": "The spell backfires. The target may compel you to answer a question truthfully instead." }
        ]
    },
    {
        "id": "invoker_forgive",
        "role": "Invoker",
        "path": "Verdicts",
        "name": "Forgive",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "While placing your hand on a creature and telling them they are forgiven, they immediately feel guilt fade from their conscience. You must know a specific act or circumstance that the creature feels guilty for. Your words of forgiveness must be in the form of a Petition. If you use this on a commoner or minion, they will become awestruck as if they have received a blessing from a god. They may begin to follow you as if you are a prophet, and they will not willingly cause you harm. If you use this on a boss, you will temporarily endear them to you. They will not harm you until the next time you meet, unless you or the party tries to harm them. They cannot be affected by this spell twice."
            }
        ]
    },
    {
        "id": "invoker_liberate",
        "role": "Invoker",
        "path": "Verdicts",
        "name": "Liberate",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You place your hand on an NPC, channeling the weight of your devotion and resolve. By speaking a word of power, you alleviate them of a character flaw. (You must already know one of their flaws.) They are effectively cured of the flaw and it no longer affects their behavior. This also has the effect of your Forgive ability and relieves the creature of any guilt for succumbing to their flaw in the past."
            }
        ]
    },
    {
        "id": "invoker_fiery_avenger",
        "role": "Invoker",
        "path": "Wrath",
        "name": "Fiery Avenger",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "Choose a phrase to use for this spell. You speak the phrase of power, igniting your weapon in a magical flame of any color. While the weapon is on fire, it acts as a torch that casts light nearby. The flame increases the weapon’s damage by 1. The flame persists until you roll a failure or worse on an attack with the weapon. You may dismiss the flame at any time."
            }
        ]
    },
    {
        "id": "invoker_thunderous_word",
        "role": "Invoker",
        "path": "Wrath",
        "name": "Thunderous Word",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "Choose a word to use for this spell. You speak the word of power, releasing a thunderous shockwave in the direction you are facing. The wave knocks up to three creatures backward and hits them each for 2 damage. Creatures affected by the spell are briefly dazed and cannot use special abilities during their next turn."
            }
        ]
    },
    {
        "id": "invoker_lawbringer",
        "role": "Invoker",
        "path": "Wrath",
        "name": "Lawbringer",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You raise your hand to the sky and summon a spectral warhammer into your grip. The hammer is a one-handed weapon that deals 3 damage. It appears to crackle with blue-green light and leaves a deep, reverberating sound in its wake. If you roll a triumph when using the hammer, it releases a crackling boom and casts your Thunderous Word spell on the target. The hammer vanishes in smoke after one hour or when you dismiss it."
            }
        ]
    },
    {
        "id": "invoker_smite",
        "role": "Invoker",
        "path": "Wrath",
        "name": "Smite",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 5,
                "description": "Speak a word or phrase, condemning a nearby creature that you can see. You engulf the target in radiant flame, hitting it for 10 HP. If the damage dealt is enough to kill the creature, it explodes into ash, and its body and spirit are permanently obliterated. If you destroy a creature with Smite, roll the die."
            }
        ],
        "rollTable": [
            { "value": "2-20", "description": "Nothing happens." },
            { "value": 1, "description": "The creature’s spirit becomes a dark passenger in your mind. You never know when it may decide to speak to you or observe your behavior." }
        ]
    },
    {
        "id": "invoker_blazing_avenger",
        "role": "Invoker",
        "path": "Wrath",
        "name": "Blazing Avenger",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 6,
                "description": "You recite a magical statement about your ideal while holding a weapon, imbuing it with incredible power. The weapon gains the following benefits: • It now glows faintly at all times and glows brighter when enemies are nearby. • When holding the weapon, you may cast Fiery Avenger on it at will for no AP cost. • When you roll a 20 when making an attack with the weapon, it casts the Smite spell on your target. You can only cast Blazing Avenger on one weapon at a time; casting it again cancels the previous enchantment."
            }
        ]
    },
    {
        "id": "invoker_shield",
        "role": "Invoker",
        "path": "Wards",
        "name": "Shield",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You summon a magical shield that appears as an aura of soft light around your body. The shield blocks up to 3 hit points of damage. (Any damage dealt in excess of 3 HP passes through the shield and hits you.) The shield lasts until it takes 3 or more damage in a single hit."
            }
        ]
    },
    {
        "id": "invoker_sigil",
        "role": "Invoker",
        "path": "Wards",
        "name": "Sigil",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You draw a magic sigil on an object. The spell lasts until you cancel it or cast Sigil again. You can only cast the spell if no enemies are currently nearby. Choose a specific creature for the sigil to affect, or a type of creature, like spirits or werewolves. Then draw a circle on a piece of paper at the table. Draw the creature that will be affected by the spell inside of the circle. Alternatively, instead of drawing something, you may describe the specific creature through its sounds, smells, and/or behavior. Choose one of four effects for the spell: Option A: Lure. The sigil attracts creatures to its location, where they linger for a minute. Option B: Repel. Creatures who come nearby won’t move closer to the sigil or may turn back. Option C: Alert. Receive a signal in your mind when creatures pass by the sigil. Option D: Message. The sigil telepathically sends a short message of up to 10 words in your language to creatures passing nearby. If you used a drawing, you may keep your drawing and reuse it later when casting this spell again, and you can choose a new effect each time."
            }
        ]
    },
    {
        "id": "invoker_rebuke",
        "role": "Invoker",
        "path": "Wards",
        "name": "Rebuke",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You utter a righteous word or phrase in the direction of a nearby creature that is approaching you during that creature’s turn. (The creature cannot already be within reach.) You release a spectral clone of yourself that rushes them, knocks them back several meters, deals 1 damage, and ends their turn. The clone then disappears."
            }
        ]
    },
    {
        "id": "invoker_oblation",
        "role": "Invoker",
        "path": "Wards",
        "name": "Oblation",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You place both hands on a creature, uttering a loving word or phrase. The creature instantly recovers 6 hit points and wakes up if they are unconscious. Or you may choose to cast this spell with no AP cost by transferring your own hit points to the creature. The creature recovers as many hit points as you are willing to give up."
            }
        ]
    },
    {
        "id": "invoker_befizzle",
        "role": "Invoker",
        "path": "Wards",
        "name": "Befizzle",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You curse a creature nearby, restricting their use of magic for the next hour. If they try to cast a spell, they will find it impossible. For example, if the spell is spoken, they forget their lines; if the spell requires hand-waving, they find their arms frozen. If you are casting the spell on a boss, you must concentrate on it to maintain the effect; the spell ends if you move or do something else."
            }
        ]
    },
    {
        "id": "invoker_wraith",
        "role": "Invoker",
        "path": "Legendary",
        "name": "Wraith",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You become a wraith: a creature between two worlds. Now, whenever you have 0 HP, you may instantly become ethereal. You appear translucent and ghostly while ethereal, but you are still visible to others. Your ethereal form has a maximum of 0 HP and cannot be healed. You are immune to all physical (nonmagical) harm while in this form. However, harmful magic hits you for double HP while ethereal, and taking damage can still kill you. You may revert to your normal form at any time during your turn. But you cannot change forms to avoid taking damage immediately after being hit."
            }
        ]
    },
    {
        "id": "invoker_sacrifice",
        "role": "Invoker",
        "path": "Legendary",
        "name": "Sacrifice",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You lay your hands on a creature who has died, bringing it back to life. The creature must still have a corpse that is mostly intact. If the creature died of old age, they receive a new maximum lifespan of the Guide’s choice. The sacrifice withers your soul. Each time you use this ability, you must choose an additional character flaw. Additionally, you permanently lose 2 HP from your maximum hit points. If you reduce your max HP to 0 by using this ability, you acquire the legendary Wraith ability, and you permanently enter an ethereal form. Using Sacrifice while at 0 maximum HP permanently kills you."
            }
        ]
    },
    {
        "id": "invoker_prophecy",
        "role": "Invoker",
        "path": "Legendary",
        "name": "Prophecy",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You delve through time to glimpse an NPC’s fate. You may only use this ability once during your entire story, so use it wisely. The choice you make shapes the story for everyone. The prophecy must come true; the Guide is obligated to honor the fate you have chosen at some point in the story. When and how it emerges is up to the Guide. You may keep your choice a secret from the party. Choose one of the following things. It will eventually become true, as you have foreseen. Option A: Savior. The creature will sacrifice their life to try to save someone or something. Option B: Betrayer. The creature will betray their allies at a pivotal moment in pursuit of a hidden agenda. Option C: Leader. The creature will acquire a meaningful amount of power and authority over a people or place. Option D: Disgraced. The creature will do something so morally ruinous that they become widely known for their misdeed. Option E: Paragon. The creature will do something so morally good that they become widely known for their righteousness."
            }
        ]
    },
    {
        "id": "invoker_eternity_gate",
        "role": "Invoker",
        "path": "Legendary",
        "name": "Eternity Gate",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 7,
                "description": "You project yourself past all realities and glimpse a place outside time and space – into The Beyond. Here, you may seek and find a single truth by posing a question to eternity itself. The Guide will give you a fulsome and accurate answer to your question. If you explain why you are asking the question, the Guide will do their best to answer in a way that satisfies what you were trying to discover. For example, if you asked “Is my friend still alive in another dimension?” the Guide will tell you whether they are alive. If you explain that you asked because you want to reunite with them, the Guide might tell you exactly where they are and how to get there. You must seek fact. You won’t find satisfying answers to questions like “What is the meaning of life?” Casting Eternity Gate is a huge risk."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "You receive your answer and may ask a follow-up question." },
            { "value": "11-19", "description": "You receive your answer." },
            { "value": "6-10", "description": "You receive your information and return to your body after one week. Your mind ages by 1 year in the week." },
            { "value": "2-5", "description": "You fail to receive the information and return to your body after one week. Your mind is wracked from wrong turns in your search. You age by 10 years. Choose an additional character flaw." },
            { "value": 1, "description": "Your mind is trapped in The Beyond for 100,000 years, where you experience an endless search through a maze of other realities. After enduring this ordeal in The Beyond, your mortal consciousness fundamentally changes when you return to your body after one week. The ideals and flaws of your previous self have washed away during your incomprehensible exile. Choose a new ideal, a new flaw, and a new dream to reflect deep changes in your character’s personality." }
        ]
    }
]