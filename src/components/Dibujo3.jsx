import PropTypes from "prop-types"
import dibujo3 from "../assets/img/dibujo3.jpg"

export const Dibujo3 = ( { className } ) => {
  return (
    <div>
        <img src= { dibujo3 } alt="club de dibujo bogota figura humana 3"
        className = { className }/>
    </div>
  )
}

Dibujo3.propTypes = {
    className: PropTypes.string
}