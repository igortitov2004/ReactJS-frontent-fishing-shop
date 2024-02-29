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

const Reels = () => {
    const [reels, setReels] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery,setSearchQuery] = useState('')
    const [fetchReels,isReelsLoading,reelsError] = useFetching(async ()=>{
        setReels(await ReelsService.getAll())
    });

    const sortedReels = useMemo(() =>{
        if(selectedSort){
            return [...reels].sort((a, b) => {
                if (typeof a[selectedSort] === 'string' && typeof b[selectedSort] === 'string') {
                    return a[selectedSort].localeCompare(b[selectedSort]);
                } else {
                    return b[selectedSort] - a[selectedSort];
                }
            })
        }
        return reels
    },[selectedSort,reels])

    const sortedAndSearchedReels = useMemo(()=>{
        return sortedReels.filter(reel=> reel.name.toLowerCase().includes(searchQuery.toLowerCase()))
    },[searchQuery,sortedReels])

    useEffect(() => {
        fetchReels().then(r => console.log(r));
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
                            {value: 'price', name: 'По цене'},
                        ]}
                    />
                    <Nav className="me-auto">
                        <Link to="/createReel" className="nav-link">Добавить катушку</Link>
                    </Nav>
                </div>
                {reelsError && <h1> Произошла ошибка!</h1>}
                {isReelsLoading ? <Loader/> :  <ReelCardList cards={sortedAndSearchedReels}/>}
            </div>
        </div>
    );
};

export default Reels;