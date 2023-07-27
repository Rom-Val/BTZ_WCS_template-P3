import React, { useEffect, useState } from 'react';
import { getAll } from '../../../services';
import '../../../styles/UserList.css';


function UserList() {
  const [users, setUsers] = useState([]);
  const [tastes, setTastes] = useState([]);
  const [colors, setColors] = useState([]);
  const [terroirs, setTerroirs] = useState([]);
  const [cepages, setCepages] = useState([]);
  const [aromas, setAromas] = useState([]);
  const [intensity, setIntensity] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const [dates, setDates] = useState([]);
  const [tastingsheet, settastingsheet] = useState([]);

// RECUPERER LES NAMES USERS PAR LEUR ID

  useEffect(() => {
    Promise.all([
      getAll("users"),
      getAll("tastes"),
      getAll("colors"),
      getAll("terroirs"),
      getAll("cepages"),
      getAll("aromas"),
      getAll("intensity"),
      getAll("flavors"),
      getAll("dates"),
      getAll("tastingsheet")
    ])
      .then(([usersData, tastesData, colorsData, terroirsData, cepagesData, aromasData, intensityData, flavorsData, datesData, tastingsheetData]) => {
       console.log(intensityData); 
        setUsers(usersData);
        setTastes(tastesData);
        setColors(colorsData);
        setTerroirs(terroirsData);
        setCepages(cepagesData);
        setAromas(aromasData);
        setIntensity(intensityData);
        setFlavors(flavorsData);
        // setDates(datesData);
        settastingsheet(tastingsheetData);
      })
      .catch(error => console.log(error));
  }, []);
    console.log(tastingsheet);

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Fonctions pour récupérer les name par les id

  function getUserNameById(userId) {
    const user = users.find(user => user.id === userId);
    return user ? `${user.firstname} ${user.lastname}` : 'N/A';
}
  function getColorNameById(colorId) {
    const color = colors.find(color => color.id === colorId);
    return color ? `${color.name}` : 'N/A';
  }
  function getTerroirNameById(terroirId) {
    const terroir = terroirs.find(terroir => terroir.id === terroirId);
    return terroir ? `${terroir.name}` : 'N/A';
  }
  function getAromaNameById(aromaId) {
    const aroma = aromas.find(aroma => aroma.id === aromaId);
    return aroma ? `${aroma.name}` : 'N/A';
  }
  function getCepageNameById(cepageId) {
    const cepage = cepages.find(cepage => cepage.id === cepageId);
    return cepage ? `${cepage.name}` : 'N/A';
  }
  function getIntensityNameById(intensityId) {
    const foundintensity = intensity.find(intensity => intensity.id === intensityId);
    return foundintensity ? `${foundintensity.name}` : 'N/A';
  }
  function getFlavorNameById(flavorId) {
    const flavor = flavors.find(flavor => flavor.id === flavorId);
    return flavor ? `${flavor.name}` : 'N/A';
  }
  function getDateNameById(dateId) {
    const date = dates.find(date => date.id === dateId);
    return date ? `${date.name}` : 'N/A';
  }

  return (
    <div className='users-list-page'>
      <h1>User-List</h1>
      <table className='table-style'>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Date</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}><td>{user.id}</td>
              <td>{formatDate(user.date)}</td>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Tastes-List</h1>
      <table className='table-style'>
        <thead>
          <tr>
            <th>ID de l'utilisateur</th>
            <th>Nom de l'utilisateur</th>
            <th>Couleur</th>
            <th>Terroir</th>
            <th>Cépage</th>
            <th>Arômes</th>
            <th>Intensité</th>
            <th>Saveurs</th>
          </tr>
        </thead>
        <tbody>
          {tastes.map(taste => (
            <tr key={taste.id}>
              <td>{taste.user_id}</td>
              <td>{getUserNameById(taste.user_id)}</td>
              <td>{getColorNameById(taste.color_id)}</td>
              <td>{getTerroirNameById(taste.terroir_id)}</td>
              <td>{getCepageNameById(taste.cepage_id)}</td>
              <td>{getAromaNameById(taste.aromas_id)}</td>
              <td>{getIntensityNameById(taste.intensity_id)}</td>
              <td>{getFlavorNameById(taste.flavors_id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Tasting-Sheet</h1>
      <table className='table-style'>
        <thead>
          <tr>
            <th>ID de l'utilisateur</th>
            <th>ID Fiche Dégustation</th>
            <th>Date</th>
            <th>Couleur</th>
            <th>Intensité</th>
            <th>Arômes</th>
            <th>Saveur</th>
            <th>Cépage</th>
            <th>Terroir</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {tastingsheet.map(tasting_sheet => (
            <tr key={tasting_sheet.id}>
              <td>N/A</td>
              {/* <td>{tasting_sheet.user_id}</td> */}
              <td>{tasting_sheet.id}</td>
              <td>{getDateNameById(tasting_sheet.date_id)}</td>
              <td>{getColorNameById(tasting_sheet.color_id)}</td>
              <td>{getIntensityNameById(tasting_sheet.intensity_id)}</td>
              <td>{getAromaNameById(tasting_sheet.aromas_id)}</td>
              <td>{getFlavorNameById(tasting_sheet.flavors_id)}</td>
              <td>{getCepageNameById(tasting_sheet.cepages_id)}</td>
              <td>{getTerroirNameById(tasting_sheet.terroir_id)}</td>
              <td>{tasting_sheet.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Tasting-Result</h1>
      <table className='table-style'>
        <thead>
          <tr>
            <th>ID de l'utilisateur</th>
            <th>Nom de l'utilisateur</th>
            <th>Bouteille 1 </th>
            <th>Bouteille 2 </th>
            <th>Bouteille 3 </th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {tastingsheet.map(tasting_sheet => (
            <tr key={tasting_sheet.id}>
              <td>{tasting_sheet.user_id}</td>
              <td>{getUserNameById(tasting_sheet.user_id)}</td>
              {/* <td>{getNoteNameById(tasting_sheet.note_id)}</td> */}
              {/* <td>{getNoteNameById(tasting_sheet.note_id)}</td> */}
              <td>{tasting_sheet.notes}</td>
              <td>{tasting_sheet.notes}</td>
              <td>{tasting_sheet.notes}</td>
              {/* <td>{getAromaNameById(tasting_sheet.notes_id)}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;