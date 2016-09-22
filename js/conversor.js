function Conversor() {
	/* Atributos */
    this.millas = 0;
    this.kilometros = ' <ingrese millas> ';

    /* Metodos */
    this.convertir = function() {
        this.kilometros = this.millas * 1.60934;
    };
}