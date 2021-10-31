const size = {
    xs: '320px',
    sm: '768px',
    ms: '620px',
    md: '504px',
    lg: '1200px',
};
const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    ms: `(max-width: ${size.ms})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
};
export default { size, device };
