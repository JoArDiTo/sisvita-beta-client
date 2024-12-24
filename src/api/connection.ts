import { SERVER_URL } from 'astro:env/server'
import { test, detail_test } from '@mocks/localTest.json'

const ROUTE = `${SERVER_URL}/api/template_test/`

export async function getAllTests(){
  return fetch(ROUTE)
    .then((res) => res.json())
    .catch(() => test)
}

export async function getTestBy(id: string){
  return fetch(`${ROUTE}${id}`)
    .then((res) => res.json())
    .catch(() => detail_test )
} 
