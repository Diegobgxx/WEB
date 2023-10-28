import Componente01 from "./Componentes/Componente01";
import Componente02 from "./Componentes/Componente02";
import Componente03 from "./Componentes/Componente03";
import EcoSistema from "../Componentes/EcoSistema";

function App (){
  const linguagem="JAVASCRIPTs";

  const EcoSistema = 'EcoSistema TIPOS';
  const EcoSistemaArray = ['CERRADO','PANTANAL',"MANGUEZAL"];

  function clicouBotao(){
    alert("alerta da tela app")
  }
  return (
    <>
      <h1>Qual o seu tipo de EcoSistema </h1>
      <hr/>
      <Componente01   />
      <hr/>
      <Componente02 />
      <hr/>
      <Componente03 linguagemEcoSistemas={linguagem} clicouEcoSistema={clicouBotao} />
      <hr/>
      <EcoSistema EcoSistemaValortipo={EcoSistemaArray} />
      <hr/>
    </>
  )

}

export default App;