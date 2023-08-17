import { Main } from "./AppStyled"
import DocViewer from "./patterns/DocViewer"
import MenuSection from "./patterns/MenuSection"

function App() {
  return (
    <Main>
      <MenuSection />
      <DocViewer />
    </Main>
  )
}

export default App
