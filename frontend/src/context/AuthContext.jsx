import {createContext, useState, useEffect} from 'react'
import {getProfile} from '../services/authService.js'
export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    console.log('AuthProvider rendered. Current user:', user, 'Loading state:', loading)
    useEffect(()=>{
        const checkAuth = async ()=>{
            try{
                const profileData = await getProfile()
                setUser(profileData)
            }catch(error){
                console.error('Error fetching profile:', error)
            }finally{
                setLoading(false)
            }
        }
        checkAuth()
    },[])
    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}