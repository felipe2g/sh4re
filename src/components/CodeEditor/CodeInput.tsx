"use client"
import Editor from "@monaco-editor/react"
import { useRef } from "react"

export function CodeInput() {
  const editorRef = useRef<any>(null);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor
  }

  function getEditorValue() {
    if (editorRef.current) {
      alert(editorRef.current.getValue());
    }
  }

  return (
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
    />
  )
}