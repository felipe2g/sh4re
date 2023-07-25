"use client"

import { CodeEditor } from "@/components/CodeEditor"
import { IconAlphabetLatin, IconUser, IconChevronDown, IconClockHour4, IconBinary } from "@tabler/icons-react"
import { Input, Autocomplete, Select } from "@mantine/core"

export default function App() {
  return <div className="">
    <div className="flex justify-between md:px-16 md:p-8 flex-col md:flex-row gap-y-3 my-8 p-6">
        
        <Input placeholder="Title" icon={<IconAlphabetLatin size="1rem" />} />
        
        <Input placeholder="Author" icon={<IconUser size="1rem" />} />

        <Autocomplete
          placeholder="Language"
          data={ ['React', 'Angular', 'Javascript', 'Swift', 'Vue', 'C#', 'Java', 'Python'] }
          icon={ <IconBinary size="1rem" /> }
          rightSection={ <IconChevronDown size="1rem" /> }
        />

        <Select 
          placeholder="Delete when" 
          icon={<IconClockHour4 size="1rem" />}
          data={[
            { value: '1h', label: '1 hour' },
            { value: '3h', label: '3 hour' },
            { value: '1d', label: '1 day' },
            { value: '3d', label: '3 day' },
          ]}
        />
    </div>
    <div className="flex w-full">
      <CodeEditor.Root>
        <CodeEditor.Field />
      </CodeEditor.Root>
    </div>
  </div>
}
