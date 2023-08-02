import Icons from "../assets/icons/icons"
import { useEffect, useState, useRef, useMemo } from 'react'
import getUsers from '../services/getUsers'
import { Link } from 'wouter'
import { sortBy } from "../types/types"
import Users from "./users"
import '../App.css'

export default function ListOfUsers({ params }) {

    const { page } = params
    const [loading, setLoading] = useState(true)
    const initialUser = useRef([])
    const [users, setUsers] = useState([])
    const [info, setInfo] = useState([])
    const [sorting, setSorting] = useState(sortBy.NONE)
    const [filterCountry, setFilterCountry] = useState(null)
    const [showColors, setShowColors] = useState(false)

    const num = (page * 20) - 20



    useEffect(function () {
        setLoading(true)
        getUsers(page).then(user => {
            setUsers(user.results)
            setInfo(user.info)
            initialUser.current = user.results
        })
            .finally(() => setLoading(false))
    }, [page])

    const handdleDelete = (email) => {
        const filteredUser = filteredUSers.filter(user => user.email !== email)
        setUsers(filteredUser)
    }

    const toggleColors = () => {
        setShowColors(!showColors)
    }

    const toggleSortByCountry = () => {
        const newSortingValue = sorting === sortBy.NONE ? sortBy.COUNTRY : sortBy.NONE
        setSorting(newSortingValue)
    }

    const changeSorting = (sort) => {
        setSorting(sort)
    }

    const filteredUSers = filterCountry
        ? users.filter(user => {
            return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
        })
        : users

    const handdleReset = () => {
        setUsers(initialUser.current)
    }

    const sortedUsers = useMemo(() => {

        if (sorting === sortBy.NONE) return filteredUSers
        if (sorting === sortBy.COUNTRY) {
            return filteredUSers.toSorted(
                (a, b) => a.location.country.localeCompare(b.location.country)
            )
        }
        if (sorting === sortBy.NAME) {
            return filteredUSers.toSorted((a, b) =>
                a.name.first.localeCompare(b.name.first)
            )
        }
        if (sorting === sortBy.LAST) {
            return filteredUSers.toSorted((a, b) =>
                a.name.last.localeCompare(b.name.last)
            )
        }
        if (sorting === sortBy.EMAIL) {
            return filteredUSers.toSorted((a, b) =>
                a.email.localeCompare(b.email)
            )
        }

    }, [filteredUSers, sorting])

    const resetFilter = () => {
        setFilterCountry(null)
    }


    return (
        <>
            <header>
                <button onClick={toggleColors}> Cambiar Color </button>
                <button onClick={toggleSortByCountry}>{sorting === sortBy.COUNTRY ? 'No ordenar por país' : 'Ordenar por país'} <Icons icon={'uil-sort-amount-down'} /> </button>
                <button onClick={handdleReset}>Restaurar Estado <Icons icon={'uil-history'} /> </button>
                <input placeholder='Filtra por país' onChange={(e) => {
                    setFilterCountry(e.target.value)
                }} />
            </header>

            <Link className='links-btn' to="/">Ir a Inicio</Link>
            <section className="table-section">
                <Users users={sortedUsers} deleteUser={handdleDelete} showColors={showColors} changSort={changeSorting} loading={loading} num={num} />
            </section>

            <footer>
                {page !== '1' && <Link onClick={resetFilter} className="links-btn" to={info.page - 1}> <Icons icon={'uil-angle-left-b'} /> </Link>}
                <Link onClick={resetFilter} className="links-btn" to={info.page + 1}> <Icons icon={'uil-angle-right-b'} /> </Link>
            </footer>
        </>
    )
}