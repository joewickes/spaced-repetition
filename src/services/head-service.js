import TokenService from './token-service';

const HeadService = {
  fetchLearnWord: async () => {
    try {
      const fetchedResponse = await fetch('http://localhost:8000/api/language/head', {
        method: 'GET',
        headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        },
      });
      const fetchedObj = await fetchedResponse.json();
      return fetchedObj;
    } catch (error) {
      console.log(error);
    }
  },
}

export default HeadService;