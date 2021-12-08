import * as yup from "yup";

/**
 * =================================== AUTH SCHEMA ============================================
 */

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Mail invalide !!!")
		.required("L'adresse mail ne doit pas être vide !"),
	password: yup
		.string()
		.trim()
		.min(8, "Le mot de passe doit avoir au moins 8 caractères !")
		.max(32)
		.required(),
});

export const registerSchema = yup.object.shape({});

/**
 * ================================== USER SCHEMA ============================================
 */

/**
 * ================================== SOCIETE SCHEMA =========================================
 */

export const typeSocieteSchema = yup.object().shape({
	libelle: yup.string().trim().required("Le libellé ne doit pas être vide !"),
	description: yup
		.string()
		.trim()
		.min(8, "La description doit avoir au moins 8 caractères !")
		.required(),
});

export const societeSchema = yup.object().shape({});

/**
 * ==================================== EMAIL SCHEMA =========================================
 */
