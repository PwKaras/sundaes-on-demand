import { screen, render, waitFor } from '@testing-library/react';
import { OrderEntry } from '../OrderEntry';
import { response, rest } from 'msw';
import { server } from '../../../mock/server'

// resetHandlers -  it is necessary to overwrite defalut handlers to simulat err 
// use find (insed of get) - with async await
test('handles error for scoops and toppings routes', async () =>  {
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req, res, ctx) => 
        res(ctx.status(500))
        ),
        rest.get('http://localhost:3030/toppings', (req, res, ctx) => 
            res(ctx.status(500))
        )
    );

    render(<OrderEntry />);
    // waitFor https://testing-library.com/docs/guide-disappearance/
    await waitFor( async() => {
        const alerts = await screen.findAllByRole('alert' );
        expect(alerts).toHaveLength(2);
    })
});