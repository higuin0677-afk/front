document.addEventListener('DOMContentLoaded', () => {

  // 1. Navegação do Menu Lateral
  const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const href = item.getAttribute('href');
      if (href && href !== '#') {
        window.location.href = href;
      }
    });
  });

  // 2. Filtro de Busca Dinâmica nas Tabelas
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const tableRows = document.querySelectorAll('.agenda-table tbody tr');

      tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (text.includes(term)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });

  // 3. Submissão de Formulários (Feedback visual)
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      // Impede o recarregamento padrão se for tratar via JS no futuro
      console.log('Formulário enviado com sucesso!');
    });
  });

});