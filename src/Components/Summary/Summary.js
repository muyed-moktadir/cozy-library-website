import React from 'react';
import './Summary.css'

const Summary = () => {
    return (
        <div>
            <div className='summary-box'>
                <h2>How React Works</h2>
                <p align="justify">
                React is a library not a framework.its basically defines the logical structure of documents. thats why is very faster than browser. React mainly DOM tree representation of a virtual DOM.If any changes occur react use algorithm to fix both virtual and real DOM. React Dom always try to update the DOM to match react elements.so that it can speed up the manipulation.
                </p>
                <h2>Difference Between Props and State</h2>
                <p align="justify">
                <strong>props: </strong>we pass the data from parent component to child component as a attribute .which is read only, immutable and cant be modified.when child component receive the attribute as a object.
                <br />

                <strong>state: </strong> the state represents  that it is a local state of the component which cannot be accessed and modified outside of the component.but inside the component it can be accessed or modified directly.
                </p>
            </div>
        </div>
    );
};

export default Summary;