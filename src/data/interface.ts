export interface Table {
    value: number;
    description: string;
}

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
    slots?: number;
    damage?: number;
    description?: string;
    rollTheDie?: boolean;
    effects?: AbilityEffect[];
    rollTable?: Table[];
}
