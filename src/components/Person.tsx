import { PersonProps } from "./Person.types"

export const Person = ({firstName,lastName}:PersonProps) => {
  return (
    <div>
        <h1>{firstName}{lastName}</h1>
        <hr />
    </div>
  )
}
