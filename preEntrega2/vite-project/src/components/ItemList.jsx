import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <h2>Cargando productos...</h2>;
    }

    return (
        <div className="text-center mt-2">
            <h1>Productos</h1>
            <div className="row row-cols-1 row-cols-sm2 row-cols-md-6 mb-5 g-3 ">
                {items.map((item) => (
                    <div key={item.id} className="col mb-4">
                        <div className="card h-100">
                            <img
                                src={item.imageUrl}
                                className="card-img-top img-fluid"
                                alt={item.name}
                                style={{ objectFit: "contain", maxHeight: "140px" }}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">${item.price}</p>
                                <p className="card-text">{item.category}</p>
                                <Link to={`/item/${item.id}`} className="btn btn-primary">
                                    Ver detalles
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
};

export default ItemList;
