import BtnPrimario from "./BtnPrimario"
import BtnSecundario from "./BtnSecundario"
import Logo from "./logo"

const Card = () =>{

    const producto = [
        {     
         id: 1,
         nombre: "colchón",
         precio: 100000,
         descuento: 0,
         cuotas: "en 12 cuotas",
         envioGratis: true
        },
        {
        id: 2,     
        nombre: "celular",
        precio: 80000,
        descuento: 20,
        cuotas: "en 6 cuotas",
        envioGratis: false
        },
        {
        id: 3,     
        nombre: "parlantes",
        precio: 60000,
        descuento: 10,
        cuotas: "en 3 cuotas",
        envioGratis: true
        },
        {
        id: 4,     
        nombre: "monitor",
        precio: 150000,
        descuento: 5,
        cuotas: "en 24 cuotas",
        envioGratis: false
        },
        {
        id: 5,     
        nombre: "computadora",
        precio: 125000,
        descuento: 15,
        cuotas: "en 18 cuotas",
        envioGratis: true
        },

    ]


     const agregarSigno = (num1) => {
        return num1 + "%OFF"
    }
    
    return (
        <div className="card-container">
            {producto.map(p =>
                <div className="card" key = {p.id}> 
                    <Logo />
                    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_789055-MLA45766971610_042021-F.webp" alt="" />
                    <p>{p.nombre} </p>
                    <p>{p.precio} </p>
                    <p>{agregarSigno(p.descuento)} </p>
                    <p>{p.cuotas} </p>
                    {p.envioGratis && <p>Envio Gratis </p>}
                    <BtnPrimario />
                    <BtnSecundario />
                </div>
            )}
        </div>
    )
  }
  
  export default Card