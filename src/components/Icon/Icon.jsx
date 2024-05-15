import Icons from '../../images/sprite.svg';

export const Icon = ({ id, width = 20, height = 20 }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${Icons}#${id}`}></use>
    </svg>
  );
};
