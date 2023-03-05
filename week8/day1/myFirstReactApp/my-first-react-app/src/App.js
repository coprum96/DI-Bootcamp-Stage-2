import logo from './logo.svg';
import './App.css';
import Hello from './hello';
// import Car from './Car';
import Actor from './Actor';
import './Actor.css'


const App = () => {
  const actors = [
    {
      firstName: 'Tom',
      lastName: 'Hanks',
      // image: logo
      image: 'https://pyxis.nymag.com/v1/imgs/a04/de0/a4fd1320fa31b11ef5198c647e79e54c00-tom-hanks.rhorizontal.w700.jpg',
    },
    {
      firstName: 'Leonardo',
      lastName: 'DiCaprio',
      // image: logo
      image: 'https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg',
    },
    {
      firstName: 'Tom',
      lastName: 'Hardy',
      // image: logo
      image: 'https://flxt.tmsimg.com/assets/269411_v9_bd.jpg',
    },
  ];
  return (
    <div>
      {actors.map(actor => (
        <Actor actors={''} {...actor} />
      ))}
    </div>
  );
};

export default App;
