import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";

function Cards(){
const commentOne =[
    {
        user:"anna",
        text:"super!",
        id:1,
    },
    {
        user:"tamudu",
        text:"Nice!",
        id:2,
    },
    {
        user:"cheli",
        text:"mamma mia!",
        id:3,
    },
    ];
    const commentTwo =[
        {
            user:"anna12",
            text:"suuuper!",
            id:1,
        },
        {
            user:"tamudu2",
            text:"Niceeeeeeee!",
            id:2,
        },
        {
            user:"cheli3",
            text:"mammaa miaaa!",
            id:3,
        },
    
        ];
    const commentThree =[
            {
                user:"anna33",
                text:"supeeeer!",
                id:1,
            },
            {
                user:"tamudu33",
                text:"Niiiice!",
                id:2,
            },
            {
                user:"cheli33",
                text:"mammmmma mmmia!",
                id:3,
            },
        
    ];

    return ( <div className="cards">
        <Stories/>

        <Card 
        accountName="Sarvanib"
        storyBorder={true}
        image="https://picsum.photos/800/900"
        comments={commentOne}
        likedByText="aksually8"
        likedByNumber={99}
        hours={1}
        />

       <Card 
        accountName="SreeramC"
        storyBorder={true}
        image="https://picsum.photos/900"
        comments={commentTwo}
        likedByText="Hamiltonlw"
        likedByNumber={89}
        hours={11}
        />

        <Card 
        accountName="YukthaB"
        storyBorder={true}
        image="https://picsum.photos/950"
        comments={commentThree}
        likedByText="Haaland"
        likedByNumber={199}
        hours={15}
        />


    </div>
    );
}

export default Cards;