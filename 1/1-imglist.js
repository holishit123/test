//img
const baseUrl = `../img/1/Shiho Nizhizumi - Passion on the Beach/1/`;
const imgList = [
  `${baseUrl}1.jpg`,
  `${baseUrl}2.jpg`,
  `${baseUrl}3.jpg`,
  `${baseUrl}4.jpg`,
  `${baseUrl}5.jpg`,
  `${baseUrl}6.jpg`,
  `${baseUrl}7.jpg`,
  `${baseUrl}8.jpg`,
  `${baseUrl}9.jpg`,
  `${baseUrl}10.jpg`,
  `${baseUrl}11.jpg`,
  `${baseUrl}12.jpg`,
  `${baseUrl}13.jpg`,
  `${baseUrl}14.jpg`,
];

const imgContainer = document.getElementById("list-img");

imgList.forEach((imageUrl) => {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.classList.add("img-fluid", "mb-3");
  imgContainer.appendChild(img);
});
