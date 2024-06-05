'use client';
import { useCallback } from 'react';
import { ViewStateChangeEvent } from 'react-map-gl';
import { Map } from '../organisms/map/Map';
import { Panel } from '../organisms/map/Panel';
import { DefaultZoomControls } from '../organisms/map/ZoomControls';
import {initialViewState} from '@autospace/util/constants'
import { Autocomplete } from '../atoms/Autocomplete';
import { SearchPlaceBox } from '../organisms/map/SearchPlacesBox';

export const SearchPage = () => {
  const handleMapChange = useCallback(
    (target: ViewStateChangeEvent['target']) => {
      const bounds = target.getBounds();
     const locationFilter = {
       ne_lat: bounds?.getNorthEast().lat || 0,
       ne_lng: bounds?.getNorthEast().lng || 0,
       sw_lat: bounds?.getSouthWest().lat || 0,
       sw_lng: bounds?.getSouthWest().lng || 0,
     };
     console.log("🚀 ~ SearchPage ~ locationFilter:", locationFilter)
    },
    [],
  );
  return (
    <Map
      onLoad={(e) => handleMapChange(e.target)}
      onDragEnd={(e) => handleMapChange(e.target)}
      onZoomEnd={(e) => handleMapChange(e.target)}
      initialViewState={initialViewState}
    >
      <Panel position="left-top">
        <SearchPlaceBox/>
      </Panel>
      <Panel position="right-center">
        <DefaultZoomControls />
      </Panel>
    </Map>
  );
};