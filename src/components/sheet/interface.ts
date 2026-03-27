import type { Note } from "./notes-manager.tsx";

export interface SheetActions {
    updateField: (field: string, value: string) => Promise<void>;
    updateStat: (field: string, value: number) => Promise<void>;
    handleDeductAP: (cost: number) => Promise<void>;
    toggleAbility: (id: string) => Promise<void>;
    toggleItem: (id: string) => Promise<void>;
    handleUpdateNotes: (notes: Note[]) => Promise<void>;
    deleteCharacter: () => Promise<void>;
    rollD20: () => void;
    handleFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SheetProps {
    character: any;
    isOwner: boolean;
    notes: Note[];
    myAbilities: any[];
    myItems: any[];
    usedSlots: number;
    actions: SheetActions;
    uploadingImage: boolean;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    spinKey?: number;
}
