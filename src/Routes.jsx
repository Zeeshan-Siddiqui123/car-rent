import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Index from "./Screens/Index";
import Rent from "./Screens/Rent";
import Works from "./Screens/Works";

export const routes = [
    {
        path: "/",
        screen: <Index/>,
        label: "Home",
    },
    {
        path: "/rent-a-car",
        screen: <Rent/>,
        label: "Rent a car",
    },
    {
        path: "/how-it-works",
        screen: <Works/>,
        label: "How it works",
    },
    {
        path: "/about",
        screen: <About/>,
        label: "About Us",
    },
    {
        path: "/contact",
        screen: <Contact/>,
        label: "Contact",
    },    
]
