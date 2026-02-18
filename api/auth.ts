import { useQuery } from '@tanstack/react-query'
import { config } from '../services/constants'

export const loginEmail = async (email: string, password: string) => {
    const { data, isPending, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch(`${config.baseUrl}/api/user/loginEmail`).then(r => {
        console.log ("response: ", r); 
        return r.json()}),
  })
}