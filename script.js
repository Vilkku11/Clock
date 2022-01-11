console.log("testi");

const tableBody = document.getElementById("h2");

const MyAsyncFunction = async () => {
  console.log("Entering asyncfunction");

  const response = await fetch("http://worldtimeapi.org/api/ip");

  const Data = await response.json();
  console.log(Data);
};
MyAsyncFunction();
