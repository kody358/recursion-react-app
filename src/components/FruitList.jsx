import React from "react";
import FruitCard from "./FruitCard";
import "./FruitList.css";

const FruitList = () => {
    const FRUITS = [
        {
            id: 1,
            name: "Orange",
            calorie: 46,
            macro: {
                p: 11.8,
                f: 0.1,
                c: 0.9,
            },
            image: 'https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590_1280.jpg',
        },
        {
            id: 2,
            name: "Apple",
            calorie: 57,
            macro: {
                p: 15.5,
                f: 0.2,
                c: 0.1,
            },
            image: 'https://cdn.pixabay.com/photo/2017/09/26/13/42/apple-2788662_1280.jpg',
        },
        {
            id: 3,
            name: "Kiwi fruit",
            calorie: 53,
            macro: {
                p: 13.5,
                f: 0.1,
                c: 1.0,
            },
            image: 'https://cdn.pixabay.com/photo/2016/05/19/12/38/kiwi-1402844_1280.jpg',
        },
        {
            id: 4,
            name: "Peach",
            calorie: 40,
            macro: {
                p: 10.2,
                f: 0.1,
                c: 0.6,
            },
             image: 'https://cdn.pixabay.com/photo/2016/07/16/20/48/peaches-1522680_1280.jpg'
        },
    ];

    return (
        <div className="fruit-list">
            {FRUITS.map(fruit => (
                <FruitCard key={fruit.id} {...fruit} />
            ))}
        </div>
    );
}

export default FruitList;