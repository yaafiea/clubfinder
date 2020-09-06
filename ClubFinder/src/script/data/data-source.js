import clubs from './clubs.js';

class DataSource {
    static async searchClub(keyword) {
        // return new Promise((resolve, reject) => {
        //     const filteredClubs = clubs.filter((club) => {
        //         return club.name.toUpperCase().includes(keyword.toUpperCase());
        //     });

        //     if (filteredClubs.length) {
        //         resolve(filteredClubs);
        //     } else {
        //         reject(`${keyword} is not found`);
        //     }
        // })

        const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`);
        const responseJson = await response.json();
        if (responseJson.teams) {
            return Promise.resolve(responseJson.teams);
        } else {
            return Promise.reject(`${keyword} is not found`);
        }
    }
}
export default DataSource;