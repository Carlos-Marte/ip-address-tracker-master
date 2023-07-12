const APIENDPOINT = 'https://api.ipify.org?format=json';

export const getIpClient = async (setError) => {
  try {
    const res = await fetch(APIENDPOINT);

    if (!res.ok) {
      setError('An error has occurred');
      return;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
