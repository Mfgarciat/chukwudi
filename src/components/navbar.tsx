import React from "react";
import tw from "tailwind-styled-components"
import Categories from "./cards/categories";
import Products from "./cards/products";

const Container = tw.div`
    flex 
    flex-wrap 
    px-20 
    h-16`

const Grid = tw.div`
    bg-white-200 
    py-4 
    h-auto 
    flex 
    flex-wrap`

const GridCenter = tw.div`
    w-full 
    items-center
    bg-white-200 
    py-4 
    h-auto 
    flex 
    flex-wrap`

const Search = tw.div`
    relative
     w-full 
     h-14 
     text-gray-600 
     focus-within:text-gray-400
    `
const InputSearch = tw.input`
    w-full 
    h-12 
    py-2 
    text-sm 
    bg-gray-100 
    rounded-md 
    pl-12 
    focus:outline-none 
    focus:text-gray-500
`
const Span = tw.span`
    absolute 
    inset-y-0 
    left-0 
    h-12 
    flex 
    items-center 
    pl-3 
    pr-5
`
const Button = tw.button`
    p-1 
    focus:outline-none 
    focus:shadow-outline 
    flex 
    items-center`

const ButtonSB = tw.button`
    w-36 p-1  
    focus:outline-none 
    focus:shadow-outline 
    text-orange-500 
    font-bold`

const ButtonB = tw.button`
    w-50 h-10 
    p-1 
    bg-orange-500 
    font-bold 
    rounded-full 
    text-white 
    text-xs 
    px-4 
    flex 
    items-center`

const Banner = tw.div`
    flex 
    flex-wrap 
    h-44 
    bg-orange-100 
    bg-opacity-50
    w-full py-2 
    text-sm 
    rounded-lg 
    mt-10`

const Title = tw.div`
    w-full 
    h-full 
    text-xl 
    flex 
    items-center 
    text-black 
    text-xl 
    font-bold `

const TitleSections = tw.div`
    w-auto 
    h-full 
    text-3xl 
    flex 
    items-center 
    text-black 
    text-xl 
    font-bold 
    py-6 `

const Subtitle = tw.div`
    text-orange-500 
    text-2xl 
    font-bold 
    px-auto 
    text-center`

const Body1 = tw.div`
    w-full 
    text-gray-500 
    text-md 
    px-auto 
    text-center`

const Img = tw.img`
     h-4
     ml-2
     w-4
     inline `

const ImgBanner = tw.img`
     absolute 
     h-48 
     w-50 
     inline 
     -mt-10 
      `

const ImgTitle = tw.img`
     h-8 
     w-8 
     ml-4 
     inline 
     font-bold 
      `

const ImgDelivery = tw.img`
     h-4 
     w-4 
     mr-2 
     inline 
      `
const ImgBirthday = tw.img`
    h-6
    w-6 
    ml-2 
    inline`

const ImgMenu = tw.img`
    h-3
    w-3 
    ml-2 
    object-cover
    inline`

const Navbar: React.FC = () => {
    return (
        <Container>
            <Grid className={"w-1/4"}>
                <Grid className={"w-1/4 justify-center items-center"}>
                    <ImgMenu src={"../../assets/images/menu.png"}/>
                </Grid>
                <Grid className={"w-3/4"}>
                    <Title>Chuckwudi</Title>
                </Grid>
            </Grid>
            <Grid className={"w-3/4"}>
                <Search>
                    <Span>
                        <Button type="submit">
                            <Img src={"../../assets/icons/126474.svg"}/>
                            {/*<Img src={"../../assets/icons/126474.svg"}/>*/}
                        </Button>
                    </Span>
                    <InputSearch id={"search"} type="text" placeholder="Search"/>
                </Search>
            </Grid>
            <Grid className={"w-full"}>
                <Banner>
                    <Grid className={"w-1/4 justify-center"}>
                        <ImgBanner src={"../../assets/images/headerimage.png"}/>
                    </Grid>
                    <Grid className={"w-2/4 items-center justify-center py-12"}>
                        <Subtitle>
                            $0 delivery for 30 days!
                            <ImgBirthday src={"../../assets/images/d.png"}/>
                        </Subtitle>
                        <Body1> $0 delivery free for orders over $10 for 30 days!</Body1>
                    </Grid>
                    <Grid className={"w-1/4 items-end"}>
                        <ButtonSB>
                            Learn more
                            <Img src={"../../assets/icons/arrow-orange.svg"}/>
                        </ButtonSB>
                    </Grid>
                </Banner>
                <GridCenter>
                    <Grid className={"w-3/4 items-center"}>
                        <TitleSections>Restaurants</TitleSections>
                        <ImgTitle src={"../../assets/icons/1046784.svg"}/>
                    </Grid>
                    <Grid className={"w-1/4 justify-end"}>
                        <ButtonB>
                            <ImgDelivery src={"../../assets/icons/reloj-white.svg"}/>
                            {`Delivery: Now`}
                            <ImgDelivery className={"w-3 h-3 ml-5 mt-1"} src={"../../assets/icons/arrow-down.png"}/>
                        </ButtonB>
                    </Grid>
                </GridCenter>
                <GridCenter>
                    <Categories/>
                </GridCenter>
                <GridCenter>
                    <Products/>
                </GridCenter>
            </Grid>
        </Container>
    )
}

export default Navbar;