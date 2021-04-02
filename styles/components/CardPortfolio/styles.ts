import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  height: 140%;
  width: 120%;
  transition: .2s;
  cursor: pointer;
  position:relative;
  margin-bottom:10vh;
  transform:scale(1);
  padding:16px;
  >img {
    object-fit:cover;
    position:absolute;
    z-index:-1;
    border-radius: 16px;
    width:100%;
    height:100%;
    filter:brightness(50%);
    transition: .2s;
    box-shadow: 16px 16px 100px rgba(0, 0, 0, 0.25);
  }

  >h1,h3{
    color: white;
  }
  >h1{
    
    font-size:2.5rem;
    font-weight:normal;
  }
  >h3{
    font-weight:300;
    font-size:1.5rem;
    line-height:45px;
    
  }

  .view-more{
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    bottom:0;
    background-color: var(--primaryColor);
    color:white;
    border-radius:32px;
    padding:8px;
    width:50%;
    margin-bottom:6%;
    transition: .2s;
    text-align: center;

    &:hover{
      background-color: var(--primaryColorDark);
    }
  }

  &:hover{
    transform:scale(1.05);

    >img {
      filter: brightness(90%);
    } 
  }

  
  
  @media(max-width:1200px){
    /* width:85vw; */
    /* height: 40vh; */
    height: 100%;

    margin-top:5vh;   
    >h1{
    font-size:1.9rem;
    font-weight:normal;
    }
    >h3{
    font-weight:300;
    font-size:1.2rem;
    line-height:45px;
    }   
  }

  @media(max-width:600px){
    height: 100%;

    .view-more{
      width:40%;

      font-size:0.8rem;
    }
  }

  @media(max-width:500px){
    height: 100%;
  }
`;
