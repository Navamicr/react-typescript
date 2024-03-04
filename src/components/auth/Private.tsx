import { Login } from "./Login"
import { ProfileProp } from "./Profile"
type PrivateProps={
    isLoggedIn:boolean
    Component:React.ComponentType<ProfileProp>
}

export const Private = ({isLoggedIn,Component}:PrivateProps) => {

    if(isLoggedIn){
        return <Component name='tobby'/>
    }
    else{
        return <Login/>
    }
    
}
