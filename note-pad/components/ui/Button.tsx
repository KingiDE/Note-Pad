'use client';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
export default function Button({text, clickFunction, highlighted, extraCSS}: {text: string, clickFunction: (...args: any) => void, highlighted: boolean, extraCSS?: string}) {

  const style = highlighted ? 'text-neutral-50 dark:text-neutral-950 bg-neutral-950 dark:bg-neutral-50' : 
    'text-neutral-950 dark:text-neutral-50 bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-400 dark:hover:bg-neutral-800 transition-colors';
  
  return (
    <button
      onClick={clickFunction}
      name={text}
      className={`font-medium px-4 py-2 rounded focus-visible:outline focus-visible:outline-1 focus-visible:outline-neutral-400 ${style} ${extraCSS}`}
    >
      {text}
    </button>
  );
}

