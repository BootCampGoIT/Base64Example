import './styles.css';

const fileForm = document.forms.fileForm;

function toDataURL(element) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
}

const createbase = (e) => {
  e.preventDefault();
  const element = fileForm.elements.fileFormInput;
  const resultIMG = document.querySelector(".resultIMG");
  toDataURL(element).then(data => {
    resultIMG.src = data;
  });
}

fileForm.addEventListener("submit", createbase)
