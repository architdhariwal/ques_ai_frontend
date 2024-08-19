import React from 'react'
import Episode from './Episode';

function AllEpisodes({episodes}) {
        
      return (
        <div>
           <div className="bg-white shadow-md rounded-lg p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b py-2 text-left text-gray-500">No.</th>
            <th className="border-b py-2 text-left text-gray-500">Name</th>
            <th className="border-b py-2 text-left text-gray-500">Upload Date & Time</th>
            <th className="border-b py-2 text-left text-gray-500">Status</th>
            <th className="border-b py-2 text-left text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((ele, index) => (
            <Episode file={ele} index={index}/>
          ))}
        </tbody>
      </table>   

    </div>
        </div>
      );
}

export default AllEpisodes