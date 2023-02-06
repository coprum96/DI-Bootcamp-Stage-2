(function (username) {
    const navbar = document.querySelector('.navbar-brand');
    const div = document.createElement('div');
    navbar.innerHTML = username;
    let img = document.createElement('img');
    img.src = 'https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg';
    img.style.width = '50px';
    img.style.height = '50px';
    div.appendChild(img);
    navbar.appendChild(div);
  }("John"));
  
