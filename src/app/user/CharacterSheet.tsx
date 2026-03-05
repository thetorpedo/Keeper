import d20Icon from '@/assets/d20.png';
import placeholderPfp from '@/assets/placeholderPfp.png';
import AbilitySelector from "@/components/sheet/AbilitySelector.tsx";
import ItemSelector from "@/components/sheet/ItemSelector.tsx";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog.tsx";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { bookAbilities } from "@/data/abilities/wizard.ts";
import { bookItems } from "@/data/items/items.ts";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { CircleArrowLeft, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { BsFillBackpack2Fill, BsFillFileTextFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { RiShareFill, RiSparkling2Fill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import CharacterProfile from "../../components/sheet/CharacterProfile.tsx";
import Stat from "../../components/sheet/Stat.tsx";
import Card from "../../components/sheet/utils/Card.tsx";
import Footer from "../../components/ui/footer.tsx";
import Navbar from "../../components/ui/navbar.tsx";
import Button from "../../components/ui/questbutton.tsx";
import { db } from "../firebase/firebase.ts";

function CharacterSheet() {
  const { id } = useParams();

  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "characters", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCharacter(docSnap.data());
        } else {
          console.log("Ficha não encontrada!");
        }
      } catch (error) {
        console.error("Erro ao buscar personagem:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center font-alegraya text-2xl">
        Carregando ficha...
      </div>
    );
  }

  if (!character) {
    return (
      <div className="h-screen flex items-center justify-center font-alegraya text-2xl text-red-500">
        Personagem não encontrado.
      </div>
    );
  }

  const myAbilities = bookAbilities.filter((ability) =>
    character.abilities?.includes(ability.id),
  );
  const myItems = bookItems.filter((item) =>
    character.items?.includes(item.id),
  );
  const usedSlots = myItems.reduce(
    (total, item) => total + (item.slots || 1),
    0,
  );

  const removeAbility = async (abilityId: string) => {
    if (!character || !id) return;
    const updatedAbilities = character.abilities.filter(
      (a: string) => a !== abilityId,
    );
    setCharacter({ ...character, abilities: updatedAbilities });
    await updateDoc(doc(db, "characters", id), { abilities: updatedAbilities });
  };

  const removeItem = async (itemId: string) => {
    if (!character || !id) return;
    const updatedItems = character.items.filter((i: string) => i !== itemId);
    setCharacter({ ...character, items: updatedItems });
    await updateDoc(doc(db, "characters", id), { items: updatedItems });
  };

  const toggleAbility = async (abilityId: string) => {
    if (!character || !id) return;
    const currentAbilities = character.abilities || [];
    const updatedAbilities = currentAbilities.includes(abilityId)
      ? currentAbilities.filter((a: string) => a !== abilityId)
      : [...currentAbilities, abilityId];

    setCharacter({ ...character, abilities: updatedAbilities });
    await updateDoc(doc(db, "characters", id), { abilities: updatedAbilities });
  };

  const toggleItem = async (itemId: string) => {
    if (!character || !id) return;
    const currentItems = character.items || [];
    const updatedItems = currentItems.includes(itemId)
      ? currentItems.filter((i: string) => i !== itemId)
      : [...currentItems, itemId];

    setCharacter({ ...character, items: updatedItems });
    await updateDoc(doc(db, "characters", id), { items: updatedItems });
  };

  return (
    <div className="flex max-sm:justify-start flex-col justify-between items-center bg-white h-full">
      <Navbar />

      {/* Desktop */}
      <div className="hidden md:block">
        <Button className="p-4! fixed bottom-10 right-10 z-999 bg-white">
          <img src={d20Icon} className="w-12 h-12 rounded-full" />
        </Button>
        <div className="my-10 max-w-280 w-full flex flex-col gap-3 items-center">
          <a href="/" className="text-gray-400 flex flex-row gap-2 w-full">
            <CircleArrowLeft />
            <span className="uppercase text-xl font-medium font-alegraya-sans">
              Back
            </span>
          </a>
          <div className="flex flex-row w-full justify-between items-center align-middle pb-5 border-b ">
            <div className="flex flex-col">
              <h1 className="font-alegraya font-bold text-5xl">{character.name}</h1>
              <h2 className="font-alegraya-sans text-gray-500 uppercase font-medium text-xl">
                The {character.role}
              </h2>
            </div>
            <div>
              <Button className="font-medium py-3 mr-1">
                <RiShareFill className="inline-block mr-3" />
                <span>Share</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-10 w-full gap-2">
            <div className="col-span-3 flex flex-col w-full gap-2">
              {/* Stats */}
              <section className="border border-gray-400 rounded-lg p-4 flex flex-col gap-2">
                <div className="w-full flex aspect-square justify-center items-center  border mb-3 rounded-lg overflow-hidden">
                  <img
                    src={placeholderPfp}
                    className="object-contain"
                  />
                </div>
                <Stat id="1" name="HP" value={10} />
                <Stat id="2" name="AP" value={10} />
              </section>
              {/* Notes */}
              <section className="border grow border-gray-400 rounded-lg p-4">
                <div className="mb-3 flex w-full justify-center font-alegraya-sans lowercase  text-xl text-center">
                  Notes
                </div>
                <textarea className="w-full  h-90 border rounded-lg"></textarea>
              </section>
            </div>
            <div className="col-span-7 flex flex-col w-full gap-2">
              {/* Characteristics */}
              <section className="border border-gray-400 rounded-lg p-4">
                <CharacterProfile
                  characterData={character}
                  updateField={() => {}}
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex text-lg py-0.5! items-center cursor-pointer">
                            <Plus className="size-4 mr-2" /> Add Ability
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit max-w-[90vw]! max-h-[90vh] overflow-y-auto p-10 bg-white">
                          <div className="font-alegraya font-extrabold text-4xl mb-4 text-center">
                            Add new ability
                          </div>
                          <AbilitySelector
                            selectedAbilities={character.abilities || []}
                            onToggleAbility={toggleAbility}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-full items-center">
                    <div className="pl-1 relative font-alegraya-sans lowercase font-semibold text-2xl">
                      Inventory
                      <div className="absolute top-6 font-alegraya-sans opacity-40 lowercase text-lg">{`(${usedSlots}/12)`}</div>
                    </div>

                    <div className="mr-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex text-lg py-0.5! items-center cursor-pointer">
                            <Plus className="size-4 mr-2" /> Add Item
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit max-w-[90vw]! max-h-[90vh] overflow-y-auto p-10 bg-white">
                          <div className="font-alegraya font-extrabold text-4xl mb-4 text-center">
                            Add new item
                          </div>
                          <ItemSelector
                            selectedItems={character.items || []}
                            onToggleItem={toggleItem}
                          />
                        </DialogContent>
                      </Dialog>
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
                        {myAbilities.map((ability, index, array) => (
                          <Card
                            key={ability.id}
                            ability={ability}
                            addShortcut={false}
                            isSelected={true}
                            onClick={() => removeAbility(ability.id)}
                            isLast={index === array.length - 1}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 justify-start h-full w-1/2">
                    <div className="p-5 bg-gray-100 rounded-lg w-full h-full border min-h-125 border-gray-300 ">
                      <div className="mt-23 flex-col grow-0">
                        {/* Renderização Dinâmica dos Itens */}
                        {myItems.length === 0 && (
                          <p className="text-gray-500 font-alegraya-sans text-center">
                            No items yet.
                          </p>
                        )}
                        {myItems.map((item, index, array) => (
                          <Card
                            key={item.id}
                            ability={item}
                            addShortcut={false}
                            isSelected={true}
                            onClick={() => removeItem(item.id)}
                            isLast={index === array.length - 1}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <button className="font-alegraya-sans lowercase text-left w-full ml-1 cursor-pointer hover:underline transition-all hover:text-red-400 font-medium text-xl text-red-500 ">
            Delete this character
          </button>
        </div>
      </div>
      <span className="max-sm:hidden w-full">
        <Footer />
      </span>

      {/* Mobile */}
      <div className="block md:hidden pb-20">
        <div className="flex flex-row w-full px-5 justify-between items-center align-middle pb-5 ">
          <div className="flex flex-col gap-2 pb-5 border-b">
            <div className="flex flex-row w-full gap-4 justify-between items-center">
              <div className="flex flex-col h-full items-between gap-2">
                <a
                  href="/"
                  className="text-gray-400 flex flex-row gap-2 w-full"
                >
                  <CircleArrowLeft />
                  <span className="uppercase text-lg font-medium font-alegraya-sans">
                    Back
                  </span>
                </a>
                <div>
                  <h1 className="font-alegraya font-bold text-3xl">{character.name}</h1>
                  <h2 className="font-alegraya-sans -mt-2 text-gray-500 uppercase font-medium">
                    The {character.role}
                  </h2>
                </div>
                <Button className="font-medium mr-1 px-0! flex items-center justify-center">
                  <RiShareFill className="inline-block mr-2 size-3" />
                  <span className="text-sm">Share</span>
                </Button>
              </div>

              <div className=" w-1/2 h-full flex justify-center items-center border rounded-lg overflow-hidden">
                <img
                  src={placeholderPfp}
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <Stat id="1" name="HP" value={10} />
              <Stat id="2" name="AP" value={10} />
            </div>
          </div>
        </div>
        <Tabs defaultValue="characteristics">
          <TabsList className="fixed w-full bottom-0 left-0 z-99">
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
            <Button className="p-3! fixed bottom-3 right-3 z-999 bg-white">
              <img src={d20Icon} className="size-8.5" />
            </Button>
          </TabsList>
          <TabsContent value="characteristics" className="px-5">
            <CharacterProfile
              characterData={character}
              updateField={() => {}}
            />{" "}
          </TabsContent>
          <TabsContent value="abilities" className="px-5">
            <div className="flex flex-col gap-4 justify-center grow">
              <div className="flex flex-row justify-between items-center">
                <div className="pl-1 font-alegraya-sans lowercase font-semibold text-xl">
                  Abilities
                </div>
                <div className="mr-1">
                  <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex text-lg py-0! items-center cursor-pointer">
                            <Plus className="size-4 mr-2" /> Add New
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit max-w-[95vw]! max-h-[85vh] p-2 pt-8 max-sm:w-[95vw] -mt-8 overflow-y-auto sm:p-10 bg-white">
                          <div className="font-alegraya font-extrabold text-4xl mb-2 text-center">
                            Add new ability
                          </div>
                          <AbilitySelector
                            selectedAbilities={character.abilities || []}
                            onToggleAbility={toggleAbility}
                          />
                        </DialogContent>
                      </Dialog>
                </div>
              </div>

              <div className="max-sm:p-0 max-sm:bg-white max-sm:border-0 p-5 bg-gray-100 rounded-lg w-fit border border-gray-300">
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
                      addShortcut={false}
                      isSelected={false}
                      onClick={() => {}}
                      isLast={index === array.length - 1}
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
                  <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex text-lg py-0! items-center cursor-pointer">
                            <Plus className="size-4 mr-2" /> Add New
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-fit max-w-[95vw]! max-h-[85vh] p-2 pt-8 max-sm:w-[95vw] -mt-8 overflow-y-auto sm:p-10 bg-white">
                          <div className="font-alegraya font-extrabold text-4xl mb-2 text-center">
                            Add new item
                          </div>
                          <ItemSelector
                            selectedItems={character.items || []}
                            onToggleItem={toggleItem}
                          />
                        </DialogContent>
                      </Dialog>
                </div>
              </div>

              <div className="max-sm:p-0 max-sm:bg-white max-sm:border-0 p-5 bg-gray-100 rounded-lg w-fit border border-gray-300">
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
                      addShortcut={false}
                      isSelected={false}
                      onClick={() => {}}
                      isLast={index === array.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notes" className="px-5">
            <div className="mb-3 flex w-full justify-center font-alegraya-sans lowercase  text-xl text-center">
              Notes
            </div>
            <textarea className="w-full  h-90 border rounded-lg"></textarea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CharacterSheet;
