import styled from "styled-components";

export default function Footer({title, posterURL, date, hour}){
    return (
        <Footer2>
               <img src={posterURL} alt={title} />
                <h3>{title}</h3>
        </Footer2>
    );
}


const Footer2 = styled.div `
    width: 100vw;
    height: 117px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin-top:50px;
    position: fixed;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    img{
        max-height:89px;
        max-width:64px;
        padding: 8px;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 11px;
  margin-right: 15px;
  margin-left: 15px;
  position: relative;
  cursor: pointer;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        
        color: #293845;
    }
`;

// const FooterContent = styled.div`
//     width: 70vw;
//     display: flex;
//     flex-direction: column;
//     align-items: left;
    
//     h3{
//         margin-bottom: 10px;
//         font-size: 22px;
//         text-align: left;
//         color: #293845;
//     }
// `;