
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
import Form from "react-bootstrap/Form";
import ManufacturerService from "../API/ManufacturerService";
import {getRole} from "../API/axios_helper";

function Rods() {

    const [rods, setRods] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery,setSearchQuery] = useState('')
    const [filterTags, setFilterTags] = useState([])
    const [manufacturers, setManufacturers] = useState([])
    const [fetchRods,isRodsLoading,rodsError] = useFetching(async ()=>{
        setRods(await RodsService.getAll())
    });
    const filteredDATA = rods.filter((node) =>
        filterTags.length > 0
            ? filterTags.every((filterTag) =>
                node.manufacturer.name.includes(filterTag)
            )
            : rods
    )
    const sortedRods = useMemo(() =>{
        if(selectedSort){
            return [...filteredDATA].sort((a, b) => {
                if (typeof a[selectedSort] === 'string' && typeof b[selectedSort] === 'string') {
                    return a[selectedSort].localeCompare(b[selectedSort]);
                } else {
                    return b[selectedSort] - a[selectedSort];
                }
            })
        }
        return filteredDATA
    },[selectedSort,rods,filterTags])



    const filterHandler = (event) => {
        // filterTags.map(f=>f.value!==event.target.value ? f.checked=false: console.log(event.target.value))
        if (event.target.checked) {
            setFilterTags([...filterTags, event.target.value])
        } else {
            setFilterTags(
                filterTags.filter((filterTag) => filterTag !== event.target.value)
            )
        }
    }
    async function fetchManufacturers() {
        setManufacturers(await ManufacturerService.getAll())
    }
    const sortedAndSearchedRods = useMemo(()=>{
        return sortedRods.filter(reel=> reel.name.toLowerCase().includes(searchQuery.toLowerCase()))
    },[searchQuery,sortedRods])

    useEffect(() => {
        fetchRods().then(r => console.log(r));
        fetchManufacturers().then(r => console.log(r))
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
                    <Form className="mx-2" style={{border: "1px solid green", borderRadius: "5px"}}>
                        <div className="mx-2">
                            <h5>Производители</h5>
                            {manufacturers.map(m =>
                                <Form.Check
                                    type="checkbox"
                                    onChange={filterHandler}
                                    value={m.name}
                                    id={m.name}
                                    label={m.name}
                                />
                            )}
                        </div>
                    </Form>
                    {getRole()==="ADMIN" ?
                        <Nav className="me-auto">
                            <Link to="/createRod" className="nav-link">Добавить удочку</Link>
                        </Nav> : console.log()
                    }
                </div>
                {rodsError && <h1> Произошла ошибка!</h1>}
                {isRodsLoading ? <Loader/> :  <RodCardsList cards={sortedAndSearchedRods}/>}

            </div>
        </div>
    );
}
export default Rods;