import Container from "../container/container";
import Quote from "../quote/quote";

const NotFound = () => {
    return(
    <Container>
        <Quote>
            Ooops, the page you are looking for does not exist.
        </Quote>
    </Container>
    )
}

export default NotFound;