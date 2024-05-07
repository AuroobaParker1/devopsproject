import { render, screen } from '@testing-library/react'
import AppTest from '../Pages/AppTest';

test("Example 1 renders successfully", () => {
    render(<AppTest />);

    const element = screen.getByText(/Hello World!/i);

    expect(element).toBeInTheDocument();
})