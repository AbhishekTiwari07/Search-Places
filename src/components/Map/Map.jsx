import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA6reYO189C885Kqe7c_CC71Oex-8Aa6sc" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          console.log({ lat: e.center.lat, lng: e.center.lng });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.bounds.ne, sw: e.bounds.sw });
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
