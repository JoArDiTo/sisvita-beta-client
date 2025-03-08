import type { Question, Alternative, AwnserResponse } from '@api/types.ts';
import { useState } from 'react';
import { FormContent } from '@components/FormContent.tsx';
import { ResultContent } from '@components/ResultContent.tsx';

interface FormProps {
  test_id: string;
  questions: Question[];
  alternatives: Alternative[];
  url: string;
}

export const FormReact: React.FC<FormProps> = ({ test_id, questions, alternatives, url }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resultTest, setResultTest] = useState('');

  async function calculateTest(test_id: string, sum: number){
    try {
      const res = await fetch(`${url}/api/template_test/${test_id}/calculate/${sum}`, { method: 'POST' })
      return await res.text()
    } catch (error) {
      return sum.toString()
    }
  }
  
  const handleFormSubmit = async (formState: AwnserResponse) => {
    setIsSubmitted(true);

    let sum = 0
    Object.keys(formState).forEach((key) => {
      sum+= parseInt(formState[key]);
    });
    
    const result = await calculateTest(test_id, sum);
    setResultTest(result);
  };

  return (
    !isSubmitted ? (
      <FormContent 
        questions={ questions }
        alternatives={ alternatives }
        handleFormSubmit={ handleFormSubmit }
      />
    ) : (
      <ResultContent resultTest={ resultTest } />
    ) 
  )
}

export default FormReact;
