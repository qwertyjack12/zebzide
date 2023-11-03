import {Link} from 'react-router-dom'

export default function Button() {
  return (
    <div className="button">
        <button className="si"><Link to='/login'>Sign in</Link></button>
        <button className="su"><Link to='/logout'>Sign up</Link></button>
    </div>
  )
}
