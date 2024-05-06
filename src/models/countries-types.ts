export interface CountryI {
  name: string;
  code: string;
  capital: string;
  emoji: string;
  phone: string;
  continent: {
    name: string;
  };
  currency: string;
  languages: LanguageType[];
}

export type LanguageType = {
  name: string;
};
