import { render, screen, fireEvent } from "@testing-library/react"
import { SummaryForm } from "../SummaryForm";

test("checkbox enables button", () => {
    render(<SummaryForm />);
    const confirmButton = screen.getByRole('button', { name: /Confirm order/i });
    const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();
    
    fireEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});