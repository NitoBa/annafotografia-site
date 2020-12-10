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

  .logo {
      width:45px;
      height:45px;
      cursor: pointer;
      filter: ${props => props.className === "home" ? `invert(0)` : `invert(1)`};
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
    position:absolute;
    right: 0;
    top:0;
    z-index:${props => (props.id === "sidebar" ? `10000` : `-1000`)};
    background-color: var(--primaryColor);
    width:65vw;
    height:100%;
    opacity:  ${props => (props.id === "sidebar" ? `1` : `0`)};
    transition: .2s;
    .icon-back{
        display:${props => (props.id === "hidden-icon" ? `none` : `flex`)};
        margin-top:20px;
        margin-left:20px;
    }

    #nav{
        display:flex;
        align-items:center;
        justify-content:center;
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

