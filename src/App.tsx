import { useState } from 'react'
import './App.css'

function App() {
  
  // Inputs definidos
  const [inputNome, setInputNome] = useState<string>("")
  const [inputAnoNascimento, setAnoNascimento] = useState<number>(0);
  const [idadeAtual, setIdadeAtual] = useState<number>(0)
  const [infoMudou, setInfoMudou] = useState<boolean>(false)

  // Funcção que calcula a idade com base nos states.
  function handleAge(){
    if(inputNome === ''){
      alert('Preencha com os dados para saber primeiro!')
      return;
    }
    if(inputAnoNascimento === 0){
      alert('Preencha com os dados para saber primeiro!')
      return;
    }
    const anoAtual = 2024
    const calc: number = anoAtual - inputAnoNascimento;
    changeInfo()
    setIdadeAtual(calc)
    return calc
  }

  // Função que altera a condição para fazer a estrutura do parágrafo.
  function changeInfo(){
    setInfoMudou(true)
  }

  return (
    <>
      <div className="container">
        <h2 className='title'>Descubra sua idade</h2>
        <section className='section-info'>
          <form className='form'>
            <label className='label-name'>Qual é o seu nome?</label>
            <input type="text"  placeholder='Nome' className='input-name' onChange={(e)=> setInputNome(e.target.value)}/>

            <label className='label-nasc'>Qual é o seu ano de nascimento?</label>
            <input type="text"  placeholder='Nascimento' className='input-nasc' onChange={(e)=> setAnoNascimento(Number(e.target.value))}/>

            <button type='button' onClick={()=> handleAge()} className='button-age'>Descobrir idade</button>
          </form>

          {infoMudou && <p className='frase-final'>Olá {inputNome}, você tem {idadeAtual} anos!</p>}
        </section>        
      </div>
    </>
  )
}

export default App
