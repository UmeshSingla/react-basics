import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    return (
    <div key={data?.categoryId}>
        {/** Header **/}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg flex justify-between">
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="rotate-180">^</span>
        </div>
        { <ItemList items={data?.itemCards} categoryId={data?.categoryId}/> }
    </div>
    );
};

export default RestaurantCategory;