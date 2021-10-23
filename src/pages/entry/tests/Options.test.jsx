// import { render, screen } from '@testing-library/react';
import { screen, render } from  '../../../test-utils/testing-library-utils';
// import { OrderDetailsProvider } from '../../../contexts/OrderDetails';

import { Options } from '../Options';

test('displays image for each scoop option from server', async () => {
    // render( <Options  optionType="scoops" />, { wrapper: OrderDetailsProvider });
    render( <Options  optionType="scoops" />);

    // find images
    // anytimes when waiting for something appear asynchronously use findBy.. (insted getBy... ) and make it with asyn await
    const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map( element => element.alt );
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each topping option form server', async () => {
    // render(<Options optionType="toppings" />, { wrapper: OrderDetailsProvider });
    // abowe use pure render from '@testing-library/react', have to use { wrapper: ... } as a second argument
    // belowe use render overwrite in test-utils/testing-library-utils.jsx, that contains build in wrapper: context
    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByRole('img', {name: /topping$/i});
    expect(toppingImages).toHaveLength(3);

    const altText = toppingImages.map( element => element.alt );
    expect(altText).toEqual(["Cherries topping", "Hot fudge topping", "M&Ms topping"]);
})