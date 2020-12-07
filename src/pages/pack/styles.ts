import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;


    .banner-pack-container{
        display:flex;
        align-items:center;
        flex-direction:column;
        /* width:60vw; */
        width:800px;
        border-radius:12px;
        margin-top:50px;
        margin-left:auto;
        margin-right:auto;
        padding:32px 16px;
        background-color:var(--primaryColor);
        > img{
            height:60px;
            filter: invert(1);
        }
        >h1{
            display:flex;
            flex-direction:column;
            align-items:center;
            text-align:center;
            color:white;
            font-weight:600;
        }

        >p{
            margin-top:30px;
            text-align:center;
            color:white;
            width:30%;
        }

        #line-white{
            margin-top:10px;
            border-radius:32px;
            height:5px;
            width:50%;
            background-color:white;
        }


        @media(max-width:800px){
            width:90vw;

            >h1{
                font-size:1.3rem;
            }

            >p{
                width:60%;
            }
        }
    }

    .price{
            display:flex;
            align-items:center;
            justify-content:space-between;
            margin-top:25px;
            background-color:var(--primaryColor);
            padding:10px 16px;
            width:800px;
            border-radius:12px;

            >span, h3{
                color:white;
            }


            @media(max-width:800px){
                width:90vw;

            
            }
            
        }

        .contact{
            display:flex;
            justify-content:center;
            flex-direction:column;
            margin:25px 0;
            display:flex;
            width:800px;

            .buttons{
                display:flex;
                margin-top:15px;
                a + a{
                    margin-left:15px;
                }

                .icon-contact{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-radius:12px;
                    padding:16px;
                    height:50px;
                    width:18%;
                    transition: .2s;
                    >span{
                        margin-left:8px;
                        color:white;
                    }

                    @media(max-width:800px){
                        width:90%;
                        >span{
                            font-size:0.8rem;
                        }
            
                    }
                }

                #email{
                    
                    background-color:var(--primaryColor);
                    &:hover{
                        background-color:var(--primaryColorDark);

                    }
                }
                #whatsapp{
                    background-color:var(--whatsappColor);

                    &:hover{
                        background-color:var(--whatsappColorDark);

                    }
                }
            }

            @media(max-width:800px){
                width:90vw;
            
           }
        }
`;
