import React from 'react';

const MyInput = React.forwardRef((props,ref) => {
    return (
        <input className="m-2" ref={ref} {...props}/>
    );
});

export default MyInput;