import React, {Component} from 'react';
import Prgrph from '../interface/ContentParagraph';
import data from '../data/TermData.js';

const Prgrphs = data.map(
    prgr => <div key={prgr.id}>
                <Prgrph content={prgr}/>            
            </div> 
);

const Term = (props) => (
    <div>{Prgrphs}</div>
);

export default Term;