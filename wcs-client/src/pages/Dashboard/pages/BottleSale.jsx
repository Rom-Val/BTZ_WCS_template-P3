import React from 'react';
import '../../../styles/UserList.css';



function BottleSale() {
  
  return (
    <div className='users-list-page'>
      <h1>Bottle Sale</h1>
      <table className='table-style'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Name</th>
            <th>Terroirs</th>
            <th>Colors</th>
            <th>Years</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Suprimer</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>24/07/2023</td>
          <td>Crozes-Hermitage</td>
          <td>Côtes du Rhône</td>
          <td>Blanc</td>
          <td>2019</td>
          <td>18€80</td>
          <td>12</td>
          <td><button>Supprimer</button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>24/07/2023</td>
          <td>Le Petit Cheval Saint-Emilion Grand Cru</td>
          <td>Bordeaux</td>
          <td>Rouge</td>
          <td>2008</td>
          <td>240€</td>
          <td>6</td>
          <td><button>Supprimer</button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>24/07/2023</td>
          <td>Pomerol</td>
          <td>Bourgogne</td>
          <td>Rouge</td>
          <td>2010</td>
          <td>112€96</td>
          <td>6</td>
          <td><button>Supprimer</button></td>
        </tr>
        <tr>
          <td>4</td>
          <td>24/07/2023</td>
          <td>Volnay 'Les Pitures'</td>
          <td>Bourgogne</td>
          <td>Rouge</td>
          <td>2000</td>
          <td>86€</td>
          <td>12</td>
          <td><button>Supprimer</button></td>
        </tr>
        <tr>
          <td>5</td>
          <td>24/07/2023</td>
          <td>Le Vin De Merde</td>
          <td>Languedoc-Roussillon</td>
          <td>Rouge</td>
          <td>2008</td>
          <td>8€</td>
          <td>18</td>
          <td><button>Supprimer</button></td>
        </tr>
        <tr>
          <td>6</td>
          <td>24/07/2023</td>
          <td>Riesling 'Steinklotz'</td>
          <td>Alsace</td>
          <td>Blanc</td>
          <td>2013</td>
          <td>30€</td>
          <td>12</td>
          <td><button>Supprimer</button></td>
        </tr>
        </tbody>
      </table>
      <div className="add-button">
        <button onClick={''}>Ajouter une Bouteille</button>
      </div>
  </div>

)}
  
  
  
  
  

  
  
  
  

export default BottleSale