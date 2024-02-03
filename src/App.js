import NavBar from './components/NavBar';
import SocialNav from './components/SocialNav';
import CustomFooter from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <SocialNav />
      <NavBar />
      <Home className="flex-grow" />
      <CustomFooter />
    </div>
  );
}

export default App;
