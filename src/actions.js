
export const addEmploye=(employe)=>({
    type:'ADD_EMPLOYE',
    payload:employe
});

export const updateEmploye=(employe)=>({
    type:'UPDATE_EMPLOYE',
    payload:employe
});

export const deleteEmploye=(id)=>({
    type:'DELETE_EMPLOYE',
    payload:id
});

export const setEmployes=(employes)=>({
    type:'SET_EMPLOYE',
    payload:employes,
})

