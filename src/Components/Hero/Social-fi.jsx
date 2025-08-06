import React from 'react';
import styled from 'styled-components';

const Social = () => {
  return (
    <StyledWrapper>
      <div className="card">
        
        <a href="https://twitter.com/DevHubFusionX" className="socialContainer containerTwo">
        <div className="shine"></div>
          <svg className="socialSvg twitterSvg" viewBox="0 0 16 16">
            
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/anyanwu franklin" className="socialContainer containerThree">
        <div className="shine"></div>

          <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        </a>
        <a href="https://wa.me/2349127391830" className="socialContainer containerFour">
        <div className="shine"></div>

          <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
          </svg>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    background-color:;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    gap: 20px;
    // box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
    flex-direction: column;
    border-radius: 10px;
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position:relative;
    transition-duration: 0.3s;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: 0.3s;
  }
  /* twitter*/
  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: 0.3s;
  transform: translatey(-5px);
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.4);

  }
  /* linkdin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 0.3s;
    transform: translatey(-5px);
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.4);
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: #128c7e;
    transition-duration: 0.3s;
    transform: translatey(-5px);
  box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.4);
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
    @media screen and (max-width:1000px) {
    .card{
      display: none;
      background: red;
    }
    
  }
    `;
export default Social;
