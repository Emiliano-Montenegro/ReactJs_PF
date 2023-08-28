import React from "react";
import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading }) => {
    if (isLoading) {
        return <h2>Cargando detalle de producto</h2>;
    }

    if (!item) {
        return <h2>Producto no disponible</h2>;
    }

    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src={item.imageUrl}
                            className="img-fluid rounded-start"
                            alt={item.name}
                            style={{ maxHeight: "300px", objectFit: "contain" }}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">${item.price}</p>
                            <p className="card-text">{item.category}</p>
                            <p>{item.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus eros vel
                            ligula dictum, quis suscipit urna congue. Nullam vel malesuada arcu, ac gravida dui. Praesent eu erat
                            et magna tristique dignissim. Fusce vehicula tellus eu arcu fringilla, quis aliquet turpis lacinia.
                            Vivamus hendrerit id urna vel faucibus. Nullam eleifend, neque at sodales efficitur, metus purus
                            fringilla dolor, et dignissim mauris purus nec elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default ItemDetail;
