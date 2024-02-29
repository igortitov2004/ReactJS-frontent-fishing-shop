import Form from 'react-bootstrap/Form';
import Dropdown from "react-bootstrap/Dropdown";

const MySelect = ({options,defaultValue, value, onChange}) =>{
    return (
        <Form.Select className="m-2" value={value}
                     onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option=>
                <option key={option.value} value={option.value}>{option.name}</option>)}
        </Form.Select>
    );
}

export default MySelect;