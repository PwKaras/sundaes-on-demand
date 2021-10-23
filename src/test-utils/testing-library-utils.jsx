import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

const renderWithConstect = ( ui, options ) => render( ui, { wrapper: OrderDetailsProvider, ...options } );

//  re-export everything
export *  from "@testing-library/react";

// overwrite render method
export { renderWithConstect as render };