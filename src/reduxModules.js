


const initial={
    products:[
        {   
            id:1,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {
            id:2,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:3,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:4,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:5,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:6,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:7,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:8,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:9,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:10,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:11,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        },
        {   
            id:12,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000
        }
    ],
    isDisplayCart:false,
    cart:[
        {   
            id:1,
            rating:"",
            image:"",
            name: "Trà búp",
            price:70000,
            quantity:1
        }
    ]
}

export const reducer = (state = initial,action) =>{
    switch(action.type){
        case "togglecart":
            return{
                ...state,
                isDisplayCart:action.status
            }
        default:
            return state;
    }
}

export const toggleCart =(status) =>{
    return{
        type: "togglecart",
        status: status
    }
}