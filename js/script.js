
let contador = 0; 
let input = document.getElementById("tarefa");
let btnadd = document.getElementById("btn-add");
let main = document.getElementById("list");

function addTarefa(){
	// pegar o valor digitado no input//
	let valorInput = input.value;
	// valorInpute não pode ser vazio indefinide ou nulo//
	if ((valorInput !=="") && (valorInput !== null) &&  (valorInput !== undefined)){
		
		++contador;

		let novoItem = `<div id="${contador}" class="item">
			<div onclick="marcarTarefa(${contador})"  class="item-icon">
				<i id="icone_${contador}" class='bx bx-circle'></i>
			</div>

			<div onclick="marcarTarefa(${contador})" class="item-name">
				${valorInput}
			</div>

			<div class="item-button">
				<button onclick="deletar(${contador})"  class="delete"><i class='bx bx-trash'>Excluir</i></button>
			</div>
		</div>`;

		//add item no main
		main.innerHTML += novoItem;

		// limpar o campo
		input.value="";
		input.focus();


	}
}
		//remover tarefa
		function deletar(id) {
		var tarefaa = document.getElementById(id);
		tarefaa.remove();
	}

		//marcar tarefa
		function marcarTarefa(id){
			var item = document.getElementById(id);
			var classe = item.getAttribute('class');

			if (classe == "item") {
				item.classList.add('clicado');
				var icone = document.getElementById('icone_'+id);
				icone.classList.remove('bx-circle');
				icone.classList.add('bxs-check-circle');

				item.parentNode.appendChild(item);

			} else {
				item.classList.remove('clicado');

				var icone = document.getElementById('icone_'+id);
				icone.classList.remove('bxs-check-circle');
				icone.classList.add('bx-circle');
			}
		}
	


		// incluir tarefa clicando no enter
		input.addEventListener("keyup", function (event){
			// tecla enter é igual (13) no teclado
			if (event.keyCode === 13) {
				event.preventDefault();
				btnadd.click();
			}
		})