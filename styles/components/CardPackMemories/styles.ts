import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  border-radius:8px;
  border: 1px solid white;
  padding:15px 35px;
  transition: .2s;
    >img {
        height:60px;
        filter:invert(1);
    }
    
    .title{
      font-size:1.3rem;
      color:white;
      text-align:center;
      font-weight:600;
    }

    .price{
        margin:15px 0;
        font-size:1.8rem;
        color:white;
        text-align:center;
        font-weight:800;
    }

    >a{

        font-size:0.9rem;
        padding:5px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:white;
        width: 80%;
        height:40px;
        border-radius:32px;
        transition: .2s;
        &:hover{
            background-color: var(--primaryColorDark) !important;
        }
    }

    &:hover{
        transform: scale(1.08);
        background-color: white;
        >img{
            filter:invert(0);
        }

        .title, .price{
            color:black;
        }

        >a{
            background-color: #ECAA78;
            color:white;
        }
    }

    @media(max-width:900px){
        background-color:white;
        >img {
            filter:invert(0);
        }

        .title, .price{
            color:black;
        }

        > a{
            background-color:var(--primaryColor);
            color:white;
        }

    }


    

`;
