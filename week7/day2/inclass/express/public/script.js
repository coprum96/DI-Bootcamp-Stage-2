const getData = () => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        showProducts(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  getData();
  
  const showProducts = arr => {
    const html = arr.map(item => {
      return `<div><h1>${item.name}</h1><p>${item.price}</p></div>`;
    });
    document.getElementById('root').innerHTML = html.join('');
  };
  
  const searchWithParams = () => {
    const prodId = document.getElementById('prod_id').value;
    fetch(`http://localhost:5000/api/products/${prodId}`)
      .then(res => res.json())
      .then(data => {
        const arr = [];
        arr.push(data);
        showProducts(arr);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  
  const searchWithQuery = () => {
    const query = document.getElementById('query').value;
    fetch(`http://localhost:5000/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        showProducts(data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  