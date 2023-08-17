import { Doc } from "../../components";
import ActionButtons from "../ActionButtons";
import { Container } from "./styled";

const DocViewer = () => {
  return (
    <Container>
      <ActionButtons />
      <Doc />
    </Container>
  )
}

export default DocViewer;