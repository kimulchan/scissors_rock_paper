const jsonParser = <T extends unknown>(jsonString: string) => {
    return JSON.parse(jsonString) as T;
};

export default jsonParser;
