import { render, fireEvent } from '@testing-library/react';
import CosmicCard from './CosmicCard';
import '@testing-library/jest-dom'

// DOCUMENTATION:
// command: npm test
//1. 
    // When app renders initially, the close button isn't part of the document
    // Clicking the Current Pool Status button updates the parent component's state value to true
    // Close button is part of the document when parent state expand value is true

// NOTE: Running multiple test files is causing the test cases to fail for unexpected reason so I've proceeded with only single file.


describe("Cosmic Component", () => {
    it("Clicking expand button makes close/unexpand button visible", () => {
        const { getByTestId } = render(<CosmicCard />)
        const expandBtn = getByTestId("expand-btn")
        fireEvent.click(expandBtn)
        const closeBtn = getByTestId("close-btn")
        expect(closeBtn).toBeInTheDocument()
    })
})
