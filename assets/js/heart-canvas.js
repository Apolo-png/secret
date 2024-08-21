let queryData = getSearchData();
console.log(queryData);
let animateHeartCanvas = new AnimateHeartCanvas(
  Number(-20),
  Number(0),
  Number(50),
  Number(100),
  Number(300),
  queryData.bgColor
);
function getSearchData() {
  let searchString = location.search;
  if (searchString) {
    let obj = {};
    searchString = searchString.substring(1, searchString.length);
    let tempArray = searchString.split("&");
    tempArray.forEach((item) => {
      obj[item.split("=")[0]] = decodeURIComponent(item.split("=")[1]);
    });
    return obj;
  } else {
    return false;
  }
}
