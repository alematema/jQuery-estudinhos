var botao = $('#botao-um-a-um');
botao.click(rodarTesteUmAUm);
$('#botao-rodar-codigo-um-a-um').click(rodarTesteUmAUm);
$('#botao-mostrar-codigo-um-a-um').click(function(evt){

	$('#um-a-um').fadeToggle(1000,
		 function(){
			if($('#botao-mostrar-codigo-um-a-um').text()=='ver codigo')$('#botao-mostrar-codigo-um-a-um').text('esconder codigo');
			else $('#botao-mostrar-codigo-um-a-um').text('ver codigo');
		});
		
	});

function rodarTesteUmAUm(){
	
	var listaDom = document.getElementById("itens-um-a-um");
	while(listaDom.firstChild){
		listaDom.removeChild(listaDom.firstChild);
	}
	var lista = $('#itens-um-a-um');
	var init = new Date().getTime();
	
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	//INSERE UM A UM NA LISTA
	for(var i = 0; i < 1000; i++){
		var li = '<li>'+ i + '</li>';
		//AQUI APPEND É INVOCADO 1000 VEZES;
		lista.append(li);//INSERE UM A UM
	}
	//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	var duracao = new Date().getTime() - init;
	
	$('#duracao-um-a-um').show();
	$('#duracao-um-a-um').text('duracao '+ duracao + ' ms');
	
	botao.hide();
	$('#botao-rodar-codigo-um-a-um').show();
	$('#botao-mostrar-codigo-um-a-um').show();
			
	var header2 = $('.insere-elementos-um-a-um > h2');
	header2.attr('style','background-color:greenyellow; color:black');
	header2.text('teste : INSERIDOS 1000 elementos');
}