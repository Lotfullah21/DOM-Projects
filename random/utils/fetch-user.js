const url = "https://randomuser.me/api/";
const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { email, phone } = person;
  const {
    picture: { large: image },
  } = person;
  const { password } = person.login;
  const { first: firstName, last: lastName } = person.name;
  const { age } = person.dob;
  const { number, name } = person.location.street;
  return {
    image,
    email,
    phone,
    password,
    name: `${firstName} ${lastName}`,
    street: `${number} ${name}`,
    age,
  };
};

export default getUser;
