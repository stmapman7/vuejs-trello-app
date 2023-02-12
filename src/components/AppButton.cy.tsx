import AppButton from './AppButton.vue';

describe('<AppButton />', () => {
  it('renders an app button', () => {
    // see: https://on.cypress.io/mounting-vue
    // cy.mount(() =><AppButton>Hello World!</AppButton>)
    //   .get("button")
    //   .click();
    cy.mount(AppButton, {
         default: "Hello World!",
    })
  })
})