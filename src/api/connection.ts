import { SERVER_URL } from 'astro:env/server'
import { test, detail_test } from '@mocks/localTest.json'

const ROUTE = `${SERVER_URL}/api/template_test/`

export async function getAllTests(){
  try {
    const res = await fetch(ROUTE)
    return await res.json()
  } catch {
    return test
  }
}

export async function getTestBy(id: string){
  try {
    const res = await fetch(`${ROUTE}${id}`)
    return await res.json()
  } catch {
    return detail_test
  }
} 
