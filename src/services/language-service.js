import TokenService from './token-service';

const LanguageService = {
  fetchLanguageAndWords: async () => {
    try {
      const fetchedResponse = await fetch('http://localhost:8000/api/language', {
        method: 'GET',
        headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
      });
      const fetchedWords = await fetchedResponse.json();
      return fetchedWords;
    } catch (error) {
      console.log(error);
    }
  },
}

export default LanguageService;