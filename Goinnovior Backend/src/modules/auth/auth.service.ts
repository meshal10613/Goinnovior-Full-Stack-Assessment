const createUser = async(payload: Record<string, unknown>) => {
	console.log(payload);
};

const loginUser = async(payload: Record<string, unknown>) => {
	console.log(payload)
};

export const authService = {
    createUser,
    loginUser,
};