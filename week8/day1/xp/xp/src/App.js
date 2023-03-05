import React from 'react';
import Exercise4 from './Exercise4';


export function App() {
  return (
    <div>
      <Exercise4 />
    </div>
  );
}
// export function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals : ['Horse','Turtle','Elephant','Monkey']
//   };

//   function UserFavoriteAnimals(props) {
//     const favorites = props.favorites;
//     return (
//       <ul>
//         {favorites.map((animal) => (
//           <li key={animal}>{animal}</li>
//         ))}
//       </ul>
//     );
//   }

//   return(
//     <>
//       <h3>{user.firstName}</h3>
//       <h3>{user.lastName}</h3>
//       <UserFavoriteAnimals favorites={user.favAnimals} />
//     </>
//   );
// }

// App()
