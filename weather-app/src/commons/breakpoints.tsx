const size = {
    xs: '320px',
    sm: '768px',
    md: '504px',
    lg: '1200px',
};
const device = {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
};
export default { size, device };
