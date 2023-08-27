import { useRef } from 'react';

interface InputProps {
  label: string;
  name: string;
  onInput: (str: string) => void
}

export function Input({label, name, onInput}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      {label && <label className="block">{label}</label>}
      <input ref={inputRef} name={name}
             onInput={() => onInput(inputRef.current?.value ?? '')}
             className="border-2 rounded" type="text">
      </input>
    </>
  )
}
