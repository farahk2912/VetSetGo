import React from 'react';

import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import LeftColumn from './LeftColumn';

const CommunityPage2 = () => {
  return (
    <div className='w-100' style={{ minHeight: '100vh', backgroundColor: "#E5E1EE", display: 'flex', flexDirection: 'column' }}>
 =

      <div className='container-fluid mt-4 flex-grow-1'>
        <div className='row justify-content-center'>

          {/* Left Column */}
          <div className='col-12 col-lg-3 mb-3'>
            <LeftColumn />
          </div>

          {/* Middle Column */}
          <div className='col-12 col-lg-6 mb-3'>
            <MiddleColumn />
          </div>

          {/* Right Column */}
          <div className='col-12 col-lg-3 mb-3'>
            <RightColumn />
          </div>

        </div>
      </div>
    </div>
  );
}

export default CommunityPage2;
