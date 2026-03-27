import d20Icon from "@/assets/d20.png";
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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { Pencil, Upload } from "lucide-react";
import { BsFillBackpack2Fill, BsFillFileTextFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { RiSparkling2Fill } from "react-icons/ri";
import CharacterProfile from "./character-profile.tsx";
import type { SheetProps } from "./interface.ts";
import { ShareDialog } from "./share-dialog.tsx";

export function MobileSheet({
    character,
    isOwner,
    notes,
    myAbilities,
    myItems,
    usedSlots,
    actions,
    uploadingImage,
    fileInputRef,
    spinKey,
}: SheetProps) {
    return (
        <div className="block md:hidden w-screen pb-20">
            <div className="flex flex-row px-5 justify-between items-center align-middle pb-5 ">
                <div className="flex flex-col gap-2 w-full pb-5 border-b">
                    <div className="flex flex-row w-full gap-4 justify-between items-center">
                        <div className="flex flex-col h-full w-2/3 justify-between items-between gap-1">
                            <div>
                                <h1
                                    className={`font-alegraya font-bold truncate ${character.name.length < 10 ? "text-5xl/8 pb-3 pt-1" : "text-3xl/8"}`}
                                >
                                    {character.name}
                                </h1>
                                <h2 className="font-alegraya-sans truncate text-gray-500 uppercase font-medium">
                                    The {character.role}
                                </h2>
                            </div>
                            <ShareDialog />
                        </div>
                        <div className="flex flex-col h-full w-2/5 items-between gap-2">
                            <div className=" w-full aspect-square shrink-0 h-full flex justify-center items-center border rounded-lg overflow-hidden">
                                {uploadingImage ? (
                                    <span className="font-alegraya-sans lowercase text-base font-bold animate-pulse">
                                        Uploading...
                                    </span>
                                ) : (
                                    <div
                                        className={`relative ${!isOwner && "group"} w-full h-full overflow-hidden`}
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
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-4">
                        <Stat
                            id="hp"
                            name="HP"
                            isOwner={isOwner}
                            value={character.hp ?? 10}
                            onUpdate={actions.updateStat}
                        />
                        <Stat
                            id="ap"
                            name="AP"
                            isOwner={isOwner}
                            value={character.ap ?? 10}
                            onUpdate={actions.updateStat}
                        />
                    </div>
                </div>
            </div>

            <Tabs defaultValue="characteristics">
                <TabsList className="fixed w-full bottom-0 left-0 z-10">
                    <TabsTrigger
                        value="characteristics"
                        className="group active:scale-95 transition-transform"
                    >
                        <FaUser className="size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-6.5" />
                    </TabsTrigger>
                    <TabsTrigger
                        value="abilities"
                        className="group active:scale-95 transition-transform"
                    >
                        <RiSparkling2Fill className="size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7" />
                    </TabsTrigger>
                    <TabsTrigger
                        value="inventory"
                        className="group active:scale-95 transition-transform"
                    >
                        <BsFillBackpack2Fill className="size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7" />
                    </TabsTrigger>
                    <TabsTrigger
                        value="notes"
                        className="group mr-18 active:scale-95 transition-transform"
                    >
                        <BsFillFileTextFill className="size-6 group-data-[state=active]:-mt-2 group-data-[state=active]:size-7" />
                    </TabsTrigger>
                    <Button
                        onClick={() => {
                            requestAnimationFrame(() => {
                                actions.rollD20();
                            });
                        }}
                        className="p-3! fixed bottom-3 right-3 z-999 bg-white"
                    >
                        <img
                            key={`roll-${spinKey}`}
                            src={d20Icon}
                            alt="Roll d20 die"
                            className={`${(spinKey ?? 0) > 0 ? "animate-[spin_0.7s_ease-out]" : ""} size-8.5`}
                        />
                    </Button>
                </TabsList>

                <TabsContent value="characteristics" className="px-5">
                    <CharacterProfile
                        isOwner={isOwner}
                        characterData={character}
                        updateField={actions.updateField}
                    />
                </TabsContent>

                <TabsContent value="abilities" className="px-5">
                    <div className="flex flex-col gap-4 justify-center grow">
                        <div className="flex flex-row justify-between items-center">
                            <div className="pl-1 font-alegraya-sans lowercase font-semibold text-xl">
                                Abilities
                            </div>
                            <div className="mr-1">
                                {isOwner && (
                                    <Dialog modal={true}>
                                        <DialogTrigger asChild>
                                            <Button className="flex text-lg py-0! items-center cursor-pointer">
                                                <Pencil className="size-4 mr-2" />{" "}
                                                Edit
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent
                                            onWheel={(e) => e.stopPropagation()}
                                            onTouchMove={(e) =>
                                                e.stopPropagation()
                                            }
                                            className="w-fit max-w-[95vw]! max-h-[90vh] p-2 pt-10 max-sm:w-[95vw] overflow-y-auto sm:p-10 bg-white"
                                        >
                                            <AbilitySelector
                                                selectedAbilities={
                                                    character.abilities || []
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
                        <div className="max-sm:p-0 max-sm:bg-white max-sm:border-0 p-5 bg-gray-100 rounded-lg w-full border border-gray-300">
                            <div className="mt-23 flex-col grow-0">
                                {myAbilities.length === 0 && (
                                    <p className="text-gray-500 font-alegraya-sans text-center">
                                        No abilities yet.
                                    </p>
                                )}
                                {myAbilities.map((ability, index, array) => (
                                    <Card
                                        key={ability.id}
                                        ability={ability}
                                        editing={false}
                                        isOwner={isOwner}
                                        isSelected={true}
                                        onRoll={actions.rollD20}
                                        onClick={() =>
                                            actions.toggleAbility(ability.id)
                                        }
                                        isLast={index === array.length - 1}
                                        onDeductAP={actions.handleDeductAP}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="inventory" className="px-5">
                    <div className="flex flex-col gap-4 justify-center grow">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-col ">
                                <div className="pl-1 font-alegraya-sans lowercase font-semibold text-xl">
                                    Inventory
                                </div>
                                <div className="pl-1 -mt-2 font-alegraya-sans lowercase font-semibold opacity-50 text-xl">{`(${usedSlots}/12)`}</div>
                            </div>
                            <div className="mr-1">
                                {isOwner && (
                                    <Dialog modal={true}>
                                        <DialogTrigger asChild>
                                            <Button className="flex text-lg py-0! items-center cursor-pointer">
                                                <Pencil className="size-4 mr-2" />{" "}
                                                Edit
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent
                                            onWheel={(e) => e.stopPropagation()}
                                            onTouchMove={(e) =>
                                                e.stopPropagation()
                                            }
                                            className="w-fit max-w-[95vw]! max-h-[90vh] p-2 pt-10 max-sm:w-[95vw] overflow-y-auto sm:p-10 bg-white"
                                        >
                                            <ItemSelector
                                                selectedItems={
                                                    character.items || []
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
                        <div className="max-sm:p-0 max-sm:bg-white max-sm:border-0 p-5 bg-gray-100 rounded-lg w-full border border-gray-300">
                            <div className="mt-23 flex-col grow-0">
                                {myItems.length === 0 && (
                                    <p className="text-gray-500 font-alegraya-sans text-center">
                                        No items yet.
                                    </p>
                                )}
                                {myItems.map((item, index, array) => (
                                    <Card
                                        key={item.id}
                                        ability={item}
                                        editing={false}
                                        isOwner={isOwner}
                                        isSelected={true}
                                        onRoll={actions.rollD20}
                                        onClick={() =>
                                            actions.toggleItem(item.id)
                                        }
                                        isLast={index === array.length - 1}
                                        onDeductAP={actions.handleDeductAP}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent
                    value="notes"
                    className="px-5 flex gap-2 justify-between flex-col h-full"
                >
                    <NotesManager
                        isOwner={isOwner}
                        notes={notes}
                        onUpdateNotes={actions.handleUpdateNotes}
                    />
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
                </TabsContent>
            </Tabs>
        </div>
    );
}
