var dados;
var total_count;
var links;
var pages;

async function createCard() {

	try {
        var consultaCEP = await fetch(`https://IdolizedBriefChief.popoflipe.repl.co/produtos?regiao=norte&ano=2022`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
	}
		catch (erro) {
			mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
			console.log(erro);
		}

	var mensagemErro = document.getElementById('cardJoao');

	var cep = consultaCEPConvertida[0];
	console.log(cep)

	mensagemErro.innerHTML = `<div class="well card">
							<div class="col-md-3 image-card">
								<img alt="Foto" height="155"
									src="https://avatars.githubusercontent.com/u/67297228?s=100&v=4.jpg"
									width="220" />
							</div>
							<div class="col-md-6 body-card">
							    <p class="txt-name inline">${cep.Produto}</p>
							    <p class="txt-category badge badge-secondary inline">${cep['Categoria do Produto']}</p>
							    <p class="txt-motor">${cep['Local da compra']}</p>
							    <p class="txt-description">${cep['Vendedor']}</p>
							    <ul class="lst-items">
								<li class="txt-items">►${cep['Data da Compra']}</li>
								<li class="txt-items">► João de João</li>
								<li class="txt-items">► João de João</li>
								<li class="txt-items">► João de João</li>
								<li class="txt-items">...</li>
							    </ul>
							    <p class="txt-location">Belo Horizonte - MG</p>
							</div>
							<div class="col-md-3 value-card">
								<div class="value">
									<p class="txt-value">R$ ${cep['Preço']}</p>
								</div>
							</div>
						</div>`

	
}

var botaoJoao = document.getElementById('botaoJoao');

botaoJoao.addEventListener("click", () => createCard());