const usePasswordValidator = () => {
    return (password) => {
        const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,15}$/);
        return passwordRegex.test(password);
    }
}

export default usePasswordValidator;