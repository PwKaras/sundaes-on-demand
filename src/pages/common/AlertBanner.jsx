import Alert from 'react-bootstrap/Alert';

export const AlertBanner = (props) => {
    const { message, variant } = props;

    const alertMessage = message || 'An unexpected error ocured. Please try again later.';
    const alertVariant = variant || 'danger';

    return (
        <Alert variant={alertVariant} style={{backgroundColor: "red"}}>
            {alertMessage}
        </Alert>
    )
}