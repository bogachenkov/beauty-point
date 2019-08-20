import React, { useState } from 'react';

import './style.scss';

const Address = () => {

  const [ isActive, setIsActive ] = useState(false);
  const [ address, setAddress ] = useState('9 boulevard Malesherbes');

  const addresses = ['9 boulevard Malesherbes', '22 boulevard Malesherbes'];

  const handleAddressChange = address => {
    setAddress(address);
    setIsActive(false);
  }

  return (
    <div className={`address${isActive ? ' active' : ''}`}>
      <div className="address--select" onClick={() => setIsActive(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15"><g><g><path d="M6.004 8.171c-1.737 0-3.145-1.258-3.145-2.809 0-1.55 1.408-2.809 3.145-2.809S9.15 3.811 9.15 5.363c0 1.55-1.408 2.808-3.145 2.808zM6.212.003C2.802-.1 0 2.34 0 5.363c0 3.43 3.687 5.92 5.753 9.5.105.182.398.183.503 0 1.87-3.221 5.064-5.382 5.656-8.486.613-3.211-2.054-6.264-5.7-6.374z"/></g></g></svg>
        <p>{ address }</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8"><g><g><path fill="none" stroke="#979797" strokeMiterlimit="50" d="M.51.29v0l7.277 7.277v0L15.065.29v0"/></g></g></svg>
      </div>
      <div className="address--background" onClick={() => setIsActive(false)}></div>
      <div className="address--dropdown">
        {
          addresses.map(address => (
            <div key={address} className="address--option" onClick={() => handleAddressChange(address)} >
              <p className="address--address">{ address }</p>
              <p className="address--time">09:00 - 18:00</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Address;