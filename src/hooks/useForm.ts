import { useState } from 'react'

export const useForm = (initialForm: any) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  }

  return { formState, onInputChange };
}