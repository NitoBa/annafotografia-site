import styled from 'styled-components';

export const Container = styled.footer`
    
    display:flex;
    flex-direction:column;
    margin-top:40px;
    width:100vw;
    background-color:var(--primaryColor);

    .content-footer-desktop{
        display:flex;
        align-items:flex-start;
        margin-left:100px;
        margin-top:50px;
    }
    .side-left-desktop{
        display:flex;
        flex-direction:column;

        

        #title-footer{
            display:flex;
            align-items:center;
            

            >img{
                height:50px;
                filter: invert(1);
            }
            >h2{
                margin-left:15px;
                font-weight:600;
                color:white;
            }
        }


        .social-links{
            margin:50px 0;
            >h2{
                
                margin-bottom:20px;
                color:white;
                font-weight:500;
        }

        .link{
            display:flex;
            align-items:center;
            color:white;
            font-size:0.9rem;
            font-weight:300;
            line-height:1.7;

                .icon{
                    margin-right:5px;
                }
            }
        }        
    }

    .side-right-desktop{
        margin-left:100px;
        margin-top:12px;
        >h3{
            display:flex;
            align-items:center;
            color:white;
            font-weight:600;
        }
        >p{
            margin-top:10px;
            color:white;
            font-weight:300;
            font-size:0.95rem;
            line-height:1.8;
        }
    }


    .copyright{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-bottom:10px;
        >img{
            height:25px;
            filter: invert(1);
        }
        >p{
            margin-left:5px;
            font-weight:300;
            font-size:0.8rem;
            color:white;
        }

        @media(max-width:1200px){
            >img{
                height:20px; 
            }
            >p{
                font-size:0.7rem;
            
            }
        }
    }

    @media(min-width:728px){
        .content-footer-mobile{
            display:none;
        }
    }


    
    @media(max-width:728px){
        .content-footer-desktop{
            display:none;
        }
        

        .content-footer-mobile{
            margin-left:32px;
            margin-top:30px;
            #title-footer{
            display:flex;
            align-items:center;
            

            >img{
                height:35px;
                filter: invert(1);
            }
            >h2{
                margin-left:15px;
                font-weight:600;
                color:white;
                font-size:1.1rem;
            }
        }

            .payment{
                
                margin-top:12px;
                >h3{
                    display:flex;
                    align-items:center;
                    color:white;
                    font-weight:500;
                    font-size:1rem;
                }
                >p{
                    margin-top:10px;
                    color:white;
                    font-weight:300;
                    font-size:0.8rem;
                    line-height:1.8;
                }
            }

            .social-links{
                margin:20px 0;
                margin-bottom:30px;
                >h2{
                    font-size:0.99rem;
                    margin-bottom:20px;
                    color:white;
                    font-weight:500;
                }

                .link{
                    display:flex;
                    align-items:center;
                    color:white;
                    font-size:0.8rem;
                    font-weight:300;
                    line-height:1.7;

                .icon{
                    margin-right:5px;
                }
                }
            }

            
        }

    }
  
`;
