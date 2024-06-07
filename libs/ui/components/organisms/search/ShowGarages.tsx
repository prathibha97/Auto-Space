import { useLazyQuery } from '@apollo/client';
import { useConvertSearchFormToVariables } from '@autospace/forms/src/adapters/searchFormAdapter';
import { SearchGaragesDocument } from '@autospace/network/src/gql/generated';
import { IconInfoCircle } from '@tabler/icons-react';
import { useEffect } from 'react';
import { Loader } from '../../molecules';
import { Panel } from '../map/Panel';
import { GarageMarker } from './GarageMarker';

export const ShowGarages = () => {
  const [
    searchGarages,
    { loading: garagesLoading, data, previousData, error },
  ] = useLazyQuery(SearchGaragesDocument);

  const { variables, debouncing } = useConvertSearchFormToVariables();

  const garages = data?.searchGarages || previousData?.searchGarages || [];
  const loading = debouncing || garagesLoading;

  useEffect(() => {
    if (variables) {
      searchGarages({ variables });
    }
  }, [searchGarages, variables]);

  if (error) {
    return (
      <Panel
        position="center-center"
        className="bg-white/50 shadow border-white border backdrop-blur-sm"
      >
        <div className="flex items-center justify-center gap-2 ">
          <IconInfoCircle /> <div>{error.message}</div>
        </div>
      </Panel>
    );
  }

  if (!loading && garages.length === 0) {
    return (
      <Panel
        position="center-center"
        className="bg-white/50 shadow border-white border backdrop-blur-sm"
      >
        <div className="flex items-center justify-center gap-2 ">
          <IconInfoCircle /> <div>No parking slots found in this area.</div>
        </div>
      </Panel>
    );
  }
  return (
    <>
      {loading ? (
        <Panel position="center-bottom">
          <Loader />
        </Panel>
      ) : null}
      {data?.searchGarages.map((garage) => (
        <GarageMarker key={garage.id} marker={garage} />
      ))}
    </>
  );
};
