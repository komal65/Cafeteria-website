import idli from "./photos/idli.png";
import  idlisambar from "./photos/Idli_Wada_Sambar1.png"
import  meduwada from "./photos/Medu_Wada_Sambar1.png"
import wadasambar from "./photos/Batata_Wada_Sambar1.png"
import breadbutter from "./photos/Bread_Butter1.png";
import breadpatties from "./photos/Bread_Patties1.png"
import Chapatibhaji from "./photos/Chapati_Bhaji1.png";
import coffee from "./photos/Coffee1.png"
import dalkhichadi from "./photos/Dal_Khichadi1.png";
import friedrice from "./photos/Fried_Rice1.png"
import fullthali from "./photos/Full_Thali1.png";
import Misalpav from "./photos/Misal_Pav1.png"
import poha from "./photos/Poha1.png";
import samosa from "./photos/Samosa1.png"
import specialthali from "./photos/Special_Thali1.png";
import tea from "./photos/Tea1.png"
import upma from "./photos/Upma1.png";
import  vadapav from "./photos/wadapav.jpg"

const fooditem = [
    {
        id:1,
        name:"Wada Pav",
        description:"Tasty Wada Pav",
        imgpath:vadapav,
        price:15
    },
    {
        id:2,
        name:"Samosa",
        description:"Crispy Samosa",
        imgpath:samosa ,
        price:17

    },
    {
        id:3,
        name:"Poha",
        description:"Kanda Pohe",
        imgpath:poha,
        price:25
    },
    {
        id:4,
        name:"Upma",
        description:"Upma",
        imgpath:upma,
        price:25
    },
    {
        id:5,
        name:"Batata Wada Sambar",
        description:"Batata Wada Sambar",
        imgpath:wadasambar,
        price:35

    },
    {
        id:6,
        name:"Idli Sambar",
        description:"Idli Sambar",
        imgpath:idli,
        price:45
    },
    {
        id:7,
        name:"Idli Wada Sambar",
        description:"Idli Wada Sambar",
        imgpath: idlisambar,
        price:35
    },
    {
        id:8,
        name:"Medu Wada Sambar",
        description:"Medu Wada Sambar",
        imgpath:meduwada,
        price:35

    },
    {
        id:9,
        name:"Misal Pav",
        description:"Misal Pav",
        imgpath:Misalpav,
        price:55
    },
    {
        id:10,
        name:"Bread Patties",
        description:"Bread Patties",
        imgpath:breadpatties,
        price:20
    },
    {
        id:11,
        name:"Chapati Bhaji",
        description:"Chapati Bhaji",
        imgpath: Chapatibhaji,
        price:40
    },
    {
        id:12,
        name:"Full Thali",
        description:"Full Thali",
        imgpath:fullthali,
        price:70
    },
     {
        id:13,
        name:"Special Thali",
        description:"Special Thali",
        imgpath:specialthali,
        price:100
    },
     {
        id:14,
        name:"Fried Rice",
        description:"Fried Rice",
        imgpath:friedrice,
        price:55
    },
     {
        id:15,
        name:"Dal Khichadi",
        description:"Dal Khichadi",
        imgpath: dalkhichadi,
        price:55
    },
    {
        id:16,
        name:"Coffee",
        description:"Hot Coffee",
        imgpath: coffee,
        price:20
    },
    {
        id:17,
        name:"Tea",
        description:"Tea",
        imgpath:tea,
        price:12
    },
    {
        id:18,
        name:"Bread Butter",
        description:"Bread Butter",
        imgpath:  breadbutter,
        price:20
    }
];

export default fooditem;