import { useContext } from 'react'; 
import { HtmlHTMLAttributes } from "react"
import { twMerge } from 'tailwind-merge';

interface CodeEditorRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CodeEditorRoot({ children, className }: CodeEditorRootProps) {
  return <div className={twMerge("rounded-md w-full", className)}>
    {children}
  </div>
}