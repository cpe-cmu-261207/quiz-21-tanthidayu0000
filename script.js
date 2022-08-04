const Random = document.querySelector("#btn-random")
const ImgProfile = document.querySelector("#img-profile")
const UserCard = document.querySelector("#div-user-card")
const LoadingCard = document.querySelector("#div-loading-card")
const Name = document.querySelector("#p-name")
const Email = document.querySelector("#p-email")
const Address = document.querySelector("#p-address")
const GenderI = document.querySelector("#span-gender-icon")

callApi();

async function callApi() 
{
  UserCard.style.display = "none";
  LoadingCard.style.display = "";
  const resp = await axios.get("https://randomuser.me/api/");
  UserCard.style.display = "";
  LoadingCard.style.display = "none";
  const data = resp.data.results[0]
  ImgProfile.src = data.picture.large;
  Name.innerText = ${data.name.first} ${data.name.last} ;
  Address.innerText =  `${data.location.city} ${data.location.state}${data.location.country} ${data.location.postcode}`;
  Email.innerText = data.email;

  if(resp.data.results[0].gender === "male") {GenderI.innerText = "👨";}
  else{GenderI.innerText = "👩";}
}
Random.onclick =  async ()=>
{
  await callApi();
};
