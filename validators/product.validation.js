import Joi from "joi";

export const productSchema = Joi.object({
  nombre: Joi.string().required().messages({
    "string.base": `"nombre" debe ser un texto`,
    "any.required": `"nombre" es un campo obligatorio`
  }),
  precio: Joi.string().required().messages({
    "string.base": `"precio" debe ser un texto`,
    "any.required": `"precio" es un campo obligatorio`
  }),
  stock: Joi.number().required().messages({
    "number.base": `"stock" debe ser un número`,
    "any.required": `"stock" es un campo obligatorio`
  }),
  marca: Joi.string().required().messages({
    "string.base": `"marca" debe ser un texto`,
    "any.required": `"marca" es un campo obligatorio`
  }),
  categoria: Joi.string().required().messages({
    "string.base": `"categoria" debe ser un texto`,
    "any.required": `"categoria" es un campo obligatorio`
  }),
  descCorta: Joi.string().required().messages({
    "string.base": `"descCorta" debe ser un texto`,
    "any.required": `"descCorta" es un campo obligatorio`
  }),
  envio: Joi.boolean().required().messages({
    "boolean.base": `"envio" debe ser un valor booleano`,
    "any.required": `"envio" es un campo obligatorio`
  }),
  foto: Joi.string().uri().required().messages({
    "string.base": `"foto" debe ser un texto`,
    "string.uri": `"foto" debe ser una URL válida`,
    "any.required": `"foto" es un campo obligatorio`
  }),
})
.unknown(false);
