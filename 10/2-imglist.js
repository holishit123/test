//img
(function () {
  const baseUrl = `../img/10/Omae no Kaa-chan Ikutoki no Kao Sugee Busu da zo w/Omae no Kaa-chan Ikutoki no Kao Sugee Busu da zo w 2 + C103 Omake Jukai Yokoku-teki na Paper/`;
  const imgList = [];
  for (let i = 1; i <= 37; i++) {
    imgList.push(`${baseUrl}${i}.jpg`);
  }

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
