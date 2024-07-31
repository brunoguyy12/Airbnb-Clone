import countries from "world-countries";

const codeToEmojiFlag = (code: string) => {
    return code.toUpperCase().replace(/./g, char => 
      String.fromCodePoint(127397 + char.charCodeAt(0))
    );
  };

const formattedCountries = countries.map((country)=>({
    value: country.cca2,
    label: country.name.common,
    flag: codeToEmojiFlag(country.cca2),
    latlng: country.latlng,
    region: country.region
}));

const useCountries = ()=>{
    const getAll = ()=> formattedCountries;

    const getByValue = (value: string)=>{
        return formattedCountries.find((item)=> item.value === value);
    }

    return {
        getAll, 
        getByValue
    }
}

export default useCountries;