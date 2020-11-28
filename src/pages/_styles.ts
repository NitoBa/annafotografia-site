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

export const ContainerHome = styled.div`
    display:flex;
    align-items: center;
    background: linear-gradient(180deg, rgba(150, 143, 255, 0.52) 0%, rgba(255, 255, 255, 0) 100%);
    display:flex;
    height:90vh;
    width: 100vw;

    .container-icons{

        display: flex;
        flex-direction: column;
        align-items: center;
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
    }
`;
