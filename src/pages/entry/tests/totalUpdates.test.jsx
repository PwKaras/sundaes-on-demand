// import { render, screen } from "@testing-library/react";
import { screen, render } from  '../../../test-utils/testing-library-utils';
import userEvent from "@testing-library/user-event";
// import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
import { Options } from "../Options";

test( "update scoop subtotal when scoops change", async () => {
    // render(<Options optionType="scoops" />, { wrapper: OrderDetailsProvider });
    render(<Options optionType="scoops" /> );

    // make sure total starts out $0.00
    const scoopsSubtotal = screen.getByText( "Scoops total: $", {exact: false} );
    expect( scoopsSubtotal ).toHaveTextContent( "0.00" );

    // update vanilla scoops to 1 and check the subtotal
    const vanillaInput = await screen.findByRole( "spinbutton", { name: "Vanilla" } );
    userEvent.clear( vanillaInput );
    userEvent.type( vanillaInput, "1" );
    expect( scoopsSubtotal ).toHaveTextContent( "2.00" );

    // update chocolate scoops to 2 and check subtotal
    const chocolate = await screen.findByRole( "spinbutton", { name: "Chocolate" } );
    userEvent.clear( chocolate );
    userEvent.type( chocolate, "2" );
    expect( scoopsSubtotal ).toHaveTextContent( "6.00" );
});