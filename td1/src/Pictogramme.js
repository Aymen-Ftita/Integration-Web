import React from 'react';
import Icone from './Icone';
class Pictogramme extends React.Component {
    render() {
      return (
    <div>
          {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
          <Icone />
          <hr />
        <div>
         <button type="button" class="btn no-outline btn-secondary" onClick={function () {
      
        document.getElementById('Premier').innerHTML="Premier défi réussi";}}>
          <i class="fa fa-thumbs-o-up fa-4 align-middle" aria-hidden="true"></i>
          &nbsp;
          <span class="align-middle">J'aime</span>
        </button>
        
        </div>
    </div>
        )
    }

    function (params) {
        
     return("premier defi reussi");}

  }

export default Pictogramme;