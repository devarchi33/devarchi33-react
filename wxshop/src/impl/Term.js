import React, {Component} from 'react';
import Prgrph from '../interface/ContentParagraph';
import data from '../data/Data.js';
import Links from '../navigator/Links';

const Prgrphs = data.term.map(
    prgr => <div key={prgr.id}>
                <Prgrph content={prgr}/>            
            </div> 
);

const Term = (props) => (
    <div><Links/>{Prgrphs}</div>
);

export default Term;