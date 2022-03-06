import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  background:${({ transBool }) => (transBool ? 'transparent' : '#000000')};
  position: fixed;
  transition: background-color 1s ease;
  

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`;

// export const LogoContainer = styled(Link)`
//   height: 50px%;
//   width: 50px;
//   margin-left: 1rem;
//   fill: white;
//   z-index: 1;


//   @media screen and (max-width: 800px) {
//     width: 50px;
//     padding: 0px;
//   }
// `;

// export const IconContainer = styled.div`
//   width: 30%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   margin-right: 20px;

//   @media screen and (max-width: 800px) {
//     width: 80%;
//   }
// `;

// export const OptionContainer = styled.div`
//   width: 30%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   margin-left: 0px;

//   @media screen and (max-width: 800px) {
//     width: 80%;
//   }
// `;

// export const OptionLink = styled(Link)`
//   padding: 10px 15px;
//   cursor: pointer;
//   text-decoration: none;
//   text-align: center;
//   vertical-align: middle;
//   line-height: 60px;     
//   fill: white;
//   color: white;
// `;
