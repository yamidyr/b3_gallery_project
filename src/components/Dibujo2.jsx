import PropTypes from "prop-types"
import dibujo2 from "../assets/img/dibujo2.jpg"

export const Dibujo2 = ( { className } ) => {
  return (
    <div>
        <img src= { dibujo2 } alt="club de dibujo bogota figura humana 2"
        className = { className }/>
    </div>
  )
}

Dibujo2.propTypes = {
    className: PropTypes.string
}