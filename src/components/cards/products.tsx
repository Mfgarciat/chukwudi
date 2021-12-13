import React from 'react'
import tw from "tailwind-styled-components"
import Carousel from "react-elastic-carousel";
import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import {addCarrito} from "../../redux/carritoReducer";

const Container = tw.div` 
    w-3/9 
    m-2 
`
const Body = tw.div`
   w-full 
   h-50 
   rounded 
   overflow-hidden 
   cursor-pointer
`

const Title = tw.div`
  w-64 
  h-20 
  text-black 
  text-lg 
  font-bold 
  pt-5 
  leading-6 
`

const Tag = tw.div`
  flex 
  absolute 
  justify-center 
  align-center 
  text-black 
  text-xs 
  font-bold 
  bg-gray-100 
  items-center 
  h-8 w-24 
  -ml-1 
  rounded-bl-md 
  rounded-tr-md 
  bottom-0
`;

const Add = tw.button`
  flex 
  absolute 
  justify-center 
  align-center
  hover:ba-green-400 
  text-white 
  text-xl 
  font-bold 
  bg-green-500 
  items-center 
  h-8 
  w-8 
  rounded-br-md 
  rounded-tl-md 
  bottom-0 
  right-0 
  -mr-1
`;


const Body1 = tw.div`
    text-gray 
    text-xs 
    font-bold 
`;

const Image = tw.div`
      relative 
      flex
`;

const Details = tw.div`
   flex 
   items-center 
   text-gray-500
`;

const CardImg = tw.img`
   h-32 
   w-64 
   rounded-md
`;

const Icon = tw.img`
  h-3 
  w-3 
  mr-2 
  inline 
  font-bold 
`;


const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3}
];

const Products: React.FC = () => {

    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.products.value)
    const selected = useAppSelector(state => state.selected.value)

    const handleChange = (event: React.SyntheticEvent, id: string) => {
        dispatch(addCarrito(id))
    };
    return (
        <Carousel className={"h-50"}
                  breakPoints={breakPoints}
                  pagination={false}
                  itemsToShow={8}
                  showArrows={false}
                  autoPlaySpeed={2000}
                  isRTL={false}>
            {products
                // .filter(x => (x.categorie == selected || selected == "1"))
                .map(({id, name, qualification, time, price, image}) => {
                        return (
                            <Container key={id}>
                                <Body>
                                    <Image>
                                        <CardImg src={image}/>
                                        <Tag>{time}</Tag>
                                        <Add onClick={(e) => handleChange(e, id)}>+</Add>
                                    </Image>
                                    <Title>{name}</Title>
                                    <Details>
                                        <Icon src={"../../assets/icons/149220.svg"}/>
                                        <Body1>{`${qualification} -  $${price}`}</Body1>
                                    </Details>
                                </Body>
                            </Container>
                        );
                    }
                )}
        </Carousel>
    )
}

export default Products;