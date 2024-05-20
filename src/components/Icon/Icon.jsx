import Icons from '../../images/sprite.svg';

export const Icon = ({ className, id, width = 20, height = 20 }) => {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${Icons}#icon-${id}`}></use>
    </svg>
  );
};
