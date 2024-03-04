//!type of react component is ReactNode

type OscarProps={
    children:React.ReactNode
}

export const Oscar = (props:OscarProps) => {
  return (
    <div>
        <h2>{props.children}</h2>
        <hr />
    </div>
  )
}
