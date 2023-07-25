import { HtmlHTMLAttributes } from "react"

interface CodeEditorRootProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CodeEditorRoot({ children }: CodeEditorRootProps) {
  return <div className="h-80 px-16 rounded-md w-full">
    <div className="h-12 bg-slate-950 flex px-4 items-center rounded-t-lg">
      <img src="buttons.svg" alt="Close" style={{ width: "52px", height: "12px"}}/>
    </div>
    {children}
  </div>
}