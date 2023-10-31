describe('영화검색', () => {
  // beforeEach(() => {
  // })
  it('검색 페이지로 접근', () => {
    cy.visit('/')
    cy.get('header .nav-link.active')
      .contains('Search')
  })
  it('영화를 검색', () => {
    cy.visit('/')
    cy.get('input.form-control')
      .type('frozen')
    cy.get('select.form-select:nth-child(2)')
      .select('30')
    cy.get('button.btn')
      .contains('Apply')
      .click()
    cy.wait(2000)
    cy.get('.movie')
      .should('have.length', 30)

    cy.get('.movie .title')
      .contains('Frozen II')
      .click()
    cy.url().should('include', '/movie/tt4520988')
    // cy.wait(1000)

    cy.get('header .nav-link.active')
      .contains('Movie')
    cy.get('.title')
      .contains('Frozen II')
  })
  // it('겨울왕국2 영화 아이템을 선택', () => {
  //   // cy.visit('/')
  // })
  // it('겨울왕국2 상세 정보를 확인', () => {
  // })
})