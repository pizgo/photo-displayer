describe ("photo-displayer-ui-tests", () => {
    it ("properly displayes three images", () => {
        //given
        websiteIsOpened()

        //when

        //then
    })
})

function websiteIsOpened() {
    cy.visit("http://localhost:3000");
}

function displaysThreeImages(){
    cy.get(".temperature")
}