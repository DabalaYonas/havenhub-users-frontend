// import countries from "world-countries";


export const ethioCities = [
  {
    label: "Adama",
    latlng: [8.539542264684352, 39.26787177988691],
    value: 0,
  },
  {
    label: "Addis Ababa",
    latlng: [9.01263061106591, 38.75618524576273],
    value: 1,
  },
  {
    label: "Aksum",
    latlng: [14.121211883738047, 38.73457199593559],
    value: 2,
  },
  {
    label: "Arba Minch",
    latlng: [6.030836689152022, 37.556891272751855],
    value: 3,
  },
  {
    label: "Bishoftu",
    latlng: [8.754458363400385, 38.99512490405881],
    value: 4,
  },
  {
    label: "Gondar",
    latlng: [12.605817053143392, 37.45301505646095],
    value: 5,
  },
];

// const formattedCountries = countries.map((country) => ({
//   value: country.cca2,
//   label: country.name.common,
//   flag: country.flag,
//   latlng: country.latlng,
//   region: country.region,
// }));

export const getCitiesByValue = (value: number) => {
  return ethioCities.find((item) => item.value === value);
};
const useCities = () => {
  // const getAll = () => formattedCountries;

  // return {
  //   getAll,
  //   getByValue,
  // };
  return ethioCities
};

export default useCities;
