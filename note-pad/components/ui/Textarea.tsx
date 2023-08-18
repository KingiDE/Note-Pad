'use client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
export default function Textarea({text, value, placeholder, changeFunction}: {text: string, value: string, placeholder: string, changeFunction: (...args: any) => void}) {
  return(
    <div className='grid gap-2 text-sm'>
      <label className='text-neutral-950 dark:text-neutral-50 font-semibold leading-none'>{text}</label>
      <textarea onChange={changeFunction} 
        value={value}
        placeholder={placeholder}
        className='px-3 py-2 min-h-[60px] rounded text-neutral-950 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-950 outline-neutral-400 dark:outline-neutral-800 outline outline-1 focus-visible:outline-neutral-950 dark:focus-visible:outline-neutral-50 placeholder-neutral-800 dark:placeholder-neutral-400'
      />
    </div>
  );
}