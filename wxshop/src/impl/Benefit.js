import React, {Component} from 'react';
import Prgrph from '../interface/ContentParagraph';
import data from '../data/Data.js';
import Links from '../navigator/Links';

const Prgrphs = data.benefit.map(
    prgr => <div key={prgr.id}>
                <Prgrph/>            
            </div> 
);

const Benefit = (props) => (
    <div><Links/>{Prgrphs}</div>
);

export default Benefit;