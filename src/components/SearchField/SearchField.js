import React, { useState } from 'react';
import Input from '../Input/Input';

import './style.scss';

const SearchField = () => {

   const [ value, setValue ] = useState('');

  return (
    <div className="search-field">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g><g><path fill="#a2a2a2" d="M6.273 1.58c2.557 0 4.636 2.008 4.636 4.476 0 2.469-2.08 4.477-4.636 4.477-2.557 0-4.637-2.008-4.637-4.477 0-2.468 2.08-4.476 4.637-4.476zm8.499 12.083L11.074 9.95a5.913 5.913 0 0 0 1.472-3.894C12.546 2.716 9.732 0 6.273 0 2.814 0 0 2.717 0 6.056c0 3.34 2.814 6.056 6.273 6.056a6.36 6.36 0 0 0 3.594-1.095l3.726 3.74a.826.826 0 0 0 .59.243.83.83 0 0 0 .566-.22.772.772 0 0 0 .023-1.117z"/></g></g></svg>
      <Input placeholder="Search" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
};

export default SearchField;