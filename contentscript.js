$('.search-context-select-menu .js-select-button').text('All repositories');

$('.search-context-select-menu .select-menu-item').first().removeClass('selected').find('input').attr('checked', null);
$('.search-context-select-menu .select-menu-item').last().addClass('selected').find('input').attr('checked', 'checked');
