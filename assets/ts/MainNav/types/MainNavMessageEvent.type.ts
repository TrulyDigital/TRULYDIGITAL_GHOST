import { MainNavActionEnum } from "../enums/MainNavAction.enum";

/**
 * -----------------------------------------------------------
 * 
 * Estructura de datos - `Evento`
 * 
 * Nota:
 * Se crea la estructura del mensaje de evento para el estado,
 * es común a varios componentes que intervienen en el patrón
 * de diseño `observer`.
 * 
 * Nota:
 * Cuando ocurre algún evento que se desea observar o ver (por
 * ejemplo un click en el contexto de un menú de navegación
 * mobile), esta estructura de datos se enviará a todos los
 * componentes interesados de conocer ese evento en específico.
 * 
 * Nota:
 * Cada componente que recibe el objeto del tipo evento,
 * realizará alguna lógica dependiendo el tipo de acción
 * que viaja en el objeto del tipo evento.
 * 
 * Nota:
 * Implementación del patrón de diseño `observer` para el
 * menú de navegación mobile.
 * 
 * -----------------------------------------------------------
 */


//
export type MainNavMessageEventType = {
    action: MainNavActionEnum
}