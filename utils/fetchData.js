const URL = "https://randomuser.me/api/";

const fetchData = async () => {
  const data = await fetch(URL);
  const response = await data.json();
  const filteredData = await response.results[0];

  const { first, last } = filteredData.name;
  const { email } = filteredData;
  const { age } = filteredData.dob;
  const { number, name } = filteredData.location.street;
  const { phone } = filteredData;
  const { password } = filteredData.login;
  const { large } = filteredData.picture;

  return {
    name: first + " " + last,
    email,
    dob: age,
    cell: phone,
    login: password,
    location: number + name,
    large,
  };
};

export default fetchData;
