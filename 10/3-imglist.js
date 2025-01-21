//img
(function () {
  const baseUrl = `../img/10/Omae no Kaa-chan Ikutoki no Kao Sugee Busu da zo w/Omae no Kaa-chan Ikutoki no Kao Sugee Busu da zo w 3 + Omake (decensored)/`;
  const imgList = [];
  for (let i = 1; i <= 43; i++) {
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
