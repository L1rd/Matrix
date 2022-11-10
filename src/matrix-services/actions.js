import { MatrixActions } from "../store/action-types";

 
 export const addMatrixRow = (payload) => ({
	type: MatrixActions.ADD_ROW,
	payload: payload,
 });
 
 export const removeMatrixRow = (payload) => ({
	type: MatrixActions.REMOVE_ROW,
	payload: payload,
 });
 
 export const createMatrix = (payload) => ({
	type: MatrixActions.CREATE_MATRIX,
	payload: payload,
 });
 
 export const setMatrixSettings = (payload) => ({
	type: MatrixActions.SET_SETTINGS,
	payload: payload,
 });
 
 export const setClosestId = (payload) => ({
	type: MatrixActions.SET_CLOSEST_ID,
	payload: payload,
 });
 
 export const increaseAmount = (payload) => ({
	type: MatrixActions.INCREASE_AMOUNT,
	payload: payload,
 });
 
 export const resetClosestId = (payload) => ({
	type: MatrixActions.CLEAR_CLOSEST_ID,
	payload: payload,
 });