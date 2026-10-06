import {createContext, useState, useEffect} from 'react'
import {getProfile} from '../services/authService.js'

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // console.log('user--------->', user)
   
    useEffect(()=>{
        const checkAuth = async ()=>{
            try{
                const profileData = await getProfile()
                // console.log('----------profileData--------->', profileData.userDetails)   
                setUser(profileData.userDetails)
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
export default AuthContext