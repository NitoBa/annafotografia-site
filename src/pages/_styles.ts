import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  .bg-profile{
      height:90vh;
      width: 100vw;
      object-fit: cover;
      position: absolute;
      z-index:-1;
  }
`;

export const ContainerHome = styled.main`
    display:flex;
    align-items: center;
    justify-content:center;
    background: linear-gradient(180deg, rgba(150, 143, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%);
    display:flex;
    height:90vh;
    width: 100vw;

    .container-icons{

        display: flex;
        flex-direction: column;
        align-items: center;
        position:absolute;
        left:0;
        margin-left: 16px;
        > a button{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px;
            width: 80px;
            border: 1px solid white;
            border-radius: 50%;
            background-color: transparent;
            transition: .2s;
            color: white;

            &:hover{
                background-color: white;
                border-color: var(--primaryColor);
                color: var(--primaryColor);
            }
        }
        > a  + a {
            margin-top: 20px;
        }

        @media(max-width:1024px){
            top:65vh;
            > a button{
                padding:12px;
                width:50px;
                height:50px;
            }
        }
    }

    .container-texts-home{
        display: flex;
        flex-direction: column;
        align-items:center;
        
        h2, h1{
            color: white;
            font-weight: 400;
            transform: translateY(-100px);
        }
        h2{
            font-size:30px;
            margin-bottom:70px;
        }
        h1{
            font-size:60px;
        }


        .role-down{
            position: absolute;
            bottom: 0;
            display:flex;
            flex-direction:column;
            align-items:center;
            margin-bottom:20px;
        }

        @media(max-width:1024px){

        h1,h2{
            transform: translateY(-70px);
        }    
        h2{
            font-size:20px;
            margin-bottom:60px;

        }

        h1{
            font-size:30px;
            text-align:center;

        }
    }
    }

    
`;
