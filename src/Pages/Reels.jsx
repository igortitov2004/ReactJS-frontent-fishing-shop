import React, {useEffect, useMemo, useState} from 'react';
import {useFetching} from "../UI/hooks/useFetching";
import axios from "axios";
import MySelect from "../UI/select/MySelect";
import Loader from "../Loader/Loader";
import ReelCardList from "../UI/card/ReelCardList";
import {Link} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import ReelsService from "../API/ReelService";
import MyInput from "../UI/input/MyInput";
import CheckForm from "../UI/check/CheckForm";
import ManufacturerService from "../API/ManufacturerService";

import Form from "react-bootstrap/Form";
import {getRole} from "../API/axios_helper";

const Reels = () => {
    const [reels, setReels] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [filterTags, setFilterTags] = useState([])
    const [manufacturers, setManufacturers] = useState([])

    const [fetchReels, isReelsLoading, reelsError] = useFetching(async () => {
        setReels(await ReelsService.getAll())
    });

    const filteredDATA = reels.filter((node) =>
        filterTags.length > 0
            ? filterTags.every((filterTag) =>
                node.manufacturer.name.includes(filterTag)
            )
            : reels
    )

    const filterHandler = (event) => {
        if (event.target.checked) {
            setFilterTags([...filterTags, event.target.value])
        } else {
            setFilterTags(
                filterTags.filter((filterTag) => filterTag !== event.target.value)
            )
        }
    }

    const sortedReels = useMemo(() => {
        if (selectedSort) {
            return [...filteredDATA].sort((a, b) => {
                if (typeof a[selectedSort] === 'string' && typeof b[selectedSort] === 'string') {
                    return a[selectedSort].localeCompare(b[selectedSort]);
                } else {
                    return b[selectedSort] - a[selectedSort];
                }
            })
        }
        return filteredDATA
    }, [selectedSort, reels,filterTags])

    async function fetchManufacturers() {
        setManufacturers(await ManufacturerService.getAll())
    }

    const sortedAndSearchedReels = useMemo(() => {
        return sortedReels.filter(reel => reel.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedReels])

    useEffect(() => {
        fetchReels().then(r => console.log(r));
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
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Поиск по названию"
                    />
                    <MySelect
                        value={selectedSort}
                        onChange={sortCards}
                        defaultValue="Сортировка по"
                        options={[
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
                            <Link to="/createReel" className="nav-link">Добавить катушку</Link>
                        </Nav> : console.log()}

                </div>
                {reelsError && <h1> Произошла ошибка!</h1>}
                {isReelsLoading ? <Loader/> : <ReelCardList cards={sortedAndSearchedReels}/>}
            </div>
        </div>
    );
};

export default Reels;