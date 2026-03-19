import type { Ability } from "../interface.ts";

export const rangerAbilities: Ability[] = [
    {
        "id": "ranger_commune",
        "role": "Ranger",
        "path": "Story and Song",
        "name": "Commune",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You use the language of outland folks, gaining the trust of a nearby commoner. You must invent a local saying to exchange with the NPC; it can be something like “It’s raining cats and dogs” or “Don’t judge a book by its cover.” Explain what it means at the table. \n\nThen, if you ask any of these questions, the NPC will answer to the best of their ability. \n\n• Is anyone causing trouble? \n• Where can I find the leader? \n• What are folks talking about lately?"
            }
        ]
    },
    {
        "id": "ranger_folk_song",
        "role": "Ranger",
        "path": "Story and Song",
        "name": "Folk Song",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You sing a song that kindles strong feelings in NPCs nearby. (The song has no effect on hostile creatures.) Read or sing the chorus of a song at the table and describe your performance. You may write your own or use one from another songwriter. Choose a mood to set for your audience: \n\nBright. Hearts swell with friendly enthusiasm, sparking joyful conversations. \n\nSomber. The audience falls silent and begins a sorrowful reflection on their suffering. \n\nProud. Zealous feelings are ignited, making the crowd noisy and excitable."
            }
        ]
    },
    {
        "id": "ranger_speak_myth",
        "role": "Ranger",
        "path": "Story and Song",
        "name": "Speak Myth",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You appeal to a local myth to gain the favor of a commoner. You create the myth using four parts: an obligation, a lesson, a subject, and a story. \n\nPart 1: Obligation. Decide how the myth affects your target. Choose one: \n• They offer you and your allies food, shelter, and secrecy in their home. \n• They offer you the best reasonable trade on an item they are selling. \n• They go on a small mission, like fetching an item or delivering a message. \n• They admit to a recent wrongdoing. \n• They forgive you for a transgression. \n• They spread a rumor you create. \n• An obligation of your choice, as long as it does not harm them. \n\nPart 2: Lesson. Using the obligation, say what the lesson of the myth is, like “Give refuge to strangers” or “Always be a fair dealer.” \n\nPart 3: Subject. Name a central person or event. \n\nPart 4: Story. Describe a dramatic situation the person or event is famous for. Perhaps they were a missionary who fed the hungry or it was a great flood that killed many. Share the myth with your friends at the table. \n\nYou may reuse a myth you have created without describing it in full."
            }
        ]
    },
    {
        "id": "ranger_remedy",
        "role": "Ranger",
        "path": "Survivalist",
        "name": "Remedy",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You scavenge your area for a short time to find a plant-based remedy for an ailment. You find enough for a single dose. The remedy cures temporary illness and eliminates poison."
            }
        ]
    },
    {
        "id": "ranger_shroud",
        "role": "Ranger",
        "path": "Survivalist",
        "name": "Shroud",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 3,
                "description": "You entreat nearby flora to provide the party with protection while camping in wilderness. (There must be plants nearby.) Shrubs and thorny vines will emerge around the campsite to provide concealment. The shroud lasts until you leave the camp. The shroud conceals the light from a small campfire. If hostile creatures advance on the party’s campsite, the trees will rustle and howl to provide 5 minutes of early warning. Creatures can pass through the shroud, but they are hit for 1 HP if they push through. When you regroup inside of the Shroud, your party gains the benefit of a rest."
            }
        ]
    },
    {
        "id": "ranger_signal",
        "role": "Ranger",
        "path": "Survivalist",
        "name": "Signal",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "While in wilderness, you create a distress signal that can be seen by other Rangers. Describe how you send your signal: it can be a smoke signal, a message you leave on a tree, or a similar act. Within the next day, you will meet an NPC Ranger who comes to your aid. Out of respect for you as a colleague, they will stay with you until they finish helping you with a request. Your request cannot be unlimited, and they will not stay with you forever. The NPC Ranger has 10 hit points, and comes with equipment of the Guide’s choice. You can ask them to do things, but they are an independent character who will ultimately act according to their own interests and ideals."
            }
        ]
    },
    {
        "id": "ranger_ritual",
        "role": "Ranger",
        "path": "Survivalist",
        "name": "Ritual",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You scavenge your area for a short time to find a single dose of a magic edible. (There must be plants in the area.) When you ingest the edible, you embark on an inner journey over the next hour for supernatural insight. You may learn the truth about one of the following things: \n\n• The safest or fastest way to get somewhere. \n• A place where your Nemesis visited within the past day. \n• Whether you are in a real place or if your reality is some kind of deception. \n• Whether an ally is keeping a secret from you. (You learn who they are, but not what the secret is.) \n\nIf an Invoker invites you along when using their Invoke ability, you may use Ritual to join them on their journey to an astral plane. The same rules of the Invoke ability apply to you when joining the Invoker."
            }
        ]
    },
    {
        "id": "ranger_read_the_winds",
        "role": "Ranger",
        "path": "Pathfinder",
        "name": "Read the Winds",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You concentrate on the language of wind, sensing weather patterns in your region of the world. You are able to glimpse a weather forecast for the next few days in your region of the world."
            },
            {
                "cost": 2,
                "description": "If you spend 2 AP on this ability, you may choose the weather that you foresee in your region over the next few days, as long as it is seasonally appropriate. You might choose light rain, a thunderstorm, fog, a heat wave, or any other weather pattern, except for natural disasters like tornadoes or hurricanes."
            }
        ]
    },
    {
        "id": "ranger_navigate",
        "role": "Ranger",
        "path": "Pathfinder",
        "name": "Navigate",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You feel the land in your bones. You cannot get lost in wilderness unless magic is inhibiting you."
            },
            {
                "cost": 1,
                "description": "You navigate your party to one of these areas: an oasis, a shelter, ruins, or a nest. \n\nOasis. You find a reprieve that has a small amount of nourishment. \n\nShelter. You find a natural cave that offers shelter from harsh weather. \n\nRuins. You find minor ruins, like an abandoned keep or a withered statue. \n\nNest. You find the home of an animal or group of animals, like an otter’s den."
            }
        ]
    },
    {
        "id": "ranger_delve",
        "role": "Ranger",
        "path": "Pathfinder",
        "name": "Delve",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You make a sound that travels throughout an underground structure, like a natural cave system or dungeon. (You can clap, make an animal noise, or anything else that might echo.) You sense the general layout of the next three areas connected to yours, plus the layout of any passageways between these areas. The Guide will draw you a rudimentary map, noting any major features, like columns, bridges, or crevasses."
            }
        ]
    },
    {
        "id": "ranger_speak_with_trees",
        "role": "Ranger",
        "path": "Pathfinder",
        "name": "Speak with Trees",
        "rollTheDie": false,
        "description": "You touch a tree trunk, connecting yourself to the trees of a contiguous forest.",
        "effects": [
            {
                "cost": 2,
                "description": "You ask the tree to search the forest. For example, you may ask to locate a specific creature, an object laying somewhere, or a location, like a cave or building. The tree will commune with its friends and then tell you where it is, how to get there, and how long it will take."
            },
            {
                "cost": 2,
                "description": "You ask the tree to watch over the party. Until you leave the forest, trees will begin to sway and rustle if you approach a trap or a dangerous creature. The rustling increases as you draw nearer to danger."
            }
        ]
    },
    {
        "id": "ranger_track",
        "role": "Ranger",
        "path": "Hunter",
        "name": "Track",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "When you find tracks, you can instantly identify the type of creature that left them. If it is an animal, the Guide will share a fact that you know about them, like their habits or personality traits."
            },
            {
                "cost": 1,
                "description": "You can pick up on the trail of an animal of your choice even if there are no tracks nearby, as long as it is native to the environment you’re currently in. You must choose a type of animal to find, like a boar or a squirrel. (You can’t use this to find a specific creature.) You find the creature after a short search."
            }
        ]
    },
    {
        "id": "ranger_farshot",
        "role": "Ranger",
        "path": "Hunter",
        "name": "Farshot",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You briefly sharpen your senses, surpassing your normal limits. You can make a ranged attack on a faraway target that you can see, even if it is out of range."
            }
        ]
    },
    {
        "id": "ranger_deadeye",
        "role": "Ranger",
        "path": "Hunter",
        "name": "Deadeye",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "Whenever you roll a 20 with a ranged weapon, you can name a specific limb on a creature to hit with your projectile. The limb becomes disabled and cannot be used until it is restored by a healer."
            },
            {
                "cost": 3,
                "description": "You take aim and focus your senses, automatically scoring a triumph with a ranged weapon on a nearby creature or object that you target. The hit disables the targeted limb."
            }
        ]
    },
    {
        "id": "ranger_stalk",
        "role": "Ranger",
        "path": "Hunter",
        "name": "Stalk",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 0,
                "description": "You and your party can carefully stalk tracked prey without it noticing you, as long as you try to be quiet. Describe the formation of you and/or your party as you go on the hunt."
            },
            {
                "cost": 2,
                "description": "When you discover the creature or creatures you were tracking, you can ambush them, even if they were preparing to ambush you. Your party takes the first round, and you get an extra turn"
            }
        ]
    },
    {
        "id": "ranger_nemesis",
        "role": "Ranger",
        "path": "Hunter",
        "name": "Nemesis",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "Choose a specific creature you have met before. You mark them as your nemesis. You may only have one nemesis at a time, and you may freely remove the mark at any time. Your predatory senses allow you to detect whenever your nemesis is present in your scene, even if they are hidden. You feel a tingle in the temples of your forehead when your nemesis is nearby. You gain these additional benefits when fighting your nemesis: \n\n• They cannot surprise you by ambush. \n• You may use your Farshot ability against them at will for no AP cost. \n• When they are nearby, you can sense their location well enough to strike them with physical attacks, even if they are concealed or invisible."
            }
        ]
    },
    {
        "id": "ranger_speak_with_animal",
        "role": "Ranger",
        "path": "Friend",
        "name": "Speak with Animal",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You touch an animal that is not currently hostile toward you, forming a telepathic bond with it for the next minute. You are capable of interpreting the animal’s thoughts and feelings, and you can have an exchange of communication with it. It can give basic information about things, like how it feels, what it has seen, and what it wants, but it does not understand complex ideas."
            }
        ]
    },
    {
        "id": "ranger_animal_partner",
        "role": "Ranger",
        "path": "Friend",
        "name": "Animal Partner",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You recruit a nearby animal companion who will follow your orders to the best of its ability. It can’t be smaller than a mouse or bigger than a horse. You may only have one partner at a time. \n\nThe animal is an NPC played by the Guide that acts in addition to you during your turn. It won’t willingly leave your area, and if you are separated, it will try to find you. It cannot speak to you, but it can vaguely sense your mood and intentions.Your animal partner has 6 HP and can make basic attacks for 2 damage."
            }
        ]
    },
    {
        "id": "ranger_courier",
        "role": "Ranger",
        "path": "Friend",
        "name": "Courier",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 1,
                "description": "You find a friendly animal nearby and whisper to it, giving it instructions to deliver an item. The item must be small and light enough for the animal to reasonably carry. You can have the animal deliver the item to a place or a specific person. The destination must be within a day’s travel time."
            }
        ]
    },
    {
        "id": "ranger_pair_bond",
        "role": "Ranger",
        "path": "Friend",
        "name": "Pair Bond",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 2,
                "description": "You develop a unique telepathic bond with your animal partner that lasts until you recruit a new one. You now passively experience your partner’s senses; you catch glimpses of what they see, hear, and feel. You also feel a shadow of pain whenever they are harmed. \n\nAt any time, you may enter a trance to leave your own body and take control of your partner. You remain dimly aware of what’s happening around your own body. While in the trance, you may control your partner as if they were yourself, though you cannot speak. You may exit the trance at any time."
            }
        ]
    },
    {
        "id": "ranger_whisper_on_the_wind",
        "role": "Ranger",
        "path": "Friend",
        "name": "Whisper on the Wind",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "You whisper a message carried by the wind in all directions. You must have a clear sight line to the sky for the spell to work. The message summons a flying animal to your location. You can petition any kind of flying animal, like a raven or a griffin. \n\nThe animal arrives one hour later. As long as you are friendly to it, the animal will obey your commands for the next day. For example, you can have it deliver messages, give you a ride, or cause distractions. The animal will not attack enemies unless it is attacked first."
            }
        ]
    },
    {
        "id": "ranger_wild_celebrity",
        "role": "Ranger",
        "path": "Legendary",
        "name": "Wild Celebrity",
        "rollTheDie": false,
        "description": "Your presence is now respected by wild creatures everywhere. Wild animals, except bosses, will no longer attack you unless you harm them. (Trained animals and pets can still be commanded to harm you.) You may now use the Speak With Animal and Speak with Trees abilities for no AP cost if you have already learned them. Your Animal Partner ability now recruits a more powerful animal. Your partner has 10 HP, can hit for 2 HP, and attack twice per turn. If you have an existing animal partner, it is upgraded to these stats.",
        "effects": [
            {
                "cost": 6,
                "description": "You send a call while in wilderness to recruit a small army of animals. They stay with you for the next day. You can choose any combination of wild animals as long as they are native to the area. You may command them, and they all act together during your turn. The group is treated like a single creature with 20 hit points, and they collectively hit for 6 HP, distributed among up to 6 targets."
            }
        ]
    },
    {
        "id": "ranger_slayer",
        "role": "Ranger",
        "path": "Legendary",
        "name": "Slayer",
        "rollTheDie": false,
        "effects": [
            {
                "cost": 4,
                "description": "Your experience as a Ranger has taught you to deal with overwhelming odds. Once per scene, you may devastate a group of minions in an impressive acrobatic fashion. You instantly kill half of all nearby minions, rounding up."
            }
        ]
    },
    {
        "id": "ranger_friend_of_the_land",
        "role": "Ranger",
        "path": "Legendary",
        "name": "Friend of the Land",
        "rollTheDie": false,

        "description": "You become the friend of a wilderness region that has meaning to you, like a forest or a valley. The region cannot already be under the control of a boss. You are known to all living things in this area as its ally. You may now use the Shroud, Speak with Trees, Navigate, Track, and Speak With Animal abilities within your chosen land for no AP cost, if you have already learned them. \n\nWhen you become the Friend of the Land, a group of volunteer creatures living in your chosen land will create a natural fort for you in a location of your choice. It takes one week to create. It should resemble in spirit something animals might create, like a giant ant hill, a meerkat manor, a nest in the trees, or a beaver’s dam. It has up to 20 rooms, including a kitchen, a great hall, and an armory. The keep is watched over full-time by allied animal sentries who will notify you of intruders or guests. \n\nAdditionally, a small staff of volunteer animals will routinely forage for you, making sure the keep is stocked with vegetables, fruits, and other natural foods from the area that they can collect. They will occasionally invite you to play with them."

    }
]