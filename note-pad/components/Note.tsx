type Props = {
    title: string,
    description: string,
    // checked: boolean,
    created: string,
    // eslint-disable-next-line no-unused-vars
    deleteNote: (id: string) => void 
};

export default function Note({title, description, created, deleteNote} : Props) {
  return(
    <div className='relative grid gap-1 rounded outline outline-1 outline-neutral-400 dark:outline-neutral-800 p-4 text-sm text-neutral-950 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-950 max-w-full'>
      <p className='font-medium leading-none'>{title}</p>
      <p className='text-neutral-400'>{description}</p>
      <p className='text-right text-neutral-400'>{created}</p>
      <button onClick={() => deleteNote(created)} className='p-1 absolute rounded top-2 right-2 outline outline-1 outline-neutral-400 dark:outline-neutral-800 text-neutral-950 dark:text-neutral-50'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"/></svg>
      </button> 
    </div>
  );
}