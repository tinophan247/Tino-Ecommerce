export const convertNumberToVND = (num) => {
    const convertStr = num.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    return convertStr;
};

