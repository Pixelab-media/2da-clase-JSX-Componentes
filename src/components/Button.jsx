import "../assets/btn.css"

const Button = (props) => {
    return (
        <button className={props.clase}> {props.mensaje}  </button>
    )
}

export default Button