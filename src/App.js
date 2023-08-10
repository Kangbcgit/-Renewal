import './App.css';
import { GlobalStyle } from './Component/Common/Common';
import SectionAudition from './Component/SectionAudition/SectionAudition';
import SectionPlay from './Component/SectionPlay/SectionPlay';


function App() {
  return (
    <>
      <GlobalStyle/>
      <SectionPlay/>
      <SectionAudition />
    </>
  );
}

export default App;
