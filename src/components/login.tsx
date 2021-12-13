import React, {FC} from 'react';
import Modal from 'react-modal';
import tw from "tailwind-styled-components";

interface Styles {
    content: {},
    overlay: {},
}

const customStyles: Styles = {
    content: {
        width: '35rem',
        overflowX: 'hidden',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgb(38 36 36 / 75%)',
    }
};


const Title = tw.div`
    w-full 
    h-full 
    flex 
    justify-center 
    text-black 
    text-xl 
    font-bold`

const Subtitle = tw.div`
    w-full 
    h-full 
    flex 
    justify-center 
    text-black 
    text-sm 
    my-5`

const Contenido = tw.button`
    w-full 
    px-20 
    text-sm 
    flex 
    flex-wrap 
    items-center 
    jsutify-center`

const Grid = tw.button`
    w-full 
    px-20 
    text-sm 
    flex 
    flex-wrap 
    items-center 
    jsutify-center`

const Line = tw.button`
    w-full 
    border-b-2`

const Google = tw.button`
    w-48 
    h-10 
    m-2 
    text-sm 
    flex 
    items-center 
    justify-center 
    text-center 
    text-white 
    bg-red-500 
    font-bold 
    rounded-full 
    shadow-xl `

const Twitter = tw.button`
    w-48 
    h-10 
    m-2 
    text-sm
    flex 
    items-center 
    justify-center 
    text-center 
    text-white 
    bg-blue-500 
    font-bold 
    rounded-full 
    shadow-xl`


// @ts-ignore
interface Props {
    open: boolean,
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void,
    google: (event: React.MouseEvent<HTMLButtonElement>) => void,
    twitter: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Login: FC<Props> = (props) => {
    // @ts-ignore
    const {open, onClose, google, twitter} = props;
    const [modalIsOpen, setIsOpen] = React.useState(open);


    // @ts-ignore
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={onClose}
            style={customStyles}
        >
            <Title>Inicio de Sesión</Title>
            <Line></Line>
            <Subtitle>Inicia sesión con tus redes sociales</Subtitle>
            <Contenido>
                <Grid>
                    <Google onClick={google}>
                        Gmail
                    </Google>
                </Grid>
                <Grid>
                    <Twitter onClick={twitter}>
                        Twitter
                    </Twitter>
                </Grid>
            </Contenido>

        </Modal>

    );
}

export default Login;