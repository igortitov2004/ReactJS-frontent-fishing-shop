import React from 'react';
import MyInput from "../input/MyInput";
import MySelect from "../select/MySelect";

const CardsFilter = ({filter,setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange = {e=>setFilter({...filter,query: e.target.value})}
                placeHolder="Поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
                defaultValue="Сортировка по"
                options={[
                    {value:"title",name:"По названию"},
                    {value:"body",name:"По описанию"},
                ]}
            /></div>
    );
};

export default CardsFilter;