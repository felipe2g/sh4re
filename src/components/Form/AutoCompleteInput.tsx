import { Autocomplete, AutocompleteProps } from "@mantine/core";

interface AutoCompleteInput extends React.ForwardRefExoticComponent<AutocompleteProps & React.RefAttributes<HTMLInputElement>>{}

export function AutoCompleteForm(props: AutoCompleteInput) {
  return (
    <Autocomplete {...props} />
  )
}