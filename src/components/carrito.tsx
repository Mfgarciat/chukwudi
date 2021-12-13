import React from 'react'
import tw from "tailwind-styled-components"
import {useAppDispatch, useAppSelector} from '../redux/hooks'
import {decrement, increment} from "../redux/personasReducer";

const Container = tw.div` 
    w-full 
    my-1 
    mx-12`

const Body = tw.div`
   flex 
   flex-wrap 
   w-full 
   h-50 
   rounded 
   overflow-hidden 
   cursor-pointer`

const Body1 = tw.div`
     h-12 
     text-black 
     text-xs 
     font-bold 
     items-center 
     flex 
     justify-center`

const Body2 = tw.div`
     h-auto 
     text-black 
     text-xs 
     font-bold 
     items-center 
     flex 
     justify-start 
     ml-2
`

const Price = tw.div`
     h-12 
     text-gray 
     text-xs 
     font-bold 
     items-center 
     flex 
     justify-end 
     ml-2
`

const Image = tw.div`
  relative 
  flex 
  h-auto 
  w-1/4 
  items-center 
  justify-center
`;

const ImageList = tw.div`
  relative 
  flex 
  h-auto 
  w-1/4 
  items-center 
  justify-center
  bg-yellow-500 
  bg-opacity-25 
  rounded-sm 
  object-cover 
  mx-1 
  h-8 
  w-14 
  rounded-sm
`;

const Details = tw.div`
   w-3/4 
   flex 
   items-center 
   text-gray-500 
   pl-1
`;

const Lista = tw.div`
    flex 
    h-64 
    mt-16 
    flex-wrap
`;

const Grid = tw.div`
    py-4 
    h-auto 
    w-full 
    flex 
    flex-wrap 
    px-10`

const GridTotal = tw.div`
    py-4 
    h-auto 
    w-full 
    flex 
    flex-wrap 
    w-2/4 
    mt-10 
    items-end 
    px-10`

const Persons = tw.div`
    
    border-gray-100 
    border-2 
    rounded-md 
    items-center 
    h-9 
    w-full 
    flex 
    flex-wrap `

const Checkout = tw.div`
    w-2/4 
    mt-10 
    h-20 
    bg-yellow-400 
    rounded-l-md 
    flex 
    items-center 
    justify-center`

const Total = tw.div`
    text-black-500 
    text-xl`

const Text = tw.div`
    text-black-500 
    font-bold 
    text-sm`

const TextCantidad = tw.div`
    font-bold 
    w-2/4 
    text-center 
    text-gray-600 
    text-sm
    text-sm`


const Valor = tw.div`
    text-black-500 
    text-2xl 
    font-bold`

const Line = tw.div`
    w-full 
    border-b-2 
    border-gray 
    ml-10`

const Btn = tw.button`
    -mt-1
    text-gray-600 
    text-xl 
    font-bold 
    items-center 
    h-8 
    w-1/4 
`;

const ImgList = tw.img`
    h-8 
    w-14 
    rounded-sm 
    object-cover
`;

const Msg = tw.div`
    w-full
    text-black-500 
    font-bold
    text-center
    text-sm
    mx-20
`;

const Carrito: React.FC = () => {

    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.products.value)
    const personas = useAppSelector(state => state.personas.value)
    const carrito = useAppSelector(state => state.carrito.value)
    let total = 0.00;

    // @ts-ignore
    return (
        <Lista>
            {carrito.map(({id, cantidad}) => {
                    let item = products.filter(x => x.id === id)[0];
                    console.log(item)
                    total += cantidad * item.price;
                    return (
                        <Container key={id}>
                            <Body>
                                <Image>
                                    <ImgList src={item.image}/>
                                </Image>
                                <Details>
                                    <Body1 className={"w-1/4"}>{`${cantidad}   X `}</Body1>
                                    <Body2 className={"w-2/4"}>{`${item.name} `}</Body2>
                                    <Price className={"w-1/4"}>{`$${cantidad * item.price}`}</Price>
                                </Details>
                            </Body>
                        </Container>
                    );
                }
            )}
            {carrito.length > 0 ?
                <>
                    <Container>
                        <Body>
                            <ImageList>
                                <img src={'../../assets/icons/car.png'}
                                     className=" h-5 w-5"/>
                            </ImageList>
                            <Details>
                                <Body1 className={"w-3/4"}>{`Delivery `}</Body1>
                                <Price className={"w-1/4"}>{`$0.00`}</Price>
                            </Details>
                        </Body>
                    </Container>

                    <GridTotal>
                        <Total>Total:</Total>
                    </GridTotal>
                    <GridTotal>
                        <Valor>{`$${personas === 0 ? 0 : (total * personas).toFixed(2)}`}</Valor>
                    </GridTotal>

                </>
                : <Msg>No hay productos en el carrito</Msg>
            }
            <Line/>
            <Grid className={"w-2/4 mt-8"}>
                <Text className={"w-full font-100"}>Persons</Text>
                <Persons>
                    <Btn className={"text-left pl-4 "} onClick={() => dispatch(decrement())}>-</Btn>
                    <TextCantidad>{personas}</TextCantidad>
                    <Btn className={"text-right pr-4 "} onClick={() => dispatch(increment())}>+</Btn>
                </Persons>
            </Grid>
            <Checkout>
                <Text>
                    Checkout
                    <img src={"../../assets/icons/109617.svg"}
                         className="h-4 w-4 ml-4 inline font-bold "/>
                </Text>
            </Checkout>
        </Lista>
    )
}

export default Carrito;