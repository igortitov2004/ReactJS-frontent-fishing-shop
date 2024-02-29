
import React, {useEffect, useMemo, useState} from "react";
import {useFetching} from "../UI/hooks/useFetching";
import MySelect from "../UI/select/MySelect";
import Loader from "../Loader/Loader";
import RodCardsList from "../UI/card/RodCardsList";
import RodsService from "../API/RodsService";
import axios from "axios";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import MyInput from "../UI/input/MyInput";

function Rods() {

    const [rods, setRods] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery,setSearchQuery] = useState('')
    const [fetchRods,isRodsLoading,rodsError] = useFetching(async ()=>{
        setRods(await RodsService.getAll())
    });

    const sortedRods = useMemo(() =>{
        if(selectedSort){
            return [...rods].sort((a, b) => {
                if (typeof a[selectedSort] === 'string' && typeof b[selectedSort] === 'string') {
                    return a[selectedSort].localeCompare(b[selectedSort]);
                } else {
                    return b[selectedSort] - a[selectedSort];
                }
            })
        }
        return rods
    },[selectedSort,rods])

    const sortedAndSearchedRods = useMemo(()=>{
        return sortedRods.filter(reel=> reel.name.toLowerCase().includes(searchQuery.toLowerCase()))
    },[searchQuery,sortedRods])

    useEffect(() => {
        fetchRods().then(r => console.log(r));
    }, []);

    const sortCards = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <div className="d-flex">
                <div>
                    <MyInput
                        value={searchQuery}
                        onChange={e=>setSearchQuery(e.target.value)}
                        placeholder = "Поиск по названию"
                    />
                    <MySelect
                        value={selectedSort}
                        onChange={sortCards}
                        defaultValue="Сортировка по"
                        options={[
                            {value: 'length', name: 'По длине'},
                            {value: 'price', name: 'По цене'},
                        ]}
                    />
                    <Nav className="me-auto">
                        <Link to="/createRod" className="nav-link">Добавить удочку</Link>
                    </Nav>
                </div>
                {rodsError && <h1> Произошла ошибка!</h1>}
                {isRodsLoading ? <Loader/> :  <RodCardsList cards={sortedAndSearchedRods}/>}

            </div>
        </div>
    );
}
export default Rods;