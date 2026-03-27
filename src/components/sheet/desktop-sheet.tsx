import defaultPfp from "@/assets/defaultpfp.png";
import AbilitySelector from "@/components/sheet/ability-selector.tsx";
import ItemSelector from "@/components/sheet/item-selector.tsx";
import NotesManager from "@/components/sheet/notes-manager.tsx";
import Stat from "@/components/sheet/stats.tsx";
import Card from "@/components/sheet/utils/card.tsx";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog.tsx";
import Button from "@/components/ui/questbutton.tsx";
import { CircleArrowLeft, Pencil, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import CharacterProfile from "./character-profile.tsx";
import type { SheetProps } from "./interface.ts";
import { ShareDialog } from "./share-dialog.tsx";

export function DesktopSheet({
    character,
    isOwner,
    notes,
    myAbilities,
    myItems,
    usedSlots,
    actions,
    uploadingImage,
    fileInputRef,
}: SheetProps) {
    return (
        <div className="hidden md:block w-full mx-5">
            <div className="my-10 max-w-280 w-screen px-5 mx-auto flex flex-col gap-3 items-center">
                <div className="w-full">
                    <Link
                        to="/view"
                        className="text-gray-400 flex flex-row gap-2 w-fit"
                    >
                        <CircleArrowLeft />
                        <span className="uppercase text-xl font-medium font-alegraya-sans">
                            Back
                        </span>
                    </Link>
                </div>

                <div className="flex flex-row w-full justify-between gap-2 items-center align-middle pb-5 border-b ">
                    <div className="flex flex-col min-w-0 shrink">
                        <h1 className="font-alegraya font-bold truncate text-5xl">
                            {character.name}
                        </h1>
                        <h2 className="font-alegraya-sans text-gray-500 uppercase font-medium text-xl">
                            The {character.role}
                        </h2>
                    </div>
                    <div>
                        <ShareDialog />
                    </div>
                </div>

                <div className="grid grid-cols-10 w-full gap-2">
                    <div className="col-span-3 flex flex-col w-full gap-2">
                        {/* Stats */}
                        <section className="border border-gray-400 rounded-lg p-4 flex flex-col gap-2">
                            <div className="w-full flex aspect-square justify-center items-center border mb-3 rounded-lg overflow-hidden">
                                {uploadingImage ? (
                                    <span className="font-alegraya-sans lowercase text-base font-bold animate-pulse">
                                        Uploading...
                                    </span>
                                ) : (
                                    <div
                                        className={`relative ${isOwner && "group"} w-full h-full overflow-hidden`}
                                    >
                                        <img
                                            src={
                                                character.profileImage ||
                                                defaultPfp
                                            }
                                            className="object-cover w-full h-full transition-all group-hover:scale-105 group-hover:opacity-90"
                                            alt={`Profile picture of ${character.name}`}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    fileInputRef.current?.click()
                                                }
                                                className={`flex items-center bg-white border px-4 py-2 cursor-pointer text-sm font-bold font-alegraya-sans uppercase tracking-wider transition-all ${!isOwner && "hidden"}`}
                                            >
                                                <Upload className="size-4 mr-2" />{" "}
                                                Upload Image
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={actions.handleFileSelect}
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                            <Stat
                                id="hp"
                                isOwner={isOwner}
                                name="HP"
                                value={character.hp ?? 10}
                                onUpdate={actions.updateStat}
                            />
                            <Stat
                                id="ap"
                                isOwner={isOwner}
                                name="AP"
                                value={character.ap ?? 10}
                                onUpdate={actions.updateStat}
                            />
                        </section>
                        {/* Notes */}
                        <NotesManager
                            isOwner={isOwner}
                            notes={notes}
                            onUpdateNotes={actions.handleUpdateNotes}
                        />
                    </div>

                    <div className="col-span-7 flex flex-col w-full gap-2">
                        {/* Characteristics */}
                        <section className="border border-gray-400 rounded-lg p-4">
                            <CharacterProfile
                                isOwner={isOwner}
                                characterData={character}
                                updateField={actions.updateField}
                            />
                        </section>
                        {/* Abilities & Inventory */}
                        <section className="border border-gray-400 rounded-lg w-full gap-9 flex items-between flex-col p-4">
                            <div className="flex flex-row gap-5 justify-between">
                                <div className="flex flex-row justify-between w-full items-center">
                                    <div className="pl-1 font-alegraya-sans lowercase font-semibold text-2xl">
                                        Abilities
                                    </div>
                                    <div className="mr-1">
                                        {isOwner && (
                                            <Dialog modal={true}>
                                                <DialogTrigger asChild>
                                                    <Button className="flex text-lg py-0.5! items-center cursor-pointer">
                                                        <Pencil className="size-4 mr-2" />{" "}
                                                        Edit
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent
                                                    onWheel={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    onTouchMove={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    className="w-fit max-w-[90vw]! max-h-[90vh] overflow-y-auto p-10 bg-white"
                                                >
                                                    <AbilitySelector
                                                        selectedAbilities={
                                                            character.abilities ||
                                                            []
                                                        }
                                                        onToggleAbility={
                                                            actions.toggleAbility
                                                        }
                                                    />
                                                </DialogContent>
                                            </Dialog>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between w-full items-center">
                                    <div className="pl-1 relative font-alegraya-sans lowercase font-semibold text-2xl">
                                        Inventory{" "}
                                        <div className="absolute top-6 font-alegraya-sans opacity-40 lowercase text-lg">{`(${usedSlots}/12)`}</div>
                                    </div>
                                    <div className="mr-1">
                                        {isOwner && (
                                            <Dialog modal={true}>
                                                <DialogTrigger asChild>
                                                    <Button className="flex text-lg py-0.5! items-center cursor-pointer">
                                                        <Pencil className="size-4 mr-2" />{" "}
                                                        Edit
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent
                                                    onWheel={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    onTouchMove={(e) =>
                                                        e.stopPropagation()
                                                    }
                                                    className="w-fit max-w-[90vw]! max-h-[90vh] overflow-y-auto p-10 bg-white"
                                                >
                                                    <ItemSelector
                                                        selectedItems={
                                                            character.items ||
                                                            []
                                                        }
                                                        onToggleItem={
                                                            actions.toggleItem
                                                        }
                                                    />
                                                </DialogContent>
                                            </Dialog>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 justify-between">
                                <div className="flex flex-col gap-4 justify-start h-full w-1/2 ">
                                    <div className="p-5 bg-gray-100 rounded-lg w-full h-full border min-h-125 border-gray-300">
                                        <div className="mt-23 flex-col grow-0">
                                            {myAbilities.length === 0 && (
                                                <p className="text-gray-500 font-alegraya-sans text-center">
                                                    No abilities yet.
                                                </p>
                                            )}
                                            {myAbilities.map(
                                                (ability, index, array) => (
                                                    <Card
                                                        key={ability.id}
                                                        ability={ability}
                                                        editing={false}
                                                        isSelected={true}
                                                        isOwner={isOwner}
                                                        onClick={() =>
                                                            actions.toggleAbility(
                                                                ability.id,
                                                            )
                                                        }
                                                        onRoll={actions.rollD20}
                                                        isLast={
                                                            index ===
                                                            array.length - 1
                                                        }
                                                        onDeductAP={
                                                            actions.handleDeductAP
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 justify-start h-full w-1/2">
                                    <div className="p-5 bg-gray-100 rounded-lg w-full h-full border min-h-125 border-gray-300 ">
                                        <div className="mt-23 flex-col grow-0">
                                            {myItems.length === 0 && (
                                                <p className="text-gray-500 font-alegraya-sans text-center">
                                                    No items yet.
                                                </p>
                                            )}
                                            {myItems.map(
                                                (item, index, array) => (
                                                    <Card
                                                        key={item.id}
                                                        ability={item}
                                                        editing={false}
                                                        isSelected={true}
                                                        isOwner={isOwner}
                                                        onClick={() =>
                                                            actions.toggleItem(
                                                                item.id,
                                                            )
                                                        }
                                                        onRoll={actions.rollD20}
                                                        isLast={
                                                            index ===
                                                            array.length - 1
                                                        }
                                                        onDeductAP={
                                                            actions.handleDeductAP
                                                        }
                                                    />
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {isOwner && (
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="font-alegraya-sans lowercase text-left w-full ml-1 cursor-pointer hover:underline transition-all hover:text-red-400 font-medium text-xl text-red-500 ">
                                Delete this character
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>
                                    Are you sure you want to delete this
                                    character?
                                </DialogTitle>
                                <DialogDescription className="text-base pb-5">
                                    This action CANNOT be undone!
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className="sm:justify-between">
                                <DialogClose asChild>
                                    <Button
                                        className="bg-red-400 text-white"
                                        onClick={actions.deleteCharacter}
                                    >
                                        Delete
                                    </Button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Button>Close</Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </div>
    );
}
