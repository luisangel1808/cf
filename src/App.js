import './App.css';

import React, {useState} from 'react';
import ancheta_mini1 from '../src/static/ancheta_mini1.png';
import ancheta_mini2 from '../src/static/ancheta_mini2.png';
import ancheta_mini3 from '../src/static/ancheta_mini3.png';
import ancheta_mini4 from '../src/static/ancheta_mini4.png';
import ancheta_mini5 from '../src/static/ancheta_mini5.png';
import ancheta_mini6 from '../src/static/ancheta_mini6.png';
import ancheta_expresion1 from '../src/static/ancheta_expresion1.png';
import ancheta_expresion2 from '../src/static/ancheta_expresion2.png';
import ancheta_ilusion1 from '../src/static/ancheta_ilusion1.png';
import ancheta_ilusion2 from '../src/static/ancheta_ilusion2.png';
import ancheta_encanto1 from '../src/static/ancheta_encanto1.png';
import ancheta_encanto2 from '../src/static/ancheta_encanto2.png';
import ancheta1 from '../src/static/ancheta_1.png';
import ancheta2 from '../src/static/ancheta_2.png';
import logo from '../src/static/logo.png';

function App() {

  const products =[
    {
      name:"ANCHETAS MINI",
      description: "Un pequeño detalle para personas con un gran corazón.",
      images:[
        ancheta_mini1,
        ancheta_mini2,
        ancheta_mini3,
        ancheta_mini4,
        ancheta_mini5,
        ancheta_mini6
      ],
      price_prefix:"Desde",
      price:10000
    },
    {
      name:"ANCHETAS ILUSIÓN",
      description: "La medida perfecta para querer mucho más...",
      images:[
        ancheta_ilusion1,
        ancheta_ilusion2
      ],
      price_prefix:"Desde",
      price:30000
    },
    {
      name:"ANCHETAS ENCANTO",
      description: "Además de su esplendor busca satisfacer a tus personas favoritas",
      images:[
        ancheta_encanto1,
        ancheta_encanto2,
      ],
      price_prefix:"Desde",
      price:40000
    },
    {
      name:"ANCHETAS EXPRESION",
      description: "Un detalle perfecto que te hace ver lo delicioso que es el dulce.",
      images:[
        ancheta_expresion1,
        ancheta_expresion2,
      ],
      price_prefix:"Desde",
      price:50000
    },
    {
      name:"ANCHETAS ESTILO",
      description: "Que mejor que disfrutar de lo emocionante que es la vida y su color", 
      //El diseño, motivo, material y dulces lo escoges tú...",
      images:[
        ancheta1,
        ancheta2
      ],
      price_prefix:"Desde",
      price:7000
    },
  ]

  const [imag, setImage] = useState([])

  const changeImage = (i, pos) =>{
    const newImag = imag;
    newImag[i]=pos
    setImage([...newImag]);
  }

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Chispitas de felicidad" />
      </header>
      <section classname="catalog">
        <section className='sub'>
          <p>Nos encontramos en la ciudad de Medellín.</p>
          <p>Domicilios gratis a partir de $15000</p>
        </section>
        <h1>Anchetas</h1>
        <ul>
          {
            products.map((product, index)=>{
              return(
                <li>
                  <div className="product">
                    <h3>{product.name}</h3>
                    <img src={imag[index]?product.images[imag[index]]:product.images[0]} alt="" />
                    <div className="buttons">
                      {product.images.map((_,i)=>{
                        return <button onClick={()=>changeImage(index,i)} className="select"></button>
                      })}
                    </div>
                    <p>{product.description}</p>
                    <div className="price">{`${product.price_prefix} $${product.price}`}</div>

                    <a href="https://wa.me/+573185563022?text=Hola%estoy%interesado%en%un%pedido" className="whatsapp" target="_blank"> <i className="fa fa-whatsapp whatsapp-icon"></i></a>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default App;
