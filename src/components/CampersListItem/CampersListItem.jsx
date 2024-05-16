export const CampersListItem = ({ id, name, price, rating }) => {
  const handleClickShowMore = () => console.log(id);

  const handleClickAddToFavorites = () => console.log('add to favorites');

  return (
    <li>
      <div>
        <img />
        <h3>{name}</h3>
        <span>{price}</span>
        <button type="button" onClick={handleClickAddToFavorites}>
          Heart
        </button>
        <p>{rating}</p>
        <p>Location</p>
        <p>Description</p>
        <p>categories</p>
        <button type="button" onClick={handleClickShowMore}>
          Show more
        </button>
      </div>
    </li>
  );
};
