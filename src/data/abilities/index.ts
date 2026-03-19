import type { Ability } from "../interface.ts";
import { doctorAbilities } from "./doctor.ts";
import { fighterAbilities } from "./fighter.ts";
import { invokerAbilities } from "./invoker.ts";
import { magicianAbilities } from "./magician.ts";
import { naturalistAbilities } from "./naturalist.ts";
import { rangerAbilities } from "./ranger.ts";
import { spyAbilities } from "./spy.ts";
import { wizardAbilities } from "./wizard.ts";

export const bookAbilities: Ability[] = [
    ...doctorAbilities,
    ...fighterAbilities,
    ...invokerAbilities,
    ...magicianAbilities,
    ...naturalistAbilities,
    ...rangerAbilities,
    ...spyAbilities,
    ...wizardAbilities,
];