import { ActionButton } from "../../components";
import { Container } from "./styled";

const ActionButtons = () => {
  const zoomIn = () => console.log('zoomIn')

  const zoomOut = () => console.log('zoomOut')

  const rotate = () => console.log('rotate')

  return (
    <Container>
      <ActionButton handleClick={zoomIn}></ActionButton>+
      <ActionButton handleClick={zoomOut}></ActionButton>-
      <ActionButton handleClick={rotate}></ActionButton>o
    </Container>
  )
}

export default ActionButtons;