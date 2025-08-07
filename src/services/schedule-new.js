// Enviando um novo agendamento na API
import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, when }) {
	console.log("Enviando para API:", { id, name, when });
	try {
		// Faz a requisição para enviar os dados do agendamento
		await fetch(`${apiConfig.baseURL}/schedules`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id, name, when }),
		});
		// Exibe mensagem de sucesso
		alert("Agendamento realizado com sucesso!");
	} catch (error) {
		console.log(error);
		alert("Não foi possível agendar, tente novamente mais tarde!");
	}
}
