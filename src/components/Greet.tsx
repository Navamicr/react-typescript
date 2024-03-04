type GreetProps={
    name:string,
    messageCount?:number,
    isLoggedIn:boolean
}

export const Greet = (props:GreetProps) => {
    // const {messageCount=0}=props
  return (
    <div>
        <h2>
        {
            props.isLoggedIn?`Welcome To Typescript ${props.name} you have ${props.messageCount} messages`:`Welcome Guest`
        }
        </h2>
        <hr />
        
    </div>
  )
}
