import mapboxgl from "!mapbox-gl";
import { useRef, useState, useEffect } from "react";
import "mapbox-gl/src/css/mapbox-gl.css";
import { useAppSelector, useAppDispatch } from "/app/hooks";

import {
  decrement,
  increment,
  selectCount,
  selectPage,
} from "/app/counterSlice";

const Foo = ({ lat, lng }) => {
  return <div>Hello</div>;
};

export default Foo;
