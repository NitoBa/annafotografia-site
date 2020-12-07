import Link from 'next/link';

import { Container } from '../../../../styles/components/CardPortfolio/styles';

interface CardPortfolioProps {
    coverImg: string;
    title: string;
    photosQuantity: number;
    path: string;
}

const CardPortfolio: React.FC<CardPortfolioProps> = (props: CardPortfolioProps) => {
    return (
        <Container>
            <img src={props.coverImg} alt="cover" />
            <h1>
                {props.title}
            </h1>
            <h3>
                {props.photosQuantity} FOTOS
            </h3>
            <Link href={`/portfolio/${props.path}`}>
                <a className="view-more">
                    Ver mais
                </a>
            </Link>
        </Container>
    );
}

export default CardPortfolio;