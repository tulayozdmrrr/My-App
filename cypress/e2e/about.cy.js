describe('Anasayfa Temel Kontrolleri', () => {
  beforeEach(() => {
    // Uygulamayı aç
    cy.visit('http://localhost:5173/');
  });

  it('Sayfanın başlığı ve ana butonları doğru şekilde görüntüleniyor mu', () => {
    // Sayfadaki Almila Su başlığını kontrol et
    cy.get('h3').should('contain.text', 'Almila Su');

    // Sayfadaki ana başlığı kontrol et
    cy.get('h1').should('contain.text', 'Creative thinker');

    // "Hire Me" butonunun görünür olduğunu kontrol et
    cy.get('section button').contains('Hire Me').should('be.visible');

    // "Github" butonunun görünür olduğunu kontrol et
    cy.get('section button').contains('Github').should('be.visible');
  });

  it('Dil değişimi doğru çalışıyor mu', () => {
    // TÜRKÇE butonuna tıkla
    cy.contains('button', 'TÜRKÇE').click();

    // Sayfadaki başlığın TR diline geçtiğini kontrol et
    cy.get('h1').should('contain.text', 'Yaratıcı düşünen');

    // "Beni İşe Al" butonunun görünür olduğunu kontrol et
    cy.get('section button').contains('Beni İşe Al').should('be.visible');
  });
});