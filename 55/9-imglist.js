//img
(function () {
  const baseUrl = `../img/55/Lust Flight [Awe-some-ryan]/ss2/`;
  const imgList = [];
  for (let i = 1; i <= 67; i++) {
    imgList.push(`${baseUrl}1/${i}.jpg`);
  }

  //2
  for (let i = 1; i <= 48; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}2/${formattedNumber}.jpg`);
  }

  //3
  for (let i = 1; i <= 33; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}3/${formattedNumber}.jpg`);
  }

  //4
  for (let i = 1; i <= 50; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}4/${formattedNumber}.jpg`);
  }

  //5
  for (let i = 1; i <= 48; i++) {
    const formattedNumber = String(i).padStart(3, "0"); // Định dạng số với 3 chữ số, thêm '0' vào trước nếu cần
    imgList.push(`${baseUrl}4/${formattedNumber}.jpg`);
  }
  

  const imgContainer = document.getElementById("list-img");

  imgList.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("img-fluid", "mb-3");
    imgContainer.appendChild(img);
  });
})();
