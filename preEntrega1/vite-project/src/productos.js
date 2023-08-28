const products = [
    // ... productos existentes
    { id: "1", name: "Samsung S23 Ultra", price: 779.999, category: "Smartphones", imageUrl: "https://img.freepik.com/psd-gratis/smartphone-maqueta-aislada_1310-1507.jpg?w=1380&t=st=1693090476~exp=1693091076~hmac=1b7b3fc6324ec10a0ad9c8319e05da489f5c0cf08e064689b9b38b2f9f8e3538" },
    { id: "2", name: "Samsung S23+ Negro", price: 679.999, category: "Smartphones", imageUrl: "https://img.freepik.com/psd-gratis/smartphone-maqueta-aislada_1310-1507.jpg?w=1380&t=st=1693090476~exp=1693091076~hmac=1b7b3fc6324ec10a0ad9c8319e05da489f5c0cf08e064689b9b38b2f9f8e3538" },
    { id: "3", name: "Samsung S23 Negro", price: 566.999, category: "Smartphones", imageUrl: "https://img.freepik.com/psd-gratis/smartphone-maqueta-aislada_1310-1507.jpg?w=1380&t=st=1693090476~exp=1693091076~hmac=1b7b3fc6324ec10a0ad9c8319e05da489f5c0cf08e064689b9b38b2f9f8e3538" },
    { id: "4", name: "Galaxy Book3 Pro 360", price: 999.999, category: "Notebooks", imageUrl: "https://img.freepik.com/psd-gratis/maqueta-portatil-aislada_1310-1463.jpg?w=1380&t=st=1693090859~exp=1693091459~hmac=fb068cb8b4f923740e72c71489dee18951f01a2b2c5f2c5c9a9d15c7f7025322" },
    { id: "5", name: "Galaxy Book3 Pro", price: 949.999, category: "Notebooks", imageUrl: "https://img.freepik.com/psd-gratis/maqueta-portatil-aislada_1310-1463.jpg?w=1380&t=st=1693090859~exp=1693091459~hmac=fb068cb8b4f923740e72c71489dee18951f01a2b2c5f2c5c9a9d15c7f7025322" },
    { id: "6", name: "Galaxy Book3 Max", price: 506.999, category: "Notebooks", imageUrl: "https://img.freepik.com/psd-gratis/maqueta-portatil-aislada_1310-1463.jpg?w=1380&t=st=1693090859~exp=1693091459~hmac=fb068cb8b4f923740e72c71489dee18951f01a2b2c5f2c5c9a9d15c7f7025322" },
    { id: "7", name: "Samsung 75\" Crystal UHD", price: 849.999, category: "Televisores", imageUrl: "https://img.freepik.com/psd-gratis/maqueta-television-inteligente-aislada_1310-1186.jpg?w=1380&t=st=1693090938~exp=1693091538~hmac=d57a2494aa52483d0017a94f7f2b68310cefedd2e45ed1544590974d9595b336" },
    { id: "8", name: "Samsung 70\" UHD 4K Smart", price: 574.999, category: "Televisores", imageUrl: "https://img.freepik.com/psd-gratis/maqueta-television-inteligente-aislada_1310-1186.jpg?w=1380&t=st=1693090938~exp=1693091538~hmac=d57a2494aa52483d0017a94f7f2b68310cefedd2e45ed1544590974d9595b336" },
    { id: "9", name: "Samsung 65\" Crystal UHD", price: 499.999, category: "Televisores", imageUrl: "https://img.freepik.com/psd-gratis/maqueta-television-inteligente-aislada_1310-1186.jpg?w=1380&t=st=1693090938~exp=1693091538~hmac=d57a2494aa52483d0017a94f7f2b68310cefedd2e45ed1544590974d9595b336" },
    { id: "10", name: "Galaxy Z Flip5 Cream", price: 659.999, category: "Ofertas", imageUrl: "https://img.freepik.com/psd-gratis/smartphone-maqueta-aislada_1310-1507.jpg?w=1380&t=st=1693090476~exp=1693091076~hmac=1b7b3fc6324ec10a0ad9c8319e05da489f5c0cf08e064689b9b38b2f9f8e3538" },
    { id: "11", name: "Galaxy A14 Black", price: 122.999, category: "Ofertas", imageUrl: "https://img.freepik.com/psd-gratis/smartphone-maqueta-aislada_1310-1507.jpg?w=1380&t=st=1693090476~exp=1693091076~hmac=1b7b3fc6324ec10a0ad9c8319e05da489f5c0cf08e064689b9b38b2f9f8e3538" },
    { id: "12", name: "Galaxy Tab S9 Grey", price: 729.999, category: "Ofertas", imageUrl: "https://img.freepik.com/psd-gratis/maqueta-tableta-aislada_1310-1643.jpg?w=1380&t=st=1693091307~exp=1693091907~hmac=9be63f4f9f5dd8a572e7a94dceb9c9399e124306cec35e2c2fab382123474ee3" },
];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id);

            if (product) {
                resolve(product);
            } else {
                reject("Producto no Disponible");
            }
        }, 1000);
    });
};

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltered = category
                ? products.filter((product) => product.category === category)
                : products;

            resolve(productsFiltered);
        }, 1000);
    });
};
