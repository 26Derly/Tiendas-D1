//Se realiza Conjunto de pruebas
describe('Crear una cuenta',()=>{
   beforeEach(()=>{
    cy.visit('https://domicilios.tiendasd1.com/')
   })
//se va a realizar prueba de iniciar sesión en Tiendas D1
it('Inicio de Registro correcto',()=>{
    //Se realiza el primer escenario.
   // cy.visit('https://domicilios.tiendasd1.com/')
// Ingresar a la dirección de domicilios tiendas d1
cy.wait(5000)
//Tiempo 
cy.get('button.broShD').click()
//Home de tiendas D1
cy.wait(5000)
cy.contains('span', 'Inicio Sesión').first().click()
//Seleccione Inicio de sesión
cy.wait(5000)
cy.get('button.log-in')
cy.wait(5000)
//Crear Cuenta, hacer clic en el botón de crear una cuenta
cy.get('button.eISNgI').click()
//Despues de hacer clic diligenciar los siguientes campos:
cy.wait(5000)
cy.get('input#register_name').type('Juan Duarte')
cy.get('input#register_email').type('juan310@gmail.com')
cy.get('input#register_identificationType').click()
cy.get('div.ant-select-item-option-active div').click()
cy.get('input#register_identificationNumber').type('22052024')
cy.get('input#register_confirmNumber').type('22052024')
cy.get('.ant-picker-input').click()
cy.get('input#register_birthday').click().type('22/10/1990')
cy.get('input#register_password').type('Dios2024')
cy.get('input#register_confirm').type('Dios2024')
cy.get('button[data-testid="form-submit"]').click()
cy.wait(5000)
cy.get('#missing-info_phoneNumber').type('3125295305')
cy.wait(4000)
cy.get('div[id="missing-info_terms"] input').check()
cy.wait(2000)
cy.get('div[id="missing-info_notifications"] input').check()
cy.wait(2000)
cy.contains('span', 'Completar registro').click()
// Se registra correctamente 
})
// Se cierra sesión
it('Cerrar sesión',()=>{
    cy.get('div.account-menu__icon').click()
    cy.wait(4000)
    cy.get('button.log-out').click()
    cy.wait(5000)
   })
// Caso de prueba Inicio de sesión 
it('Inicio de sesión',()=>{
cy.get('button.broShD').click()
//Nuevamente Inicio 
cy.contains('span', 'Inicio Sesión').first().click()
cy.get('button.log-in')
//Login
cy.get('input#signup_email').type('juan310@gmail.com')
//Se ingresa el email del ususario creado
cy.get('input#signup_password').type('Dios2024')
cy.contains('span', 'Iniciar Sesión').click()
//Inicio de sesión exitosa
})
//Caso de prueba 4 Comprar articulo
it.only('Comprar articulo de tienda D1',()=>{
    cy.get('input[type="search"]').type('HUEVOS DE CODORNIZ SOL NACIENTE 24 UND').click()
    cy.wait(2000)
    cy.get('svg[data-testid="search-action-icon"]').click()
    cy.wait(2000)
    cy.get('.add__button-text').click()
    cy.wait(2000)
    cy.get('div.bAlwwZ').click()
    cy.get('#Address_state').type('Antioquia').click()
    cy.get('div[title="Antioquia"] div').click()
    cy.wait(2000)
    cy.get('#Address_city').type('Bello').click()
    cy.get('div[title="Bello"] div').click()
    cy.wait(2000)
    cy.get('div.help').click()
    cy.get('.nomenclature > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
    //cy.get('span[title="Circular"]').type('Circular').click()
    //cy.get('div[title="Circular"] div').click()
    cy.wait(5000)
    cy.get('div.help').click()
    cy.get('input#Address_addressStucturedGroup_mainRoad').type('7').click()
    cy.wait(2000)
    cy.get('div.help').click()
    cy.get('input#Address_addressStucturedGroup_secundaryRoad').type('66B').click()
    cy.wait(2000)
    cy.get('div.help').click()
    cy.get('input#Address_addressStucturedGroup_complementaryRoad').type('67').click()
    cy.wait(2000)
    cy.get('div.help').click()
    cy.wait(2000)
    cy.get('input#Address_addressTwo').type('Laureles').click()
    cy.get('input#Address_description').type('Casa 3 piso').click()
    cy.contains('span', 'Agregar PIN de Referencia').click()
})
})
