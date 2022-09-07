import React from "react";
import Produto from "./Produto";




function App() {




  const [dados,setdados] = React.useState(null)
  const [carregando,setcarregando] = React.useState(null)

  async function HandleClick(e){
    setcarregando(true);
    const dado = e.target.innerText.toLowerCase();
    const dados = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${dado}`)
    const json = await dados.json();
    setcarregando(false);
    setdados(json)
    console.log(json)
    
  }


  return (
    <div >
      <button style={{marginRight: '10px'}} onClick={HandleClick}>Notebook</button>
      <button style={{marginRight: '10px'}} onClick={HandleClick}>SmartPhone</button>
      <button style={{marginRight: '10px'}} onClick={HandleClick}>Tablet</button>

      {carregando && <p>Carregando ...</p>}
      {!carregando && dados && <Produto {...dados}/>}

    </div>

  );
}

export default App;
