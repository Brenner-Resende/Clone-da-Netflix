const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Selecionar conteúdo do tab
function selectItem(e) {
    removeBorder();
    removeShow();
    // Adicionar borda ao tab selecionado
    this.classList.add('tab-border')
    // Pegar content item do DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Adicionar classe show
    tabContentItem.classList.add('show');
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}
// Evento de clique no tab
tabItems.forEach(item =>item.addEventListener('click', selectItem))