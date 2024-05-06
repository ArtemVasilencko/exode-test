import { LanguageType } from '../models/countries-types';

interface CountryCardLanguagesListPropsI {
  data: LanguageType[];
}

export function CountryCardLanguagesList({
  data
}: CountryCardLanguagesListPropsI) {
  return (
    <ul className='country__card__languages__list'>
      {data.map((item, index) => (
        <li className='country__card__languages__list-item' key={index}>
          {`${item.name}${index !== data.length - 1 ? ', ' : ''}`}
        </li>
      ))}
    </ul>
  );
}
