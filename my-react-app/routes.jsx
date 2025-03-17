import {useParams} from 'react-router-dom';
function Resources() {
    const {category} = useParams();
    return <h1>Viser ressurser for: {category}</h1>;
}