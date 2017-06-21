// it need not be a class based component coz we dont need any state.
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine , SparklinesReferenceLine} from 'react-sparklines';

function average(data){
  return (
    _.round(_.sum(data)/data.length)

  );
}
export default ( props ) => {
  return(
    <div>
    <Sparklines data={props.dataArray}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(props.dataArray)} {props.units}</div>
    </div>


  );
}
