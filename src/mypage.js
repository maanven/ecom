import React from 'react';

function MyPage(){
    let myName="Manas";
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
            <h1><center>{myName}</center></h1>
        </div>
      </div>
    </div>
    );
}

export default MyPage;