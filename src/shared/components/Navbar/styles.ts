import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    align-items:center;
    height:70px;
    
    padding: 0 16px;
    justify-content: space-between;

  .logo {
      width:45px;
      height:45px;
  }

  .container-nav-options{
      display: flex;
      > li + li{
          margin-left: 70px;
      }
      > li button{
          padding:6px;
          border-radius:8px;
          background-color: transparent;
          transition: .2s;
        
          &:hover{
            background-color: var(--primaryColor);
            color: white;
        }

      }

      
  }
`;
