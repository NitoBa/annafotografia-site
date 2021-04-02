import { IPhotosPortfolio } from '../shared/interfaces/portfolio';

const PhotosPortfolio: IPhotosPortfolio[] = [
    {
        id: "1",
        coverImg: "/casamento.jpg",
        title: "Casamentos",
        photosQuantity: 5,
        photos: ["criativa.jpg", "profile.jpg", "casamento.jpg", "retrato.jpg", "casamento.jpg", "criativa.jpg", "profile.jpg"],
        path: "casamentos",
    },
    {
        id: "2",
        coverImg: "/retrato.jpg",
        title: "Retratos",
        photosQuantity: 15,
        path: "retratos",
        photos: [""],
    },
    {
        id: "3",
        coverImg: "/criativa.jpg",
        title: "Fotos criativas",
        photosQuantity: 8,
        path: "criativas",
        photos: [""],
    },
    {
        id: "4",
        coverImg: "/casamento.jpg",
        title: "Casamentos",
        photosQuantity: 5,
        photos: ["criativa.jpg", "profile.jpg", "casamento.jpg", "retrato.jpg", "casamento.jpg", "criativa.jpg", "profile.jpg"],
        path: "casamentos",
    },
    {
        id: "5",
        coverImg: "/retrato.jpg",
        title: "Retratos",
        photosQuantity: 15,
        path: "retratos",
        photos: [""],
    },
    {
        id: "6",
        coverImg: "/criativa.jpg",
        title: "Fotos criativas",
        photosQuantity: 8,
        path: "criativas",
        photos: [""],
    }
]

export default PhotosPortfolio;
