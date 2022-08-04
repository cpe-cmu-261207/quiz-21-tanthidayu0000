const btnRandom = document.getElementById("btn-random");
const imgProfile = document.getElementById("img-profile");
const Gender = document.getElementById("span-gender-icon");
const UserCard = document.getElementById("div-user-card");

async function callApi() {
  btnRandom.innerText = "Loading.....";
  btnRandom.disabled = true;
  const resp = await axios.get("https://randomuser.me/api/");
  imgProfile.src = resp.data.message;

  imgProfile.onload = () => {
    btnRandom.innerText = "Generate more..";
    btnRandom.disabled = false;
  };

  function selectgender() {
    if (Gender === male) {
      return "👨";
    } else {
      return "👩";
    }
  }
}

btnRandom.onclick = () => {
  btnRandom.innerText = "Loading Profile..";
  btnRandom.disabled = true;
};
