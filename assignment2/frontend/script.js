// helpful link for converting image to base64: https://elmah.io/tools/base64-image-encoder/
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const getData = async () => {
  const data = await apiFetch('http://localhost:8080/contacts');
  displayAllData(data);
};

function displayAllData(data) {
const container = document.querySelector('.container')
console.log(data)
}

getData();
