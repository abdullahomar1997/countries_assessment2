export const countriesTransform = (results = [] ) => {
    const mappedResults = results.map((country,index) => {
        return {
            // ...country,
            id:index,
            name:country.name.common,
            capital:country.capital,
            region:country.region,
            subregion:country.subregion,
            population:country.population,
            area:country.area,
            timezones:country.timezones,
            // nativename: country.name.nativeName && Object.values(country.name.nativeName)[0].official,
            flag:country.flags.png,

        };
    })
    return mappedResults;
}