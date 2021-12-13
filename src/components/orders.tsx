import tw from "tailwind-styled-components"
import React from "react";
import {useAppSelector} from "../redux/hooks";
import Carrito from "./carrito";
import Login from "./login";
import {signInWithGoogle, signInWithTwitter} from "../firebase/init"


const Container = tw.div`
    flex 
    w-full 
    h-12 
    my-4 
    justify-end 
    items-center 
`

const Cantidad = tw.div`
    flex 
    w-9 
    h-9 
    m-4 
    bg-yellow-500 
    justify-end 
    items-center 
    justify-center 
    px-2 
    font-bold 
    text-xs 
    rounded-md 
    mx-10
`
const Title = tw.div`
    w-full 
    h-full 
    text-xl 
    flex 
    items-center 
    text-black 
    text-xl 
    font-bold 
    pt-12 
    mx-10 `

const Usuario = tw.div`
    w-full 
    h-full 
    text-xl 
    flex 
    items-center 
    text-black 
    text-sm 
    font-bold mx-10`

const Details = tw.div`
    flex 
    flex-wrap  
    h-32 my-4 
    bg-purple-800 
    font-bold 
    text-xs 
    rounded-md 
    px-8 
    py-4 
    mx-10
`
const Grid = tw.div`
    py-4 
    h-auto 
    flex 
    flex-wrap`

const ButtonSB = tw.button`
    w-full 
    px-2 
    h-full 
    text-yellow-500 
    font-bold 
    flex`

const Clock = tw.div`
    flex 
    w-9 
    h-9 
    bg-yellow-500 
    bg-opacity-25 
    justify-end 
    items-center 
    justify-center 
    px-2 
    font-bold 
    text-xs 
    rounded-md
`


const Orders: React.FC = (props) => {
    const carrito = useAppSelector(state => state.carrito.value)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [user, setUser] = React.useState('');

    const openModal = () => {
        setIsOpen(false);
    }

    const handleSubmit = (event: any) => {
        setIsOpen(true);
    }


    const handleGloogle = (event: any) => {
        signInWithGoogle().then((res: any) => {
            console.log(res, 'res')
            setUser(res.additionalUserInfo.profile.name);
        }).catch((error: { message: any; }) => {
            console.log(error.message);
        });
    }

    const handleTwitter = (event: any) => {
        signInWithTwitter().then((res: any) => {
            console.log(res, 'res')
            setUser(res.additionalUserInfo.profile.name);
        }).catch((error: { message: any; }) => {
            console.log(error.message);
        });
    }

    return (
        <div>
            <Container>
                <button onClick={handleSubmit}>
                    <img src={"../../assets/icons/747376.svg"}
                         className="h-5 w-5 inline font-bold"/>
                </button>
                <Cantidad>
                    {carrito.length}
                </Cantidad>
            </Container>
            <Usuario>{user}</Usuario>
            <Title>
                My Order
            </Title>
            <Details>
                <Grid className={"w-3/4 h-8 text-white text-left"}>
                    625 St Marks Ave
                </Grid>
                <Grid className={"w-1/4 h-8 "}>
                    <ButtonSB>Edit</ButtonSB>
                </Grid>
                <Grid className={"w-1/4"}>
                    <Clock>
                        <img src={"../../assets/icons/reloj-orange.svg"}
                             className="h-4 w-4 mx-2 inline font-bold "/>
                    </Clock>
                </Grid>
                <Grid className={"w-1/4 items-center"}>
                    <p className={"text-white"}>35 min</p>
                </Grid>
                <Grid className={"w-2/4 items-center"}>
                    <ButtonSB className={"items-center text-right"}>Choose time</ButtonSB>
                </Grid>
            </Details>
            <Carrito/>
            {modalIsOpen &&
            <Login open={modalIsOpen} onClose={openModal} google={handleGloogle} twitter={handleTwitter}/>}
        </div>
    )
}

export default Orders;