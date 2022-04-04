import React, { useMemo, useState } from "react";
import './App.css';
import piedra from '../images/piedra.jpg';
import papel from '../images/papel.jpg';
import Tijeras from '../images/Tijeras.png';
const eleccion = ["Piedra", "Papel", "Tijeras"];export default function App() 
{
  const [Seleccion, setSeleccion] = useState("");
  const [CompuSeleccion, SelecComputadora] = useState("");  const play = () => 
  {
    if (!Seleccion) {
      return;
    }
    const RandomComputadora = Math.floor(Math.random() * eleccion.length);
    SelecComputadora(eleccion[RandomComputadora]);
  };  const result = useMemo(() => {
    if (CompuSeleccion === Seleccion) 
    {
      return `has Empatado con la Computadora,intentalo de Nuevo.`;
    } else 
    {
      if (
        (CompuSeleccion === "Piedra" && Seleccion === "Tijeras")
        ||
        (CompuSeleccion === "Papel" && Seleccion === "Piedra") 
        ||
        (CompuSeleccion === "Tijeras" && Seleccion === "Papel")
      ) 
      {
        return "Gano la Computadora";
      }
      return "Gano el jugador";
    }
  }, 
  [CompuSeleccion, Seleccion]);  
  return (
    <div>
      <div>
        <button 
          onClick={() => setSeleccion("Piedra")}
        >
          <img src={piedra} ></img>
          </button>
        <button 
          onClick={() => setSeleccion("Papel")}
        >
          <img src={papel} ></img>
          </button>
        <button 
          onClick={() => setSeleccion("Tijeras")}
          >
            <img src={Tijeras} ></img>
          </button>
          
      </div>
      <button 
        onClick={play}
        >
          Jugar!!!
        </button>
      <p>
        Tu eleccion: {Seleccion}
        </p>
      <p>
        Eleccion de la PC: {CompuSeleccion}
        </p>
      <div>
        {result}
        </div>
    </div>
  );
}