import { useAppDispatch, useAppSelector } from '../../app/store';
import { renderBreed, renderNumber, renderSubBreed } from '../../helpers';
import Button from '../Button/Button';
import { DogFormContainer } from './dog-styles';
import DropDown from './Dropdown/DropDown';
import { DropdownContainer } from './Dropdown/dropdown-styles';

const DogForm = () => {
  const dispatch = useAppDispatch();
  const { breedList, subBreedList, images, number, isLoading, error, breed, subBreed } =
    useAppSelector(state => state.dog);

  return (
    <>
      <DogFormContainer>
        <DropDown title='Select a Breed' showError={error}>
          <select value={breed} onChange={e => renderBreed(e.target.value, dispatch)}>
            <option value=''>Select Breeds</option>

            {breedList &&
              breedList.map((breed, index) => (
                <option key={index} value={breed}>
                  {breed}
                </option>
              ))}
          </select>
        </DropDown>

        {subBreedList.length > 0 && (
          <DropDown title='Select a Sub Breed'>
            <select
              value={subBreed}
              onChange={e => renderSubBreed(e.target.value, dispatch)}
            >
              <option value='all'>Select Sub Breeds</option>

              {subBreedList &&
                subBreedList.map((subBreed, index) => (
                  <option key={index} value={subBreed}>
                    {subBreed}
                  </option>
                ))}
            </select>
          </DropDown>
        )}

        <DropDown title='Number of Images'>
          <select value={number} onChange={e => renderNumber(e.target.value, dispatch)}>
            <option value=''>Select Sub Breeds</option>

            {Array.from({ length: 50 }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </DropDown>

        <Button />
      </DogFormContainer>
    </>
  );
};

export default DogForm;
