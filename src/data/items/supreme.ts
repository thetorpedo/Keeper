import type { Ability } from '@/data/interface.ts';

export const supremeItems: Ability[] = [
    {
        "id": "item_conservators_ring",
        "role": "Supreme",
        "path": "Item",
        "name": "Conservator’s ring",
        "slots": 1,
        "description": "This is an unimaginably powerful magic ring created and worn by members of an interdimensional bureau of gods. The ring cannot be destroyed.",
        "effects": [
            {
                "cost": 9,
                "description": "You and any nearby creatures of your choice teleport to any desired destination in another universe, leaving behind a tear in the universe. The tear rapidly releases that universe into The Beyond, destroying it completely. The universe’s corresponding anchor in The Rift is also destroyed in a terrifying conflagration of prismatic fires. \n\nA record of your deed is stored in the ring, and your location is transmitted to any other beings who are wearing one of the ring’s siblings."
            }
        ]
    },
    {
        "id": "item_cosmic_forge",
        "role": "Supreme",
        "path": "Item",
        "name": "Cosmic forge",
        "slots": 1,
        "rollTheDie": true,

        "description": "The Cosmic Forge is an obsidian ring that phases in and out of ethereal form like waves lapping the shores of an ocean. When worn, it becomes permanently attached to the bearer and can only be released if they are destroyed. The bearer may snap their fingers to conjure any object into existence nearby, except for a copy of the Cosmic Forge."
        ,
        "rollTable": [
            { "value": 20, "description": "You conjure the object. It is perfect in every way." },
            { "value": "11-19", "description": "You conjure the object, but the ring overheats, hitting you for 6 HP." },
            { "value": "6-10", "description": "You conjure the object, but it is cursed with a random effect of the Guide’s choice." },
            { "value": "2-5", "description": "You conjure the object, but it appears in a random location somewhere else in the omniverse." },
            { "value": 1, "description": "You crumble to dust and are destroyed. The ring falls to the ground, waiting." }
        ]
    },
    {
        "id": "item_dubbins_dire_die",
        "role": "Supreme",
        "path": "Item",
        "name": "Dubbin’s dire die",
        "slots": 1,
        "description": "This is a 20-sided die that occasionally appears to tremble as if there’s an earthquake in the distance.",
        "effects": [
            {
                "cost": 4,
                "description": "When activated, the die bends the fate of creatures nearby it. The next 10 rolls made nearby the die use the following spread of outcomes: \n\n1 to 9: Catastrophe; \n10: Tough Choice; \n11 to 20: Triumph. \n\nIf the owner of Dubbin’s Dire Die rolls a 1 while the die is activated, the die explodes with rending magic force, dealing 4 damage to all creatures within 1,000 kilometers."
            }
        ]
    },
    {
        "id": "item_it_whispers_to_you",
        "role": "Supreme",
        "path": "Item",
        "name": "It whispers to you",
        "slots": 1,

        "description": "This ring’s humble presentation enshrouds its devious character. \n\nYou look at the ring. \nIt whispers to you. \n\nForged by a forgotten god, the ring grants the wearer the ability to cast the Control spell on a nearby creature. The spell automatically takes effect against the target. It cannot be resisted or countered, and its duration is permanent. \n\nThe ring was not meant for you to wear. Each time you use the ring’s ability, it steals your fate, permanently reducing your hit point maximum by 3. If you use the ring more than 3 times, you die. \n\nYou look at the ring. \nIt whispers to you."

    },
    {
        "id": "item_the_hand",
        "role": "Supreme",
        "path": "Item",
        "name": "The hand",
        "slots": 1,
        "description": "This is a pocketwatch with a large crown, a single hand, and a face with no markings.",
        "effects": [
            {
                "cost": 3,
                "description": "When the crown is pulled out to the first stop, it can be rotated to turn the watch’s hand. Turning the hand clockwise shows the bearer their current surroundings in the future, while turning it counterclockwise shows visions of the past."
            },
            {
                "cost": 9,
                "description": "When the crown is pulled to the second stop, it can be used to travel through time. The movement is imprecise: you don’t know exactly how far you will arrive in the future or past. When you stop rotating the crown, it depresses to its default position, and you arrive at your destination."
            }
        ]
    },
    {
        "id": "item_wish_heart",
        "role": "Supreme",
        "path": "Item",
        "name": "Wish heart",
        "slots": 1,

        "description": "A magic locket created by a god, the Wish Heart can turn thought into reality. When you open the locket, you see the visage of a paradox — a person who is strange and yet most familiar to you. \n\nTo make a wish, you must open the locket and speak to the visage. State your wish clearly at the table. \n\nIf you would gain nothing from your intended wish but good feelings, the person in the locket smiles at you. \n\nIf you would gain something material from your intended wish, the person in the locket raises an eyebrow. \n\nIf you intend to harm someone with your wish, the person in the locket scowls at you. \n\nMoments after the visage reacts to you, the locket briefly scintillates and rattles. Then, it vanishes before your eyes. \n\nYour wish comes true in a manner of the Guide’s choosing. The wish is highly unpredictable. For example, if you wish for someone to be relieved of pain, they may die — releasing them from their mortal troubles. If you wish for your party to safely escape an apocalypse, you might be teleported to a safe but unknown parallel universe. Being specific about what you want to come true can help, but it’s not guaranteed that you will get exactly what you had hoped for. \n\nHowever, there is one type of wish the locket hopes to hear. If you ask to be reunited with a loved one, it will reunite you in an exact manner of your choosing without any unpredictable consequences. For example, if you say you wish for your lost sibling to return, you may have them appear in front of you — real in every way, and here to stay."

    }

]