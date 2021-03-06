
interface PhotosPortfolio {
    id: string;
    title: string;
    coverImg: string;
    photosQuantity: number;
    path: string;
    photos: string[];
}

const PhotosPortfolio: PhotosPortfolio[] = [
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
    }
]

export default PhotosPortfolio;
