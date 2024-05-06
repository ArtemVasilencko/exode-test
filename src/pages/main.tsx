import { CountryApp } from '../components/country-app/country-app';
import { MyHeader } from '../components/header/header';
import '../assets/css/reset.css';

export default function MainPage() {
  return (
    <>
      <MyHeader />
      <CountryApp />
    </>
  );
}
