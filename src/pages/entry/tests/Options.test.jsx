import { render, screen } from '@testing-library/react';

import { Options } from '../Options';

test('displays image for each scoop option from server', async () => {
    render( <Options  optionType="scoops"/>);

    // find images
    // anytimes when waiting for something appear assynchronously use findBy.. (insted getBy... ) and make it with asyn await
    const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map( element => element.alt );
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
})