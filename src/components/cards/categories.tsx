import React from 'react'
import tw from "tailwind-styled-components"
import Carousel from "react-elastic-carousel";
import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import {change} from "../../redux/selectedReducer";

const Container = tw.div` 
    w-1/9 
    h-48
    m-1 
    rounded-full
`
const Body = tw.div`
    h-36 
    p-2 
    rounded-full 
    shadow-xl 
    rounded-md 
    overflow-hidden 
    text-center 
    pointer 
    border-gray-500 
    cursor-pointer
`
const Icon = tw.div`
    h-16 
    w-16 
    p-4 
    border 
    border-gray-200 
    bg-white 
    rounded-full 
    flex 
    justify-center 
    items-center
`

const Title = tw.div`
    w-full 
    h-full 
    text-black 
    text-sm 
    font-bold 
    py-2
`

const Img = tw.img`
     h-6 
     w-6
     inline 
     font-bold
`;

const Next = tw.img`
     -mt-1
     h-3
     w-3
     inline 
     font-bold
`;

const Arrow = tw.button`
     h-10 
     w-10
     mt-16
     bg-gray-100
     rounded-md 
     font-bold
`;

const breakPoints = [
    {width: 1, itemsToShow: 2},
    {width: 550, itemsToShow: 5},
    {width: 768, itemsToShow: 8},
    {width: 1200, itemsToShow: 8}
];

const Categories: React.FC = () => {

    const dispatch = useAppDispatch()
    const categories = useAppSelector(state => state.categories.value)
    const selected = useAppSelector(state => state.selected.value)

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        dispatch(change(newValue))
    };

    // @ts-ignore
    const myArrow = ({type, onClick, isEdge}) => {
        console.log(type)
        // const pointer = type === consts.PREV ? '👈' : '👉'
        return (
            <>
                {type === 'NEXT' &&
                <Arrow onClick={() => onClick()} disabled={isEdge}>
                    <Next src={'../../assets/icons/118740.svg'}/>
                </Arrow>
                }
            </>
        )
    }

    return (
        <Carousel className={"-mt-5 flex items-center"}
                  breakPoints={breakPoints}
                  pagination={false}
                  itemsToShow={8}
                  renderArrow={myArrow}
                  autoPlaySpeed={2000}
                  isRTL={false}
        >
            {categories.map(({id, name, icon}) => {
                    return (
                        <Container key={id} onClick={(e) => handleChange(e, id.toString())}>
                            <Body className={id.toString() === selected.toString() ? 'bg-yellow-400' : 'bg-white'}>
                                <Icon><Img src={icon}/></Icon>
                                <Title>{name}</Title>
                            </Body>
                        </Container>
                    );
                }
            )}
        </Carousel>
    )
}

export default Categories;