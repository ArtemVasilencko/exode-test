import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      currency
      emoji
      languages {
        name
      }
      continent {
        name
      }
      capital
      phone
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query country($countryCode: String!) {
    countries(filter: { code: { eq: $countryCode } }) {
      code
      name
      emoji
      currency
      languages {
        name
      }
      continent {
        name
      }
      capital
      phone
    }
  }
`;
