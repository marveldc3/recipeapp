import axios from 'axios';

const handler = async (req, res) => {
  const appId = '782a8c61';
  const appKey = 'a1942b18ea7db3be941b03c4050b6b85';

  const { query: { query } = {} } = req;

  if (!appId || !appKey) {
    return res.status(500).send('Missing Edamam API credentials.');
  }

  try {
    const response = await axios.get('https://api.edamam.com/api/recipes/v2', {
      params: {
        q: query,
        app_id: appId,
        app_key: appKey,
        type: 'any',
      },
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('An error occurred while fetching recipes: ', error);
    return res.status(500).send('Internal Server Error.');
  }
};

export default handler;