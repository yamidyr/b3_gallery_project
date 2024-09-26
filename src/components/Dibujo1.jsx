import PropTypes from "prop-types"
import dibujo1 from "../assets/img/dibujo1.jpg"

export const Dibujo1 = ( { className } ) => {
  return (
    <div>
        <img src= { dibujo1 } alt="club de dibujo bogota figura humana 1" 
        className = { className }/>
    </div>
  )
}

Dibujo1.propTypes = {
    className: PropTypes.string
}
