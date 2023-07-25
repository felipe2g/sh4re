"use client"

import Editor from "@monaco-editor/react"
import { useRef } from "react"
import { Skeleton } from "@mantine/core"
import { useGlobalContext } from "@/context/store"

export function CodeInput() {
  const editorRef = useRef<any>(null);
  const { isDataLoading, setIsDataLoading } = useGlobalContext();

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor
    setIsDataLoading(false)
  }

  function getEditorValue() {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    }
  }

  return (
    <>
      {!isDataLoading &&
        <div className="h-12 bg-slate-950 flex px-4 items-center rounded-t-lg">
          <img src="buttons.svg" alt="Close" style={{ width: "52px", height: "12px" }} />
        </div>
      }
      <Editor
        language="javascript"
        onMount={handleEditorDidMount}
        theme="light"
        width="100%"
        height="100%"
        options={{
          minimap: {
            enabled: false
          },
          lineNumbers: "on",
        }}
        loading={<Skeleton height={300}  mb="xl" />}
      />
    </>
  )
}