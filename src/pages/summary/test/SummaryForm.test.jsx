import { render, screen, fireEvent, queryByText, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { SummaryForm } from "../SummaryForm";

test("checkbox enables button", () => {
    render(<SummaryForm />);
    const confirmButton = screen.getByRole('button', { name: /Confirm order/i });
    const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
    render(<SummaryForm />);

    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mousever of checkbox label
    const termsAndConditions = screen.queryByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    
    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(()=> screen.queryByText(/no ice cream will actually be delivered/i));
})