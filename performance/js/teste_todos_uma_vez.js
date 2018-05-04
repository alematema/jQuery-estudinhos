var botaoTodos = $('#botao-todos');
botaoTodos.click(rodarTesteTodosDeUmaVez);
$('#botao-rodar-codigo-todos-uma-vez').click(rodarTesteTodosDeUmaVez);
$('#botao-mostrar-codigo-todos').click(function () {
	$('#todos').stop().slideToggle(1500);
	if ($(this).text() == 'ver codigo') $(this).text('esconder codigo');
	else $(this).text('ver codigo');
});

function rodarTesteTodosDeUmaVez() {

	

	var listaDom = document.getElementById("itens-todos-de-uma-vez");
	while (listaDom.firstChild) {
		listaDom.removeChild(listaDom.firstChild);
	}

	var lista = $('#itens-todos-de-uma-vez');
	
	var init = new Date().getTime();
	var lis = [];

	for (var i = 0; i < 1000; i++) {
		lis.push("<li> " + i + "</li>"); //MONTA ARRAY DE TAGS li
	}
	//INSERE TODOS DE UMA VEZ, COM AUXILIO DE UM ARRAY E UM JOIN PARA UMA STRING.
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	//AQUI APPEND É INVOCADO APENAS UMA VEZ;
	lista.append(lis.join("")); //MONTA STRING E APPEND.

	var duracao = new Date().getTime() - init;

	$('#duracao-todos-uma-vez').show();
	$('#duracao-todos-uma-vez').text('duracao ' + duracao + ' ms');
	botaoTodos.hide();
	$('#botao-mostrar-codigo-todos').show();
	$('#botao-rodar-codigo-todos-uma-vez').show();

	var header2 = $('.insere-elementos-todos-de-uma-vez > h2');
	header2.attr('style', 'background-color:greenyellow; color:black');
	header2.text('teste : INSERIDOS 1000 elementos TODOS DE UMA VEZ');

}
