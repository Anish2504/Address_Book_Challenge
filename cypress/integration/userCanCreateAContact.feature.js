describe('user can create a contact', () => {
	it('test', () => {
		cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Anish')
		cy.get('#email').type('anish@gmail.com')
		cy.get('#phone').type('0700 00000')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Beginer coder')
        cy.get('#twitter').type('@anish')
        cy.get('#submit').click()
    })
    it('displays a name of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Anish')
	})
	
	it('displays the phone number of the new contact', () => {
		cy.get('#contact-list').should('contain', '0700 00000')
	})
})