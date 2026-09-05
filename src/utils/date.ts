export const formateDate = (date: Date) => {
    return date.toISOString().split('T')[0];
};

export const formatDateTime = (date: Date) => {
    const [d, t] = date.toISOString().split('T');
    if (t === '00:00:00.000Z') return d;
    else return d + ' ' + t.slice(0, -5);
};
