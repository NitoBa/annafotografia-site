import styled from 'styled-components';
import NavBar from '../../shared/components/Navbar'


export const ContainerRoot = styled.div`
    /* position:absolute; */
`

export const Container = styled.div`
    display:flex;
    flex-direction:column;

    .title-photos{
        margin-top:35px;
        display:flex;
        align-items:center;
        justify-content:center;
        width:20vw;
        height:50px;
        background-color:var(--primaryColor);
        >h3{
            color:white;
            font-weight:500;
        }


        @media(max-width:900px){
            width:40vw;

            >h3{
                font-size:1.2rem;
            }

        }

        @media(max-width:600px){
            >h3{
                font-size:1.2rem;
            }

        }

        @media(max-width:400px){
            >h3{
                font-size:1rem;
            }

        }
    }

    #contato{
        position:absolute;
        bottom:0;
    }
`;
