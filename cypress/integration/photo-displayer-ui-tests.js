describe ("photoDisplayUITests", () => {
    it ("properly displays three images when page is loaded for the first time", () => {
        //given
        websiteIsOpened()

        //then
        displaysThreeImages()
    })


})

function websiteIsOpened() {
    cy.visit("http://localhost:3000");
}

function displaysThreeImages(){
    cy.get(".img-responsive")
        .should('have.length', 3)
        .should('be.visible')
        .and((img) => {
            expect(img[0].naturalWidth).to.be.greaterThan(0)
        })
}
