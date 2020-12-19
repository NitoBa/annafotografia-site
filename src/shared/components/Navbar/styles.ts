import styled from 'styled-components';

export const Container = styled.nav.attrs(props => ({
    colorNav: props.className == "home" ? "home" : "no-home",
}))`
    display: flex;
    align-items:center;
    height:70px;
    width:100vw;
    background-color:${props => props.colorNav === "home" ? `white` : `var(--primaryColor)`};
    padding: 0 16px;
    justify-content: space-between;
    position: fixed;
    top:0;
    z-index:100;
    box-shadow: 0 5px 5px rgba(0,0,0, 0.2);
    #logo-container{
        display:flex;
        align-items:center;
        justify-content:center;
        transition: .2s;
        width:45px;
        height:45px;
        .logo {
        width:100%;
        cursor: pointer;
        transition: .2s;
        filter: ${props => props.className === "home" ? `invert(0)` : `invert(1)`}; 
        }
        &:hover{
        background-color: ${props => props.className === "home" ? `var(--primaryColor)` : `white`};
        border-radius:10px;
        padding: 4px;
        .logo{
            filter: ${props => props.className === "home" ? `invert(1)` : `invert(0)`};
        }        
      }
    }



  #icon{
    color: ${props => props.colorNav === "home" ? `black` : `white`};

    }

  .container-nav-options{
      display: flex;
      margin-right:15px;
      > li + li{
          margin-left: 70px;
      }
      > li button{
          padding:6px;
          border-radius:8px;
          background-color: transparent;
          transition: .2s;
          font-size: 20px;
          color: ${props => props.colorNav === "home" ? `black` : `white`};
        
          &:hover{
            background-color: ${props => props.colorNav === "home" ? `var(--primaryColor)` : `white`};
            color: ${props => props.colorNav === "home" ? `white` : `black`};
            
        }

      }

      @media(max-width:1024px){  
            display:none;
            
        }
  }
  @media(min-width:1024px){  
        #icon{
            display:none;
        }
            
    }
`;

export const SideaBar = styled.div`
    display:flex;
    flex-direction:column;
    right: 0;
    position: fixed;
    top:0;
    z-index:${props => (props.id === "sidebar" ? `1000` : `-10000000`)};
    background-color: var(--primaryColor);
    box-shadow: 0 6px 6px rgba(0,0,0, 0.3);
    width:${props => (props.id === "sidebar" ? `65vw` : `0`)};
    height:100%;
    transition: .2s;
    .icon-back{
        display:${props => (props.id === "hidden-icon" ? `none` : `flex`)};
        margin-top:20px;
        margin-left:20px;
    }

    .container-nav-options-mobile{
        display:flex;
        align-items:center;
        flex-direction:column;
        margin-top:50px;
        
        > li button{
          width:40vw;
          padding:6px;
          border-radius:8px;
          background-color: white;
          font-size: 18px;
          margin:20px 0;

      }
    }
`;

export const Nav = styled.div`
        display:${props => (props.id === "nav" ? `flex` : `none`)};
        align-items:center;
        justify-content:center;
`

