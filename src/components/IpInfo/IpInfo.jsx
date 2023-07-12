import PropTypes from 'prop-types';

export const IpInfo = ({ dataIpInfo }) => {
  const {
    ip,
    city,
    region,
    postalCode,
    timezone,
    isp
  } = dataIpInfo;

  return (
   <div className="IpInfo">
     <ul className="IpInfo-list">
       <li className="IpInfo-item">
        <p className="IpInfo-paragraph">
         IP Address
        </p>
        <span className="IpInfo-spanInfo">
          {ip}
        </span>
       </li>
       <li className="IpInfo-item">
        <div className="IpInfo-separator"></div>

        <p className="IpInfo-paragraph">
          Location
        </p>
        <span className="IpInfo-spanInfo">
          {Boolean(city, region, postalCode) && `${city}, ${region} ${postalCode}`}
        </span>
       </li>
       <li className="IpInfo-item">
        <div className="IpInfo-separator"></div>

        <p className="IpInfo-paragraph">
          Timezone
        </p>
        <span className="IpInfo-spanInfo">
          {timezone}
        </span>
       </li>
       <li className="IpInfo-item">
        <div className="IpInfo-separator"></div>
        <p className="IpInfo-paragraph">
          ISP
        </p>
        <span className="IpInfo-spanInfo">
          {isp}
        </span>
       </li>
     </ul>
   </div>
  );
};

IpInfo.propTypes = {
  dataIpInfo: PropTypes.object
};
