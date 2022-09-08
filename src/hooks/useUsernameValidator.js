const useUsernameValidator = () => {
    return (username) => {
        const usernameRegex = new RegExp(/^[ㄱ-ㅎ가-힣a-zA-Z0-9]{5,10}$/);
        return usernameRegex.test(username);
    }
}

export default useUsernameValidator;