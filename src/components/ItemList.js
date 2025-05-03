const ItemList = ({items, categoryId}) => {
    return (
        <div key={`category-${categoryId}-items`}>
            {items.map((item) => {
               return <div key={item?.card?.info?.id}
                     className="w-6/12 mx-auto my-4 flex justify-between">
                    <span>{item?.card?.info?.name}</span>
                </div>
            })
            }
        </div>
    );
};

export default ItemList;