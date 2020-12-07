import styled from 'styled-components';

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

    #image-details{
        display:flex;
        align-items:center;
        justify-content:center;
        width:500px;
        height:500px;
        position: absolute;
        z-index:1000;
        margin: auto;
        left:-50%;
        right:-50%;
        bottom:-30%;
        .img{
            display:flex;
            align-items:center;
            justify-content:center;
            align-self:center;
            border-radius:12px;
            width: 100%;
            box-shadow: 0 2px 20px rgba(0,0,0,0.3);
            >img{
                border-radius:12px;
                
                width:100%;
            }

            @media(max-width:700px){
                width:90vw;
            }

        }

            @media(max-width:700px){
                width:90vw;
                bottom:-50%;
            }
    }

    #contato{
        position:absolute;
        bottom:0;
    }
`;

export const GripPhotos = styled.section`
    column-count:3;
    column-gap:20px;
    max-width:700px;
    margin: 50px auto 0 auto;
    .img{
        transition: .2s;
        margin:0;
        display:flex;
        margin-bottom:20px;
        break-inside:avoid;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        border-radius: 12px;
        >img{
            border-radius: 12px;
            width:100%;
        }


        &:hover{
            transform:scale(1.05);
        }


        @media(max-width:1200px){
            transform: unset !important;
        
        }

    }

    @media(max-width:700px){
        margin: 30px 50px;

    }
    @media(max-width:500px){
        margin: 30px 30px;
        column-count:2;
        
    }
`
