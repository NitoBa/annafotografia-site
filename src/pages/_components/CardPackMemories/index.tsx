import Link from 'next/link';
import React from 'react';

import { Container } from './styles';

interface CardPackMemoriesProps {
    icon: string;
    title: string;
    price: string;
    path: string;
}

const CardPackMemories: React.FC<CardPackMemoriesProps> = (props: CardPackMemoriesProps) => {
    return (
        <Container>
            <img src={props.icon} alt="icon-pack" />
            <h1 className="title">
                Pacote <br />{props.title}
            </h1>
            <h1 className="price">
                R$ {props.price}
            </h1>

            <Link href={`/pack/${props.path}`}>
                <a>
                    Adiquir
                </a>
            </Link>
        </Container>
    );
}

export default CardPackMemories;