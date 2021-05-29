import { rest } from 'msw';

// https://mswjs.io/docs/getting-started/mocks/rest-api
export const handlers = [
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
        // https://mswjs.io/docs/basics/response-resolver
        return res(
            // ctx utility to  build response
            ctx.json([
                { name: 'Chocolate', imagePath: '/images/chocolate.png' },
                { name: 'Vanilla', imagePath: '/images/vanilla .png' }
            ])
        );
    }),
];