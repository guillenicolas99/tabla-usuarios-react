import { Link } from 'react-router-dom'


export default function HomePage() {
    return (
        <>
            <h1 className='title'>App de Usuarios</h1>
            <Link className='links-btn' to='/users/1'> Ver Usuarios</Link>
        </>
    )
}