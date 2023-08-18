'use client';

import AddNoteForm from '@/components/AddNoteForm';
import Note from '@/components/Note';
import Button from '@/components/ui/Button';
import { useState, useEffect } from 'react';
import getDate from '@/lib/date';
import LightDarkModeSwitch from '@/components/ui/LightDarkModeSwitch';

type Note = {
  id: string,
  title: string,
  description: string,
  // checked: boolean,
  created: string,
};

export type NoteInput = {
  title: string,
  description: string,
};

export type ShowNoteInput = 'block' | 'hidden';

export default function Home() {

  const [notes, setNotes] = useState<Note[]>([]);
  const [noteInput, setNoteInput] = useState<NoteInput>({title: '', description: ''});
  const [showNoteInput, setShowNoteInput] = useState<ShowNoteInput>('hidden');

  useEffect(() => {
    const data = localStorage.getItem('notes');
    if(data !== null) {
      setNotes(JSON.parse(data));
    }    
  }, []);

  const createNote = (): void => {
    if(noteInput.title === '' || noteInput.description === '') return;

    const note: Note = {
      id: getDate(),
      title: noteInput.title,
      description: noteInput.description,
      created: getDate(),
    };

    setNotes([...notes, note]);
    localStorage.setItem('notes', JSON.stringify([...notes, note]));

    setNoteInput({title: '', description: ''});
    setShowNoteInput('hidden');
  };

  const deleteNote = (id: string): void => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes([...updatedNotes]);
    localStorage.setItem('notes', JSON.stringify([...updatedNotes]));
  };

  return (
    <main className='p-2 grid gap-1 bg-neutral-50 dark:bg-neutral-950 font-inter text-sm max-w-[400px] mx-auto'>
      <div className="grid gap-2">
        {
          notes.map(note => {
            return (
              <Note key={note.created} title={note.title} description={note.description} created={note.created} deleteNote={deleteNote}/>
            );
          })
        }
      </div>  
      <AddNoteForm noteInput={noteInput} setNoteInput={setNoteInput} showNoteInput={showNoteInput} 
        setShowNoteInput={setShowNoteInput} createNote={createNote}
      />
      <div className='fixed bottom-2 left-2 right-2 grid gap-2 max-w-[400px] mx-auto'>
        <LightDarkModeSwitch extraCSS='justify-self-end'/>
        <Button text='Add Note' highlighted={true} clickFunction={() => setShowNoteInput('block')}/>
      </div>
    </main>
  );
}

