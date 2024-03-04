// import React from "react"

// type InputProps={
//     handleChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
//     value:string
// }

// export const Input = (props:InputProps) => {
//   return (
//     <div>
//         <input type="text" value={props.value} onChange={props.handleChange}/>
//     </div>
//   )
// }

//!Or

import React from "react"

type InputProps={
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=> void
    value:string
}

export const Input = ({value,handleChange}:InputProps) => {
  return (
    <div>
        <input type="text" value={value} onChange={handleChange}/>
    </div>
  )
}
