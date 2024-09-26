import { Link } from 'react-router-dom'
import { Dibujo1 } from './Dibujo1'
import { Dibujo2 } from './Dibujo2'
import { Dibujo3 } from './Dibujo3'
import { Dibujo4 } from './Dibujo4'
import { Dibujo5 } from './Dibujo5'
import { Dibujo6 } from './Dibujo6'

export const Navigation = () => {
  return (
    <div className = 'container thumbnail-container mt-2'>
        <Link to = '/dibujo1' className = 'links'>
            <figure className = 'thumbnail-image-size'>
                <Dibujo1/>
                <figcaption>Dibujo 1</figcaption>
            </figure>
        </Link>
        <Link to = '/dibujo2' className = 'links'>
            <figure className = 'thumbnail-image-size'>
                <Dibujo2/>
                <figcaption>Dibujo 2</figcaption>
            </figure>
        </Link>
        <Link to = '/dibujo3' className = 'links'>
            <figure className = 'thumbnail-image-size'>
                <Dibujo3/>
                <figcaption>Dibujo 3</figcaption>
            </figure>
        </Link>
        <Link to = '/dibujo4' className = 'links'>
            <figure className = 'thumbnail-image-size'>
                <Dibujo4/>
                <figcaption>Dibujo 4</figcaption>
            </figure>
        </Link>
        <Link to = '/dibujo5' className = 'links'>
            <figure className = 'thumbnail-image-size'>
                <Dibujo5/>
                <figcaption>Dibujo 5</figcaption>
            </figure>
        </Link>
        <Link to = '/dibujo6' className = 'links'>
            <figure className = 'thumbnail-image-size'>
                <Dibujo6/>
                <figcaption>Dibujo 6</figcaption>
            </figure>
        </Link>
    </div>
  )
}
