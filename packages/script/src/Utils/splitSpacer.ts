const splitSpacer = (str: string) => {
    const splitArr = str.split('\n');
    return splitArr.filter((splitStr) => splitStr && splitStr);
};

export default splitSpacer;
