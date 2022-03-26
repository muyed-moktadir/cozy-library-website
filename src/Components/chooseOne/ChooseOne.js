import React from 'react';

const ChooseOne = ({book}) => {
     const{name}=book;
    return (
        <div>
            <h3>authors name :{name}</h3>
        </div>
    );
};

export default ChooseOne;