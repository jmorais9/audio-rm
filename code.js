document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var musica = document.getElementById("escolha").value;
    var audio = document.getElementById("som");

    audio.pause();

    
    audio.oncanplaythrough = function() {
        audio.play(); 
        audio.classList.add("ativo");

        
        console.log('Tempo atual de reprodução:', audio.currentTime);
        console.log('Mudo:', audio.muted);
        console.log('Pausado:', audio.paused);
        console.log('Taxa de reprodução:', audio.playbackRate);
        console.log('Estado de prontidão:', audio.readyState);
        console.log('Em busca:', audio.seeking);
        console.log('Controles:', audio.controls);
        console.log('Duração:', audio.duration);
        console.log('Terminou:', audio.ended);
    };

    
    if (musica == "terragaroa") {
        audio.src = "terra_da_garoa.mp3";
    } else if (musica == "jogocorinthians") {
        audio.src = "jogo_corinthians.mp3";
    } else if (musica == "400k") {
        audio.src = "400k.mp3";
    }

    
    audio.load();
});
