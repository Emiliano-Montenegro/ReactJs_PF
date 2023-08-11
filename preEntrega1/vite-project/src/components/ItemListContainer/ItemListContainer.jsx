import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                <h1 className="d-flex justify-content-center align-items-center">{greeting}</h1>
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;
