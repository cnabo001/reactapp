type StoreItemProps = {
    item:{
        id: number;
        title: string;
        price: number;
        description: string;
    };
};

export default function StoreItem({item}: StoreItemProps) {
    return (
        <>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
        </>
    );
}