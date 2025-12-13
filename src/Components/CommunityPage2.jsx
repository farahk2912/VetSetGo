// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import MiddleColumn from '../MainCommunity/MiddleColumn';
// import RightColumn from '../MainCommunity/RightColumn';
// import LeftColumn from '../MainCommunity/LeftColumn';

// const CommunityPage2 = () => {
//   return (
//     <div className='w-100' style={{ minHeight: '100vh', backgroundColor: "#E5E1EE", display: 'flex', flexDirection: 'column' }}>
//       <Navbar />

//       <div className='container-fluid mt-4 flex-grow-1'>
//         <div className='row justify-content-center'>

//           {/* Left Column */}
//           <div className='col-12 col-lg-3 mb-3'>
//             <LeftColumn />
//           </div>

//           {/* Middle Column */}
//           <div className='col-12 col-lg-6 mb-3'>
//             <MiddleColumn />
//           </div>

//           {/* Right Column */}
//           <div className='col-12 col-lg-3 mb-3'>
//             <RightColumn />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default CommunityPage2;

import React from 'react';

import MiddleColumn from './MiddleColumn';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const CommunityPage2 = () => {
  return (
    <div className='w-100' style={{ minHeight: '100vh', backgroundColor: "#E5E1EE", display: 'flex', flexDirection: 'column' }}>
    

      <div className='container-fluid mt-4 flex-grow-1'>
        <div className='row justify-content-center'>

         
          <div className='col-12 col-lg-3 mb-3 order-1 order-lg-1'>
            <LeftColumn />
          </div>

       
          <div className='col-12 col-lg-3 mb-3 order-2 order-lg-3'>
            <RightColumn />
          </div>

        
          <div className='col-12 col-lg-6 mb-3 order-3 order-lg-2'>
            <MiddleColumn />
          </div>

        </div>
      </div>
    </div>
  );
}

export default CommunityPage2;
