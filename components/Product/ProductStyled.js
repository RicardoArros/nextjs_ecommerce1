import styled from "styled-components";

// Products Container
const ProductsCont = styled.div(
  ({ theme }) => `

  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 2.8rem;
  row-gap: 5rem;

  @media ${theme.breakpoints.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media ${theme.breakpoints.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  `
);

// Product Detail
const ProductDetailWrap = styled.div(({ theme }) => ` `);

const ProductDetailContent = styled.div(
  ({ theme }) => `

  display: grid;

  @media ${theme.breakpoints.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
  }    
  `
);

const ProductDetailImg = styled.div(
  ({ theme }) => `  

  @media ${theme.breakpoints.md} {
    //grid-column: span 2 / span 2;
  }
  `
);

const ProductDetailInfo = styled.div(
  () => `  

  & > h1 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }  
  `
);

const ProductDetailCTA = styled.div(
  () => `  
  
  `
);

const ProductDetailCTAItem = styled.div(
  () => `  
  display: flex;
  justify-content: space-between;

  width: 50%;  
  `
);

// Product Card
const ProductCardWrap = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.radiusFrame1};

  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  //box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;

const ProductCardImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.radiusFrame1};
`;

const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1.4rem;
`;

export {
  ProductsCont,
  ProductCardWrap,
  ProductCardImage,
  ProductCardInfo,
  ProductDetailWrap,
  ProductDetailContent,
  ProductDetailImg,
  ProductDetailInfo,
  ProductDetailCTA,
  ProductDetailCTAItem,
};
