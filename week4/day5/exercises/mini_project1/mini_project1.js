const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    const filCards = (event) => {
        console.log(event.target.value);
        const filArray = robots.filter(x => {
          return x.name.toLowerCase().includes(event.target.value.toLowerCase()) || x.username.toLowerCase().includes(event.target.value.toLowerCase());
        });
        createCards(filArray);
      }
      
      const container = document.querySelector('#container');
      const input = document.querySelector('#searchBar');
      
      input.addEventListener('input', filCards);
      
      function createCards(robots) {
        container.innerHTML = "";
      
        robots.forEach((element, index, array) => {
          let card = document.createElement('div');
          card.setAttribute('class', 'card');
          card.setAttribute('id', element.id); 
      
          let image = document.createElement('img');
          image.setAttribute('src', element.image);
          card.appendChild(image);
      
          let pName = document.createElement("p");
          let pEmail = document.createElement("p");
          let cardName = document.createTextNode(element.name);
          let cardEmail = document.createTextNode(element.email);
          pName.appendChild(cardName);
          pEmail.appendChild(cardEmail);
          card.appendChild(pName);
          card.appendChild(pEmail);
          container.appendChild(card);
        });
      }
      
      createCards(); 
      