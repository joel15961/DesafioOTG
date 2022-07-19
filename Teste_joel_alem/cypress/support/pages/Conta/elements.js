//elementos da página para executar as ações

export const ELEMENTS = {
    username: ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine',
    email: '[sec-name="userEmail"] > .inputContainer > label',
    password: ':nth-child(3) > [a-hint="Password"] > .inputContainer > .ng-pristine',
    confirmPassword: '[a-hint="Confirm password"]',
    firstName: '[sec-name="userFirstName"] > .inputContainer > .ng-pristine',
    lastName: '[sec-name="userLastName"] > .inputContainer > .ng-pristine',
    phoneNumber: ':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > label',
    country: '[sec-name="userCountry"] > .inputContainer',
    city: '[sec-name="userCity"] > .inputContainer > .ng-pristine',
    address: '[sec-name="userAdress"] > .inputContainer > .ng-pristine',
    state: '[sec-name="userState"] > .inputContainer > label',
    postalCode: '#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine',
    iAgree: '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine',


}