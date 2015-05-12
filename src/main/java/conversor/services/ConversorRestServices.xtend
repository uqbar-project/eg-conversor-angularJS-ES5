package conversor.services

import conversor.domain.Conversor
import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.api.annotation.Get

@Controller
class ConversorRestServices {
	val conversor = new Conversor

	@Get("/convertir/:millas")
	def Result convertir() {
		try {
			val iMillas = Integer.valueOf(millas)
			val kilometros = conversor.convertir(iMillas)
			response.contentType = "application/json"
			ok('''{ "kilometros" : "«kilometros»" }''')
		} 
		catch (NumberFormatException e) {
			response.characterEncoding = "UTF-8"
			badRequest('''Se esperaba un valor numérico y se recibió «millas»''');
		}
	}

	def static void main(String[] args) {
		XTRest.start(ConversorRestServices, 9000)
	}
}
