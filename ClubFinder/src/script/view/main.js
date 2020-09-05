import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
// import clubs from '../data/clubs.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    //ES6 ASYINCRONUS
    // const onButtonSearchClicked = () => {
    //     DataSource.searchClub(searchElement.value)
    //         .then(renderResult)
    //         .catch(fallbackResult)
    // };

    //ES8 async & await
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = (results) => {
        clubListElement.clubs = results;
    };

    const fallbackResult = (message) => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;