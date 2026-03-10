import Button from "@/components/ui/questbutton.tsx"; // Seu botão customizado
import { ChevronLeft, Plus, Save, Trash2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog.tsx";

export interface Note {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
}

interface NotesManagerProps {
  notes: Note[];
  onUpdateNotes: (newNotes: Note[]) => void;
}

export default function NotesManager({ notes, onUpdateNotes }: NotesManagerProps) {
  const [view, setView] = useState<"list" | "editor">("list");
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  const handleCreateNew = () => {
    setCurrentNote({
      id: Date.now().toString(),
      title: "",
      content: "",
      updatedAt: Date.now(),
    });
    setView("editor");
  };

  const handleEdit = (note: Note) => {
    setCurrentNote(note);
    setView("editor");
  };

  const handleSave = () => {
    if (!currentNote) return;

    // Se não tiver título, coloca um padrão
    const noteToSave = {
      ...currentNote,
      title: currentNote.title.trim() === "" ? "Untitled Note" : currentNote.title,
      updatedAt: Date.now(),
    };

    const existingIndex = notes.findIndex((n) => n.id === noteToSave.id);
    let newNotes = [...notes];

    if (existingIndex >= 0) {
      newNotes[existingIndex] = noteToSave;
    } else {
      newNotes = [noteToSave, ...newNotes]; // Adiciona no topo
    }

    onUpdateNotes(newNotes);
    setView("list");
    setCurrentNote(null);
  };

  const handleDelete = (id: string) => {
      const newNotes = notes.filter((n) => n.id !== id);
      onUpdateNotes(newNotes);
      setView("list");
      setCurrentNote(null);
  };

  return (
    <div className="flex flex-col w-full h-90 sm:border grow sm:rounded-lg border-gray-400 bg-white  overflow-hidden">
      
      {/* TELA 1: LISTA DE NOTAS */}
      {view === "list" && (
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center sm:p-4 pt-5 border-gray-300">
            <span className="font-alegraya-sans font-bold lowercase text-2xl">Notes</span>
            <Button onClick={handleCreateNew} className="px-3 py-1 mr-1 flex items-center text-base">
              <Plus className="size-4 mr-1" /> New
            </Button>
          </div>

          <div className="flex flex-col h-full overflow-y-auto pt-4 sm:p-4 gap-2 ">
            {notes.length === 0 ? (
              <div className="text-center text-gray-400 font-alegraya-sans mt-10">
                No notes yet. <br/> Write something down!
              </div>
            ) : (
              notes.sort((a, b) => b.updatedAt - a.updatedAt).map((note) => (
                <div
                  key={note.id}
                  onClick={() => handleEdit(note)}
                  className="flex flex-col p-3 bg-white border border-gray-300  hover:border-black hover:shadow-btn cursor-pointer transition-all group"
                >
                  <span className="font-alegraya font-bold text-lg leading-tight truncate transition-colors">
                    {note.title}
                  </span>
                  <span className="font-ovo text-sm text-gray-500 truncate mt-1">
                    {note.content || "Empty..."}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TELA 2: EDITOR DA NOTA */}
      {view === "editor" && currentNote && (
        <div className="flex flex-col h-full sm:p-2 bg-white">
          {/* Header do Editor */}
          <div className="flex justify-between items-center pb-2 sm:p-2  border-gray-300 ">
            <Button onClick={() => setView("list")} className="p-1.5! shadow-none border hover:shadow-btn! cursor-pointer  transition-all text-gray-600">
              <ChevronLeft  className="size-6" />
            </Button>
            
            <div className="flex gap-2">
              {/* Só mostra botão de deletar se a nota já existir (tiver conteúdo salvo) */}
              {notes.some(n => n.id === currentNote.id) && (<>
                <Dialog>
                <DialogTrigger asChild>
                  <Button className="p-2! cursor-pointer shadow-none transition-all hover:shadow-btn! hover:bg-red-100 border  text-red-500">
                  <Trash2 className="size-5" />
                </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md z-999">
                  <DialogHeader>
                    <DialogTitle>Are you sure you want to delete this note?</DialogTitle>
                    <DialogDescription className='text-base pb-5'>
                      This action CANNOT be undone!
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-between">
                    <DialogClose asChild>
                      <Button 
                        className='bg-red-400  text-white'
                        onClick={() => handleDelete(currentNote.id)}
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
                </>
              )}
              <Button onClick={handleSave} className="px-3! py-1 p-2! flex items-center text-sm shadow-none bg-purple hover:shadow-btn! text-black border-black">
                <Save className="size-4 mr-2" /> Save
              </Button>
            </div>
          </div>
              <hr className="border-t border-gray-400 max-sm:pb-2 w-full sm:w-[95%] mx-auto"/>
          {/* Área de digitação */}
          <div className="flex flex-col h-full sm:p-3 gap-2 overflow-hidden">
            <input
              type="text"
              placeholder="Note Title..."
              value={currentNote.title}
              onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
              className="font-alegraya font-bold text-2xl w-full focus:outline-none border-b border-transparent focus:border-purple/30 pb-1"
            />
            <textarea
              placeholder="Write your notes here..."
              value={currentNote.content}
              onChange={(e) => setCurrentNote({ ...currentNote, content: e.target.value })}
              className="flex-1 w-full font-ovo text-base/snug resize-none focus:outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}