import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [{
        _id: uuid(),
        categoryName: "Staples",
        description: "literature in the form of prose, especially novels, that describes imaginary events and people",
        imageLink: "https://rukminim1.flixcart.com/flap/128/128/image/50474c.jpg?q=100"
    },
    {
        _id: uuid(),
        categoryName: "Snacks",
        description: "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
        imageLink: "https://rukminim1.flixcart.com/flap/128/128/image/9fbd36.jpg?q=100"
    },
    {
        _id: uuid(),
        categoryName: "Dairy&Eggs",
        description: "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
        imageLink: "https://rukminim1.flixcart.com/flap/128/128/image/8014b1.jpg?q=100"
    },
    {
        _id: uuid(),
        categoryName: "Vegetables",
        description: "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
        imageLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.G8f4DulC-TuHudsCxHSwjgHaHa%26pid%3DApi&f=1"
    }
];