"use client"

import { useGlobalContext } from "@/context/store"
import { CodeEditor } from "@/components/CodeEditor"
import { Input } from "@/components";
import { ReactNode } from "react";
import { Skeleton } from "@mantine/core";

export default function App() {
  const { isDataLoading, setIsDataLoading } = useGlobalContext();

  return <div className="p-4 flex flex-col-reverse">
    <div>
      <CodeEditor.Root className="h-auto">
        <CodeEditor.Field />
      </CodeEditor.Root>
    </div>
    <div className="flex flex-col gap-y-2 my-4  ">
      {
        !isDataLoading ? <Input.Root placeholder="Title" /> :
          <Skeleton height={40} />
      }

      {
        !isDataLoading ? <Input.Root placeholder="Author" /> :
          <Skeleton height={40} />
      }

      {
        !isDataLoading ? <Input.Root placeholder="Expires In" /> :
          <Skeleton height={40} />
      }

      {
        !isDataLoading ? <Input.Root placeholder="Encrypt Code" /> :
          <Skeleton height={40} />
      }

    </div>
  </div>
}
