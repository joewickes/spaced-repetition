import TokenService from './token-service';

const LanguageService = {
  fetchLanguageAndWords: async () => {
    try {
      const fetchedResponse = await fetch('https://immense-mesa-24411.herokuapp.com/api/language', {
        method: 'GET',
        headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
      });
      const fetchedWords = await fetchedResponse.json();
      return fetchedWords;
    } catch (error) {
      // console.log(error);
    }
  },
}

export default LanguageService;