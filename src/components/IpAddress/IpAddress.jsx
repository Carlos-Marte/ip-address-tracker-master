import { useState } from 'react';
import { IpInfo } from '../IpInfo/IpInfo';
import { Map } from '../Map/Map';
import { useIpTracker } from '../../hooks/useIpTracker/useIpTracker';

export const IpAddress = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const { data, getIpInfo } = useIpTracker(searchInputValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    getIpInfo(searchInputValue);
  };

  const handleChangeInput = ({ target }) => {
    setSearchInputValue(target.value);
  };

  return (
    <>
      <section className="IpAddress">
        <h1 className="IpAddress-heading1">IP Address Tracker</h1>

        <form className="IpAddress-form" method="POST" onSubmit={handleSubmit}>
          <div className='IpAddress-formContainerInputs'>
            <input className="IpAddress-formInput" type="text" placeholder="Search for any IP" value={searchInputValue} onChange={handleChangeInput} />
            <button className="IpAddress-formButton">
              <img src="/icon-arrow.svg" alt="Button arrow" />
            </button>
          </div>
        </form>

        <IpInfo dataIpInfo={data} />
      </section>

      <Map dataCoords={data} />
    </>
  );
};
