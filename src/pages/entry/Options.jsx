import axios from 'axios';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { ScoopOptions } from './ScoopOption';
import { ToopingsOptions } from './ToopingsOptions';

export const Options = ( props ) => {
    const { optionType } = props;
    const [items, setItems] = useState([]);

    // optionType is 'scoops' or 'toopings'
    useEffect(() => {
        axios.get(`http:localhost:3030/${optionType}`)
            .then(response => setItems(response.data))
            .catch(err => {
                // TODO: handle error response
            })
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToopingsOptions;

    const optionItems = items.map(item =>
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    );

    return (
            <Row>
                {optionItems}
            </Row>
    )
}