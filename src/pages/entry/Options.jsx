import axios from 'axios';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { ScoopOptions } from './ScoopOption';
import { ToppingsOptions } from './ToppingsOptions';
import { AlertBanner } from '../common/AlertBanner';
import { pricePerItem } from '../../constans';
import { useOrderDetails } from '../../contexts/OrderDetails';

export const Options = ( props ) => {
    const { optionType } = props;
    const [ items, setItems ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ orderDetails, updateItemCount ] = useOrderDetails();

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
    const title = optionType[0].toUpperCase() + optionType.slice( 1 ).toLowerCase();
    const setUpdateItemcount = (itemName, newItemCount) => updateItemCount(itemName, newItemCount, optionType );
    const optionItems = items.map(item =>
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath} 
            updateItemCount= { setUpdateItemcount } />
            // updateItemCount={(itemName, newItemCount) => updateItemCount(itemName, newItemCount, optionType )}
            // />
    );

    return (
        <>
            <h2>{title}</h2>
            <p>{pricePerItem[optionType]} each</p>
            <p>
                {title} total: {orderDetails.totals[optionType]}
            </p>
            <Row>
                {optionItems}
            </Row>
        </>
    )
}