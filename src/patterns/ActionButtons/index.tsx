import { ActionButton } from "../../components";

const ActionButtons = () => {
  const zoomIn = () => console.log('zoomIn')

  const zoomOut = () => console.log('zoomOut')

  const rotate = () => console.log('rotate')

  return (
    <div className="temp-class-container">
      <ActionButton handleClick={zoomIn}></ActionButton>
      <ActionButton handleClick={zoomOut}></ActionButton>
      <ActionButton handleClick={rotate}></ActionButton>
    </div>
  )
}

export default ActionButtons;