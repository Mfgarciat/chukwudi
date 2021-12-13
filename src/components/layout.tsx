import React, { useState, useEffect } from 'react';
import tw from "tailwind-styled-components"
import Navbar from "./navbar";
import Orders from "./orders";
import {useAppDispatch, useAppSelector} from '../redux/hooks'
import {setCategories} from "../redux/categoriesReducer"
import {setProducts} from "../redux/productsReducers"

const Container = tw.div`
    flex
    flex-wrap
    w-screen
    h-screen
    container 
    mx-auto
`
const Sectionone = tw.div`
    2xl:w-3/4 xl:w-3/4 lg:w-2/4 md:w-screen sm:w-screen xs:w-screen
    h-full
    bg-white
    p-2
`

const Sectiontwo = tw.div`
    2xl:w-1/4 xl:w-1/4 lg:w-2/4 md:w-screen sm:w-screen xs:w-screens
    bg-yellow-50 
    bg-opacity-25
    border-l-2
    border-gray-100
    h-full
    p-2
`

const Layout: React.FC = (props) => {
    const dispatch = useAppDispatch();


    useEffect(() => {
       
        fetch(`/data/categories.json`,{headers: {"Content-Type": "application/json","Accept": "application/json",}})
        .then(response => response.json())
        .then(data => 
            dispatch(setCategories(data))

          
        )

        fetch(`/data/products.json`,{headers: {"Content-Type": "application/json","Accept": "application/json",}})
        .then(response => response.json())
        .then(data => 
            dispatch(setProducts(data))

          
        )

        
    },[])

    return (
        <Container>
            <Sectionone>
                <Navbar/>
            </Sectionone>
            <Sectiontwo>
                <Orders/>
            </Sectiontwo>
        </Container>
    )
}

export default Layout;