import PropTypes from "prop-types"
import dibujo4 from "../assets/img/dibujo4.jpg"

export const Dibujo4 = ( { className } ) => {
  return (
    <div>
        <img src= { dibujo4 } alt="club de dibujo bogota figura humana 4"
        className = { className }/>
    </div>
  )
}

Dibujo4.propTypes = {
    className: PropTypes.string
}