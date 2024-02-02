import axios from "axios";

export async function getCountries() {
    const res = await axios.get("https://restcountries.com/v3.1/all?fields=name");

    return res.data || [];
}
