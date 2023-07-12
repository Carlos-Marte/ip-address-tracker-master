import { useEffect, useState } from 'react';
import { searchIpInfo } from '../../services/searchIpInfo/searchIpInfo';
import { getIpClient } from '../../services/getIpClient/getIpClient';

export const useIpTracker = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    getIpClient()
      .then(({ ip }) => getIpInfo(ip, setError))
      .catch(error => setError(error));
  }, []);

  const getIpInfo = async (ipAddress) => {
    const ipInfo = await searchIpInfo(ipAddress, setError);

    if (ipInfo) {
      setData(ipInfo);
      setError(null);
    }
  };

  return { data, error, getIpInfo };
};
