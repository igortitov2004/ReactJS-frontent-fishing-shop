import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import ManufacturerService from "../../API/ManufacturerService";

function CheckExample({manufacturers}) {
    return (
        <div className="mx-2" style={{border:"1px solid green",borderRadius:"5px"}}>
            <div className="mx-2">
                <p>Производитель</p>
                <Form>
                        <div className="mb-3">
                            {manufacturers.map(m=>
                                <Form.Check // prettier-ignore
                                type='checkbox'
                                id={m.id}
                                label={m.name}/>)
                            }
                        </div>
                </Form>
            </div>
        </div>

    );
}

export default CheckExample;