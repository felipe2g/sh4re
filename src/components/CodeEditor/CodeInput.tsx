"use client"
import Editor, { EditorProps } from "@monaco-editor/react"
import { useRef } from "react"

export function CodeInput() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor
  }

  function getEditorValue() {
    alert(editorRef.current.getValue())
  }

  return (
    <Editor
      language="javascript"
      onMount={handleEditorDidMount}
      theme="vs-dark"
      width="100%"
      height="100%"
      options={{
        theme: "light",
        minimap: {
          enabled: false
        },
        lineNumbers: "on",
      }}
    />
  )
}