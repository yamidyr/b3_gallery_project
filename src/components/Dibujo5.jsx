import PropTypes from "prop-types"
import dibujo5 from "../assets/img/dibujo5.jpg"

export const Dibujo5 = ( { className } ) => {
  return (
    <div>
        <img src= { dibujo5 } alt="club de dibujo bogota figura humana 5"
        className = { className }/>
    </div>
  )
}

Dibujo5.propTypes = {
    className: PropTypes.string
}
