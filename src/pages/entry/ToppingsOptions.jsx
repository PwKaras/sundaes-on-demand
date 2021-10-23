import Col from "react-bootstrap/Col";

export const ToppingsOptions = ( props ) => {
    const { name, imagePath, updateItemCount } = props;
    const handleChange = ( event ) => {
        updateItemCount( name, event.target.value );
    };
    return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }} >
        <img 
        style={{width: `75%`}}
        src={`http:localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        />
    </Col>
    )
}