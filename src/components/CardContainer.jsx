import Card from "./Card"

const CardContainer = () =>{

  return (
    <div>
        <section>
            <h3>Basado en tu última visita</h3> 
            <a href="#">Ver historial</a>
        </section>

        <section>
            <Card />
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}
        </section>


    </div>
  )
}

export default CardContainer