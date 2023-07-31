
import { sortBy } from "../types/types"
import Icons from "../assets/icons/icons"


export default function Users({changSort, deleteUser, showColors, users}) {
    return (
        <table className="table-home">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Foto</th>
                    <th className="pointer" onClick={() => changSort(sortBy.NAME)}>Nombre <Icons icon={'uil-sort-amount-down'} /> </th>
                    <th className="pointer" onClick={() => changSort(sortBy.LAST)}>Apellido <Icons icon={'uil-sort-amount-down'} />  </th>
                    <th className="pointer" onClick={() => changSort(sortBy.EMAIL)}>Correo <Icons icon={'uil-sort-amount-down'} />  </th>
                    <th className="pointer" onClick={() => changSort(sortBy.COUNTRY)}>País <Icons icon={'uil-sort-amount-down'} />  </th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map((user, index) => {
                        const background = index % 2 === 0 ? 'bg-1' : 'bg-2'
                        const color = showColors ? background : 'hover'

                        return (
                            <tr key={user.email} className={color}>
                                <th>{index + 1}</th>
                                <th>
                                    <img src={user.picture.thumbnail} alt={user.name.first} />
                                </th>
                                <th>{user.name.first}</th>
                                <th>{user.name.last}</th>
                                <th>{user.email}</th>
                                <th>{user.location.country}</th>
                                <th>
                                    <button onClick={() => {
                                        deleteUser(user.email)
                                    }}>
                                        Delete <Icons icon={'uil-trash-alt'} />
                                    </button>
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}