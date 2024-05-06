import { Toaster } from 'react-hot-toast';
import '../assets/css/reset.css';
import { CountryApp } from '../components/country-app/country-app';
import { MyHeader } from '../components/header/header';

export default function MainPage() {
  return (
    <>
      <MyHeader />
      <CountryApp />
      <Toaster />
    </>
  );
}
