import '../src/assets/css/reset.css';
import { CountryApp } from './components/country-app/country-app';
import { MyHeader } from './components/header/header';

export default function App() {
  return (
    <>
      <MyHeader />
      <CountryApp />
    </>
  );
}
