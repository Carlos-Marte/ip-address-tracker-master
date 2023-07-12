const APIENDPOINT = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_APIIPIFY_KEY}&ipAddress=`;

export const searchIpInfo = async (ipAddress, setError) => {
  if (ipAddress === '') return null;

  try {
    const res = await fetch(APIENDPOINT + ipAddress);

    if (!res.ok) {
      setError('An error has occurred');
      return;
    }

    const data = await res.json();
    const mappedData = {
      ip: data.ip,
      region: data.location.region,
      city: data.location.city,
      lat: data.location.lat,
      lng: data.location.lng,
      postalCode: data.location.postalCode,
      timezone: data.location.timezone,
      isp: data.isp
    };

    return mappedData;
  } catch (error) {
    console.error(error);
  }
};
