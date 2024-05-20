import { FormField, Icon } from '../';

export const FormCheckbox = ({
  name,
  options = ['ac', 'automatic', 'kitchen', 'tv', 'shower'],
}) => {
  return (
    <>
      {options.map(el => (
        <FormField key={`${name}-${el}`} type="checkbox" name={name}>
          <Icon id={el} />
        </FormField>
      ))}
    </>
  );
};
