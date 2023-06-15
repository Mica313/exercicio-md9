$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefa = $('#nomeTarefa').val();
        const novoItem = $(`<li>${tarefa}</li>`);
        $(novoItem).appendTo('ul');

        $('li').click(function(){
            $(this).addClass('riscado')
        })
    })
})