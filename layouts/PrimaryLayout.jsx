import { Container } from "react-bootstrap";
import { CategoryMenu,TopMenu } from "../components/navigations";
import {LandingFooter} from './footer'

export const PrimaryLayout = ({children})=>{
    return(
        <>
        <TopMenu/>
        <CategoryMenu/>
        {children}
        <LandingFooter/>
        </>
    )
}