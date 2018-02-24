import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  let height = props.height ? props.height : 120;
  let width = props.width ? props.width : 180; 

  return (
    <div>
      <Sparklines height={height} width={width} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Avg: {average(props.data)} {props.unit}</div>
    </div>
  );
}