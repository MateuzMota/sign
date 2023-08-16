type ActionButtonProps = {
  icon?: string;
  handleClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ handleClick }) => {
  return (
    <div className="temp-class-container" onClick={handleClick}>
      <div className="temp-class-icon"></div>
    </div>
  )
}

export default ActionButton;