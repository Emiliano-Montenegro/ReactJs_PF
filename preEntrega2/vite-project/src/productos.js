const products = [
    // ... productos existentes
    { id: "1", name: "Samsung S23 Ultra", price: 779.999, category: "Smartphones", imageUrl: "https://static.vecteezy.com/system/resources/previews/022/722/945/original/samsung-galaxy-s23-ultra-transparent-image-free-png.png" },
    { id: "2", name: "Samsung S23+ Negro", price: 679.999, category: "Smartphones", imageUrl: "https://tienda.personal.com.ar/images/Galaxy_S23_Plus_256_Gb_Black_Frente_min_dc3c85b9de.png" },
    { id: "3", name: "Samsung S23 Negro", price: 566.999, category: "Smartphones", imageUrl: "https://tienda.personal.com.ar/images/Galaxy_S23_Black_256_R30_min_19ec7a1b21.png" },
    { id: "4", name: "Galaxy Book3 Pro 360", price: 999.999, category: "Notebooks", imageUrl: "https://beneficios.tiendadiggit.com.ar/web/image/product.image/3394/image_1024/Notebook%20Samsung%20Galaxy%20Book3%20Pro%20360%2016%22%20Core%20I7%20512gb%2016g%20Ram?unique=4d51d65" },
    { id: "5", name: "Galaxy Book3 Pro", price: 949.999, category: "Notebooks", imageUrl: "https://tienda.personal.com.ar/images/Notebook_Samsung_Galaxy_Book3_Pro_Beige3_7edbbadade.png" },
    { id: "6", name: "Galaxy Book3 STD", price: 506.999, category: "Notebooks", imageUrl: "https://www.tiendadiggit.com.ar/web/image/product.image/3425/image_1024/Notebook%20Samsung%20Galaxy%20Book3%2015%2C6%22?unique=1daf2b5" },
    { id: "7", name: "Samsung 75\" Crystal UHD", price: 849.999, category: "Televisores", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/ar/un75au8000gczb/gallery/ar-uhd-4k-tv-un75au8000gczb-----au-----crystal-uhd--k-smart-tv----------dise-o-frontal-509573346?$650_519_PNG$" },
    { id: "8", name: "Samsung 70\" UHD 4K Smart", price: 574.999, category: "Televisores", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/ar/un75au8000gczb/gallery/ar-uhd-4k-tv-un75au8000gczb-----au-----crystal-uhd--k-smart-tv----------dise-o-frontal-509573346?$650_519_PNG$" },
    { id: "9", name: "Samsung 65\" Crystal UHD", price: 499.999, category: "Televisores", imageUrl: "https://tienda.personal.com.ar/images/Smart_TV_BU_8000_65_min_323fe8d267.png" },
    { id: "10", name: "Galaxy Z Flip5 Cream", price: 659.999, category: "Ofertas", imageUrl: "https://shop.samsung.com/latin/pub/media/catalog/product/cache/a69170b4a4f0666a52473c2224ba9220/0/0/00-sm-f731_zflip5_all-colors_230511-02_4.png" },
    { id: "11", name: "Galaxy A14 Black", price: 122.999, category: "Ofertas", imageUrl: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a146mzkearo/gallery/ar-galaxy-a14-5g-sm-a146-sm-a146mzkearo-536550262?$650_519_PNG$" },
    { id: "12", name: "Galaxy Tab S9 Grey", price: 729.999, category: "Ofertas", imageUrl: "https://w7.pngwing.com/pngs/670/847/png-transparent-samsung-galaxy-tab-s3-samsung-galaxy-book-android-stylus-tablet-electronics-gadget-netbook.png" },
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
