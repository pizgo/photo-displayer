describe ("photoDisplayUITests", () => {
    it ("properly displays three images when page is loaded for the first time", () => {
        //given
        websiteIsOpened()

        //then
        displaysThreeImages()
    })

    it ("after clicking on Next button, the url of a first pic is different ", () => {
        //given
        websiteIsOpened()

        //when and then
        let firstPicUrl = getFirstPicSrc()
        clickNextButton(1)

        //then
        expectFirstPicSrcNotToEqual(firstPicUrl)
    })

    it ("after clicking on Prev button, three previous pictures are generated", () => {
        //given
        websiteIsOpened()

        //when
        clickNextButton(1)
        let firstPicUrl = getFirstPicSrc()
        clickedPrevBtn()

        //then
        expectFirstPicSrcNotToEqual(firstPicUrl)
    })

    it ("while page is loaded for the first time, only Next button is visible", () => {
        //given
        websiteIsOpened()

        //then
        noPrevBtn()
    })

    it ("while there is no more pictures to generate, only Prev button is visible", () => {
        //given
        websiteIsOpened()

        //when
        clickNextButton(9)

        //then
        noNextBtn()
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

function getFirstPicSrc(){
    let firstPicUrl = ""
    cy.get('.img-responsive')
        .invoke('attr', 'src')
        .then((firstsrc) => {
            firstPicUrl = firstsrc
        })
    return firstPicUrl
}

function expectFirstPicSrcNotToEqual(firstPicUrl) {
    cy.get('.img-responsive')
        .invoke('attr', 'src')
        .then((secondSrc) => {
            expect(secondSrc).to.not.equal(firstPicUrl)
        })
}

function clickedPrevBtn() {
    cy.contains("Prev").click();
}

function noPrevBtn() {
    cy.get('.btn-prev').should('not.to.be.visible')
}

function clickNextButton(times) {
    for(let i=0; i < times; i++) {
        cy.contains("Next").click();
    }
}

function noNextBtn() {
    cy.get('.btn-next').should('not.to.be.visible')
}