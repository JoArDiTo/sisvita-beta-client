import type { Alternative, Question, AwnserResponse } from "@api/types";
import { useForm } from "@hooks/useForm";

interface FormContentProps {
  questions: Question[];
  alternatives: Alternative[];
  handleFormSubmit: (formState: AwnserResponse) => void;
}


export const FormContent: React.FC<FormContentProps> = ({ questions, alternatives, handleFormSubmit }) => {
  const initialForm: AwnserResponse = {};
  const { formState, onInputChange } = useForm(initialForm);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (questions.length === Object.keys(formState).length) {
      handleFormSubmit(formState);
    }
  }

  return (
    <>
      <form
        className='bg-gray-200 shadow-lg border rounded-lg px-4 py-2 w-full' 
        onSubmit={handleSubmit}
      > 
        <h3 className='font-medium pt-2 pb-4 text-xl'>Responde cada pregunta (Opción única)</h3>
        {
          questions.map(({ id: questionId, content }) => (
            <div key={questionId} className='p-4 bg-white mb-4 rounded-lg shadow-sm'>
              <p className='text-lg mb-3'>{content}</p>
              {
                alternatives.map(({ id: alternativeId, content: alternativeContent, value }) => (
                  <div key={alternativeId} className='flex items-center mb-4'>
                    <input 
                      type='radio'
                      id={ `${questionId}-${alternativeId}` } 
                      name={questionId} 
                      value={value} 
                      className='mr-2 peer hidden'
                      onChange={onInputChange}
                    />
                    <label
                      htmlFor={ `${questionId}-${alternativeId}` } 
                      className='w-full py-3 px-6 rounded-lg outline outline-2 outline-gray-200 transition cursor-pointer peer-checked:bg-blue-500 peer-checked:text-white peer-checked:outline-4'
                    >
                      {alternativeContent}
                    </label>
                  </div>
                ))
              }
            </div>
          ))
        }
        <footer className='flex justify-end gap-x-3 items-center'>
          <span>{ Object.keys(formState).length } de { questions.length }</span>
          <button 
            className={`cursor-pointer py-2 px-4 rounded-lg text-sm lg:text-lg text-white bg-sky-500 hover:bg-sky-600 transition ${ Object.keys(formState).length !== questions.length ? 'opacity-50 cursor-not-allowed' : '' }`}
          >
            Enviar Respuestas
          </button>
        </footer>
      </form>
    </>
  )
}
