import React, { useContext } from 'react';
import { CrudContext } from '../../context/crudContext';
import LinearProgress from '@material-ui/core/LinearProgress';

// Styles
import './styles/SplashList.css';

const SplashList = ({ configureFilteredTerm }) => {
  // Contexts
  const { artList } = useContext(CrudContext);

  return (
    <div className="SplashList">
      {artList.length === 0 ? (
        <>
          <LinearProgress />
        </>
      ) : (
        <>
          <div
            onClick={configureFilteredTerm}
            className="viewArt"
            data-medium="Art"
          >
            View Art
          </div>
          <div
            onClick={configureFilteredTerm}
            className="viewJewelry"
            data-medium="Jewelry"
          >
            View Jewelry
          </div>
          <div
            onClick={configureFilteredTerm}
            className="viewPhotography"
            data-medium="Photos"
          >
            View Photos
          </div>
        </>
      )}
    </div>
  );
};

export default SplashList;
