export type ProfileProp={
    name:string
}

export const Profile = ({name}:ProfileProp) => {
  return (
    <div>private Profile component .Name is {name}</div>
  )
}
