import Button from "@material-ui/core/Button"

interface props {
  HandleNext: Function,
  HandleBack: Function
}
export const ThirdStep = (props:props) => {
  return (
     <div>
      <h1>Third</h1>
      <Button onClick={() => props.HandleBack()}> Back </Button>
      <Button onClick={() => props.HandleNext()}> Next </Button>
    </div>
  )
}
