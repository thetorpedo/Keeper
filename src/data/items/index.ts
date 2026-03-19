import type { Ability } from "../interface.ts";
import { legendaryItems } from "./legendary.ts";
import { rareItems } from "./rare.ts";
import { supremeItems } from "./supreme.ts";
import { uncommonItems } from "./uncommon.ts";
import { usefulItems } from "./useful.ts";
import { weaponItems } from "./weapons.ts";

export const bookItems: Ability[] = [
    ...usefulItems,
    ...uncommonItems,
    ...rareItems,
    ...legendaryItems,
    ...supremeItems,
    ...weaponItems,
];