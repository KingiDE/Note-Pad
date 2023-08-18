import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { NoteInput, ShowNoteInput } from '@/app/page';
import Button from './ui/Button';
import Input from './ui/Input';
import Textarea from './ui/Textarea';

type Props = {
  noteInput: NoteInput, 
  setNoteInput: Dispatch<SetStateAction<NoteInput>>, 
  showNoteInput: ShowNoteInput, 
  setShowNoteInput: Dispatch<SetStateAction<ShowNoteInput>>, 
  createNote: () => void
}

export default function AddNoteForm({ noteInput, setNoteInput, showNoteInput, setShowNoteInput, createNote}: Props) {
  return(
    <div className={`w-[min(100%_-_16px,300px)] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-lg grid gap-4 outline outline-1 outline-neutral-400 dark:outline-neutral-800 p-4 bg-neutral-50 dark:bg-neutral-950 ${showNoteInput}`}>
      <Input text='Title' value={noteInput.title} placeholder='max. 30 characters' 
        changeFunction={(e: ChangeEvent<HTMLInputElement>) => {
          if(e.target.value.length <= 30) 
            setNoteInput({...noteInput, title: e.target.value});
        }}
      /> 
      <Textarea text='Description' value={noteInput.description} placeholder='max. 150 characters' 
        changeFunction={(e: ChangeEvent<HTMLInputElement>) => {
          if(e.target.value.length <= 150)
            setNoteInput({...noteInput, description: e.target.value});
        }}
      />
      <div className='grid grid-flow-col gap-2 grid-cols-[1fr,1fr] text-sm mt-2'>
        <Button text='Cancel' highlighted={false} clickFunction={() => setShowNoteInput('hidden')}/>
        <Button text='Create' highlighted={true} clickFunction={createNote}/>
      </div>
    </div> 
  );
}