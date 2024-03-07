import React, {useEffect, useMemo, useState} from 'react';
import ManufacturerAndTypesCard from "../UI/card/ManufacturerAndTypesCard";
import ManufacturerService from "../API/ManufacturerService";
import Form from "react-bootstrap/Form";
import TypeOfReelService from "../API/TypeOfReelService";
import TypeOfRodService from "../API/TypeOfRodService";



const ManufacturersAndTypes = () => {
    const [manufacturers, setManufacturers] = useState([])
    const [typesOfReels, setTypesOfReels] = useState([])
    const [typesOfRods, setTypesOfRods] = useState([])
    async function fetchManufacturers() {
        setManufacturers(await ManufacturerService.getAll())
    }
    async function fetchTypesOfReels() {
        setTypesOfReels(await TypeOfReelService.getAll())
    }
    async function fetchTypesOfRods() {
        setTypesOfRods(await TypeOfRodService.getAll())
    }
    useEffect(() => {
        fetchManufacturers().then(r => console.log(r))
        fetchTypesOfReels().then(r => console.log(r))
        fetchTypesOfRods().then(r => console.log(r))
    }, []);
    return (
        <div className="d-flex">
            <ManufacturerAndTypesCard title="Производители" props={manufacturers} name="name"/>
            <ManufacturerAndTypesCard title="Типы удилищ" props={typesOfRods} name="typeOfRod"/>
            <ManufacturerAndTypesCard title="Типы катушек" props={typesOfReels} name="typeOfReel"/>
        </div>
    );
};

export default ManufacturersAndTypes;