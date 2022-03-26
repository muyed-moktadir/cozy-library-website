import React from 'react';

const ChooseOne = (props) => {
 const{name}=props.name;    
    return (
        <div>
            <h3>Author's Name :{name}</h3>
        </div>
    );
};

export default ChooseOne;