import { useContext } from 'react'; 
import { HtmlHTMLAttributes } from "react"

interface CodeEditorRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CodeEditorRoot({ children }: CodeEditorRootProps) {
  return <div className="h-80 px-16 rounded-md w-full">
    {children}
  </div>
}