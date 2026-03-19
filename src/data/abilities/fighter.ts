import type { Ability } from "../interface.ts";

export const fighterAbilities: Ability[] = [
    // DUELING
    {
        "id": "fighter_counterattack",
        "role": "Fighter",
        "path": "Dueling",
        "name": "Counterattack",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": `When an enemy within reach rolls a tough choice or worse on a basic attack against you, you parry their attack and take no damage. If they roll a failure or worse, you may also immediately roll the die to make a basic attack on them. \n\nThis counterattack does not count as a turn.`
            }
        ]
    },
    {
        "id": "fighter_wild_attack",
        "role": "Fighter",
        "path": "Dueling",
        "name": "Wild Attack",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 0,
                "description": "You attack with reckless power, disregarding your safety. Describe a signature style for this attack and what it looks like when you make it."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "You deal quadruple damage." },
            { "value": "11-19", "description": "You deal double damage." },
            { "value": "6-10", "description": "You deal double damage to the enemy, but they counterattack you." },
            { "value": "2-5", "description": "You miss, and all enemies within reach may counterattack you immediately." },
            { "value": 1, "description": "Your weapon breaks." }
        ]
    },
    {
        "id": "fighter_overpower",
        "role": "Fighter",
        "path": "Dueling",
        "name": "Overpower",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You use your strength to overpower a commoner or minion within reach. (You cannot use this ability on bosses.) Describe how you overpower them. \n\nYou put the target in a compromised position until they spend a turn getting out of it. During this time, basic attacks hit them for double damage."
            }
        ]
    },
    {
        "id": "fighter_disarm",
        "role": "Fighter",
        "path": "Dueling",
        "name": "Disarm",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You disarm an NPC within reach. If you have a free hand, you may take the weapon for yourself, or you may toss the weapon aside. You may disarm the NPC on your turn or immediately after they roll a failure or worse on an attack against you."
            }
        ]
    },
    {
        "id": "fighter_duel",
        "role": "Fighter",
        "path": "Dueling",
        "name": "Duel",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You compel a nearby creature to fight you in single combat. (The creature must already be hostile toward you.) If you have the Quest Core Deck, take your Basic Attack, Wild Attack, Overpower, and Disarm cards. (If you don’t have this deck, assign these abilities to a standard deck of cards.) Choose three of these cards to use and place them facedown on the table, keeping it secret from the Guide. The Guide must guess the identity of each card. Reveal the card after each guess. \n\nIf the Guide guesses correctly, you fail to use the ability on that card. If they guess incorrectly, you use the ability immediately at no AP cost, and it is automatically successful. If the Guide guesses all three correctly, your foe immediately makes a successful counterattack against you. But if they get all three guesses wrong, you may extend the Duel for another round of three guesses."
            }
        ]
    },
    {
        "id": "fighter_provoke",
        "role": "Fighter",
        "path": "Tactics",
        "name": "Provoke",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "Make a nearby creature angry at you by saying something or making a rude gesture. Your target must be able to understand your intent. For the next minute, the target focuses its attention on you, ignoring all others. The effect ends if the target is hit by another creature or if hostilities subside."
            }
        ]
    },
    {
        "id": "fighter_intercept",
        "role": "Fighter",
        "path": "Tactics",
        "name": "Intercept",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "If a nearby NPC is about to attack someone, you may rush to intercept the attack. (You must say you’re using this ability as soon as the Guide declares the attack.) The NPC makes their attack on you instead. \n\nWhen you intercept the attack, the attacker immediately becomes affected by your Provoke ability."
            }
        ]
    },
    {
        "id": "fighter_charge",
        "role": "Fighter",
        "path": "Tactics",
        "name": "Charge",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You lock your gaze on a nearby destination, summoning all of your strength to charge toward it. You violently barrel through any foes in your path, knocking them down and dealing 1 damage to each of them. Creatures you knock down are dazed and cannot use special abilities during their next turn."
            }
        ]
    },
    {
        "id": "fighter_retreat",
        "role": "Fighter",
        "path": "Tactics",
        "name": "Retreat",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You Provoke all nearby enemies to give your allies cover to retreat. If you are in combat, one nearby enemy immediately gets a chance to attack you. \n\nYou and any willing allies can then safely and expeditiously disengage from a fight and leave the scene. Commoners and minions will not pursue you, but bosses may still choose to give chase."
            }
        ]
    },
    {
        "id": "fighter_whirlwind",
        "role": "Fighter",
        "path": "Tactics",
        "name": "Whirlwind",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 2,
                "description": "You become a tornado of martial fury in an attack so swift that creatures nearby can hear a whistling sound in the air. You may use your body or a weapon for this attack."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "You strike all enemies within reach, hitting them for double damage." },
            { "value": "11-19", "description": "You strike all enemies within reach, hitting them for double damage." },
            { "value": "6-10", "description": "You hit all enemies within reach. \nChoose one: you deal half damage or your weapon breaks after dealing damage." },
            { "value": "2-5", "description": "You hit one enemy within reach, then your weapon goes flying in the air." },
            { "value": 1, "description": "You spin wildly until you feel sick, and an enemy disarms you." }
        ]
    },
    {
        "id": "fighter_summon_the_blood",
        "role": "Fighter",
        "path": "Camaraderie",
        "name": "Summon the Blood",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "When you regroup, you bolster the spirits of your party by reciting a poem. You must recite a poem at the table for your friends. You can write your own or read one from another author, like from a book, movie, or TV show. \n\nWhen completed, your party recovers an additional 3 HP from regrouping."
            }
        ]
    },
    {
        "id": "fighter_valiant_soliloquy",
        "role": "Fighter",
        "path": "Camaraderie",
        "name": "Valiant Soliloquy",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You inspire your allies with a rousing speech. You can write your own or borrow one from a play or movie. It can be short; reading a few powerful lines is enough. \n\nYou must give the speech at the table. When you complete it, each member of the party gains the option to redo their next roll. This option expires at the end of your scene if it has not been used."
            }
        ]
    },
    {
        "id": "fighter_war_story",
        "role": "Fighter",
        "path": "Camaraderie",
        "name": "War Story",
        "rollTheDie": false,
        "description": "Once per game session, you may earn 2 AP by recounting a battle from your past adventures. You can only use this ability during downtime in the story, like when you regroup or undertake a journey. (You can’t spout history during combat.) \n\nYou must recount a different conflict each time you use this ability. If there is no battle to recount, you can make one up from your character’s past.",
    },
    {
        "id": "fighter_marshal",
        "role": "Fighter",
        "path": "Camaraderie",
        "name": "Marshal",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "When you face a serious test of strength, you can organize the help of your allies to overcome it. The whole party must be nearby and able to participate. \n\nEveryone in the party must roll the die. If a majority of players scores a success or better, you are able to overcome the challenge. \n\nYou can use this for feats that would be improbable to accomplish alone, like breaking through a reinforced door, lifting a wooden beam off of someone, or winning a tug-of-war contest against a giant. The Guide will decide what is outside of the limits of this ability."
            }
        ]
    },
    {
        "id": "fighter_bond",
        "role": "Fighter",
        "path": "Camaraderie",
        "name": "Bond",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "Choose a member of your party to form a special partnership with. They must want to form the bond with you. You may only bond with one party member at a time, and the bond cannot be broken until your partner dies or abandons the party. \n\n• You may now use your Intercept ability for no AP to defend your partner from an attack. \n• You can now sense when your partner is in danger, even if you are separated. \n• You are immune to fear when your partner is at death’s door. \n• You notice your heart beating stronger when your partner is nearby."
            }
        ]
    },
    {
        "id": "fighter_size_up",
        "role": "Fighter",
        "path": "Leadership",
        "name": "Size Up",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You evaluate the capabilities of a nearby creature or group of creatures. The Guide will give you useful insight into their capabilities, strength, vulnerabilities, and/or resistances. At a minimum, you will receive an accurate assessment from the Guide about whether they would pose a fair fight. \n\nThe Guide will deliver this information to you narratively. For example, they might say “you notice the giant spider flinching at the sight of your torch,” rather than telling you it is vulnerable to fire damage."
            }
        ]
    },
    {
        "id": "fighter_plan",
        "role": "Fighter",
        "path": "Leadership",
        "name": "Plan",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "If you have time to prepare before a conflict and you can choose when it begins, you may ambush your enemies and take the first round. Before action begins, each party member must say what they will do during their first turn. The Guide will then resolve these actions simultaneously."
            }
        ]
    },
    {
        "id": "fighter_recruit",
        "role": "Fighter",
        "path": "Leadership",
        "name": "Recruit",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You command a nearby commoner or minion to assist you. (They cannot currently be hostile toward you.) You can have them join a fight or perform other tasks, like watching a door, defending an area, or delivering a message. They will follow your commands to the best of their ability, but they won’t follow absurd or suicidal orders. The Guide plays the part of the NPC. After one day or when they complete the task you give them, the recruit will leave you and return to their business."
            }
        ]
    },
    {
        "id": "fighter_attendant",
        "role": "Fighter",
        "path": "Leadership",
        "name": "Attendant",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 7,
                "description": "While in a populated area, you may find and recruit an NPC attendant. The Guide will tell you how you find this person and who they are. The attendant will stay with you permanently until you dismiss their service. You may only have one attendant at a time. The attendant is a Fighter-based minion who is played by the Guide. They have 10 hit points and can use the Counter Attack, Wild Attack, and Provoke abilities. The Guide will create the rest of the attendant’s characteristics. The attendant is your ally and a capable apprentice. (The Guide plays as the attendant like any other NPC, but you may give them orders.) They’ll run errands for you, assist you in combat, and follow other orders to the best of their ability. But they may choose not follow absurd, suicidal, or morally ruinous orders. This arrangement is based on mutual respect; your attendant follows you to learn what you know. If you betray your attendant, they may abandon you."
            }
        ]
    },
    {
        "id": "fighter_technique",
        "role": "Fighter",
        "path": "Body",
        "name": "Technique",
        "rollTheDie": false,
        "description": "You are always deadly, even when not holding a weapon. Attacks with your body (like punches and kicks) now hit for 2 HP."
    },
    {
        "id": "fighter_flow",
        "role": "Fighter",
        "path": "Body",
        "name": "Flow",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "When you roll a 20 on a basic attack, you may briefly enter a state of intense focus. \n\nAfter completing your initial attack, you may immediately make one basic attack on each enemy within reach. These attacks are automatically successful."
            }
        ]
    },
    {
        "id": "fighter_yawp",
        "role": "Fighter",
        "path": "Body",
        "name": "Yawp",
        "rollTheDie": true,
        "effects": [
            {
                "cost": 1,
                "description": "Once per scene, you may make a show of bravado to frighten nearby creatures. Any common folk nearby will seek shelter, run away, or attempt to appear non-threatening."
            }
        ],
        "rollTable": [
            { "value": 20, "description": "Half of all minions flee the scene." },
            { "value": "11-19", "description": "One minion flees the scene." },
            { "value": "6-10", "description": "One minion flees the scene, unless their boss is present." },
            { "value": "1-5", "description": "They laugh at you." }
        ]
    },
    {
        "id": "fighter_focus",
        "role": "Fighter",
        "path": "Body",
        "name": "Focus",
        "rollTheDie": false,
        "description": "You pause briefly, closing your eyes and clearing your mind of its reflexive habits. Your restless self fades away as your body becomes your task.",
        "effects": [
            {
                "cost": 3,
                "description": "You immediately use your Flow ability, even if you didn’t roll a 20."
            },
            {
                "cost": 4,
                "description": "You become wind; until the end of your current fight, minions cannot hit you with basic attacks unless they roll 20. This effect ends if you are hit."
            },
            {
                "cost": 5,
                "description": "You purge a poison or illness from your body."
            }
        ]
    },
    {
        "id": "fighter_defy_death",
        "role": "Fighter",
        "path": "Body",
        "name": "Defy Death",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "If you would die from an enemy’s attack, you may overcome fate to make a last stand. Instead of dying, you stay on your feet but remain at 0 HP. If you also make an appeal to your dream, you recover 1 hit point. You must say something that references your dream — to declare why you now live to die another day. \n\nYou laugh at death, but death demands a toll. Each time you use this ability, you increase a supernatural bounty on your head. In quiet moments, you begin to feel as if the shadows are watching you."
            }
        ]
    },
    {
        "id": "fighter_limit_break",
        "role": "Fighter",
        "path": "Legendary",
        "name": "Limit Break",
        "rollTheDie": false,
        "description": "You achieve a transcendent unity of mind and body that allows you to passively channel the magic around you and push yourself beyond your natural limits.",
        "effects": [
            {
                "cost": 7,
                "description": "You single-handedly rout all nearby minions that you can see in a stunning display of martial fury. You may choose to kill or intimidate any number of them. Describe how you clear the scene of these foes."
            },
            {
                "cost": 4,
                "description": "You mark an enemy, beginning a relentless assault on them. You automatically make three successful basic attacks on them. Then, you may continue making basic attacks on them until you roll lower than a success."
            },
            {
                "cost": 3,
                "description": "You briefly gain unbelievable strength to perform one task. You can do things that were previously impossible, like single-handedly lifting a giant boulder, running through a brick wall, or knocking a giant to the ground. You can now do things that were just beyond your reach, but not things that are absurd. (You can’t move a mountain or lasso the moon.) The Guide will decide what’s possible."
            }
        ]
    },
    {
        "id": "fighter_champion",
        "role": "Fighter",
        "path": "Legendary",
        "name": "Champion",
        "rollTheDie": false,
        "description": "Tales of your heroic deeds have spread through the lands, elevating your stature into the stratosphere. You are now a hero, especially to those who value power. Authoritarian-minded people are especially vulnerable to your reputation, and most will defer to you in reverence. This includes town guards, bandits, and others who enjoy using force. \n\nYou gain the Recruit ability if you do not already have it, and you may use it for no AP cost on your fans or those who are awestruck by your prestige. \n\nYou also gain the Attendant ability. It now costs 4 AP to use."
    },
    {
        "id": "fighter_steel_pact",
        "role": "Fighter",
        "path": "Legendary",
        "name": "Steel Pact",
        "rollTheDie": false,
        "description": "Choose a weapon you own. You form an extraordinary bond with it that cannot be broken unless the weapon is destroyed. You now sense which direction your weapon is in and feel a vague sense of how far away it is. If it is beyond your current plane of existence, you sense nothing but a dull feeling of sadness.",
        "effects": [
            {
                "cost": 0,
                "description": "When you roll a failure when using this weapon, you may reroll the die once. You must take the result of the reroll."
            },
            {
                "cost": 0,
                "description": "When you roll a 20 on an attack against a minion while using this weapon, you automatically kill it, unless it has immunity against weapon attacks."
            }
        ]
    },
]