import TokenService from './token-service';

const GuessService = {
  postGuess: async (guess) => {
    try {
      const fetchedResponse = await fetch('https://immense-mesa-24411.herokuapp.com/api/language/guess', {
        method: 'POST',
        headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
        },
        body: JSON.stringify({guess: guess}),
      });
      const fetchedObj = await fetchedResponse.json();
      return fetchedObj;
    } catch (error) {
      console.log(error);
    }
  },
}

export default GuessService;