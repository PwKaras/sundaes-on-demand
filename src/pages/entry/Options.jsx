import axios from 'axios';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { ScoopOptions } from './ScoopOption';
import { ToppingsOptions } from './ToppingsOptions';
import { AlertBanner } from '../common/AlertBanner';

export const Options = ( props ) => {
    const { optionType } = props;
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(false);

    // optionType is 'scoops' or 'toopings'
    useEffect(() => {
        axios.get(`http:localhost:3030/${optionType}`)
            .then(response => setItems(response.data))
            .catch(err => {
                setError(true);
            })
    }, [optionType]);

    if(error) {
        return <AlertBanner />
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingsOptions;

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