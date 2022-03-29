describe ("photoDisplayUITests", () => {
    it ("properly displays three images when page is loaded for the first time", () => {
        //given
        websiteIsOpened()

        //then
        displaysThreeImages()
    })

    it ("after clicking on Next button, three new pictures are generated", () => {
        //given
        websiteIsOpened()

        //when
        //zapisuje do tablicy urle starych img
        let srcGetter = cy.get('.img-responsive').invoke('attr', 'src')
            .then((el) => {
                debugger
            });
        cy.log(srcGetter)
        clickedNextBtn()

        //then
        // displaysThreeNewImages()
        //zapisuje do nowej tablicy urle nowych img
        //porównuję dwie tablice i oczekuje, ze url będą różne
    })

    it ("after clicking on Prev button, three previous pictures are generated", () => {
        //given
        websiteIsOpened()

        //when
        clickedNextBtn()

        //then
        displaysThreeNewImages()
    })

    it ("while page is loaded for the first time, only Next button is visible", () => {
        //given
        websiteIsOpened()

        //then
        noPrevBtn()
    })

    it ("while there is no more pictures to generate, only Prev button is visible",

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
