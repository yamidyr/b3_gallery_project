import PropTypes from "prop-types"
import dibujo6 from "../assets/img/dibujo6.jpg"

export const Dibujo6 = ( { className } ) => {
  return (
    <div>
        <img src= { dibujo6 } alt="club de dibujo bogota figura humana 6"
        className = { className }/>
    </div>
  )
}

Dibujo6.propTypes = {
    className: PropTypes.string
}